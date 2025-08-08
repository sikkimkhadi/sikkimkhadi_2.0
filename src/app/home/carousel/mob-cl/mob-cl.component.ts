import { Component, PLATFORM_ID, inject, OnInit, OnDestroy, HostListener } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { CloudinaryService, CarouselSlide } from '../../../services/cloudinary.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';



/**
 * Mobile Carousel Component
 * Displays a rotating carousel of images with titles and taglines
 * Features automatic sliding and smooth transitions
 */
@Component({
  selector: 'app-mob-cl',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mob-cl.component.html',
  styleUrl: './mob-cl.component.css'
})
export class MobClComponent implements OnInit, OnDestroy {
  // Inject PLATFORM_ID to handle SSR compatibility
  private platformId = inject(PLATFORM_ID);
  
  // Carousel data and state
  slides: CarouselSlide[] = [];
  currentIndex = 0;
  isPaused = false;
  
  // Timer management
  private intervalId: any;
  slideIntervalSeconds = 8; // Longer for mobile
  countdown: number = this.slideIntervalSeconds;
  strokeDashoffset: number = 0;
  
  // Touch and interaction state
  isTouched = false;
  showControls = false;
  
  // Swipe detection
  private startX = 0;
  private startY = 0;
  private endX = 0;
  private endY = 0;
  private minSwipeDistance = 50;
  
  // Loading state
  isLoading = true;
  hasError = false;
  
  // Scroll state for auto-pause
  isScrollPaused = false;

  constructor(private cloudinaryService: CloudinaryService) {}

  ngOnInit(): void {
    this.fetchImages();
  }

  /**
   * Fetch mobile-specific images from Cloudinary service
   */
  fetchImages(): void {
    this.isLoading = true;
    this.hasError = false;
    
    this.cloudinaryService.getImages(undefined, undefined, 'mobile').pipe(
      catchError(error => {
        console.error('Error fetching mobile images:', error);
        this.hasError = true;
        return of({ slides: this.getFallbackSlides(), total: 1 });
      })
    ).subscribe(response => {
      this.slides = response.slides;
      this.isLoading = false;
      
      if (isPlatformBrowser(this.platformId) && this.slides.length > 0) {
        this.startTimer();
      }
    });
  }

  /**
   * Get fallback slides in case of error
   */
  getFallbackSlides(): CarouselSlide[] {
    return [
      {
        id: 1,
        url: '../../../../assets/carousel-mb/honey.jpg',
        title: 'Sikkim Khadi',
        description: 'Authentic handmade products from Sikkim'
      }
    ];
  }

  /**
   * Navigate to previous slide
   */
  prevSlide(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide ? this.slides.length - 1 : this.currentIndex - 1;
    this.currentIndex = newIndex;
    this.resetTimer();
  }

  /**
   * Navigate to next slide
   */
  nextSlide(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.currentIndex = newIndex;
    this.resetTimer();
  }

  /**
   * Handle touch start for pause and swipe detection
   */
  onTouchStart(event: TouchEvent): void {
    this.isTouched = true;
    this.showControls = true;
    this.isPaused = true;
    
    const touch = event.touches[0];
    this.startX = touch.clientX;
    this.startY = touch.clientY;
  }

  /**
   * Handle touch end for swipe detection
   */
  onTouchEnd(event: TouchEvent): void {
    if (!this.isTouched) return;
    
    const touch = event.changedTouches[0];
    this.endX = touch.clientX;
    this.endY = touch.clientY;
    
    this.handleSwipe();
    
    // Hide controls and resume after delay
    setTimeout(() => {
      this.showControls = false;
      this.isPaused = false;
      this.isTouched = false;
    }, 3000);
  }

  /**
   * Handle swipe gestures
   */
  private handleSwipe(): void {
    const deltaX = this.endX - this.startX;
    const deltaY = this.endY - this.startY;
    
    // Check if horizontal swipe is more significant than vertical
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > this.minSwipeDistance) {
      if (deltaX > 0) {
        // Swipe right - previous slide
        this.prevSlide();
      } else {
        // Swipe left - next slide
        this.nextSlide();
      }
    }
  }

  /**
   * Handle scroll events - pause when scrolled away from carousel
   */
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const carouselElement = document.querySelector('.carousel-m');
      
      if (carouselElement) {
        const carouselRect = carouselElement.getBoundingClientRect();
        const carouselTop = carouselRect.top + scrollPosition;
        const carouselBottom = carouselTop + carouselRect.height;
        
        // Check if carousel is visible in viewport
        const isVisible = carouselTop < (scrollPosition + windowHeight) && carouselBottom > scrollPosition;
        
        this.isScrollPaused = !isVisible;
      }
    }
  }

  /**
   * Start the automatic timer with visual progress
   */
  private startTimer(): void {
    const totalTime = this.slideIntervalSeconds * 1000;
    const interval = 100;
    let elapsedTime = 0;
    const circumference = 2 * Math.PI * 18;

    this.intervalId = setInterval(() => {
      if (!this.isPaused && !this.isTouched && !this.isScrollPaused) {
        elapsedTime += interval;
        const progress = elapsedTime / totalTime;
        this.strokeDashoffset = circumference * progress;
        this.countdown = Math.ceil((totalTime - elapsedTime) / 1000);

        if (elapsedTime >= totalTime) {
          this.nextSlide();
          elapsedTime = 0;
        }
      }
    }, interval);
  }

  /**
   * Clear the timer
   */
  private clearTimer(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  /**
   * Reset the timer
   */
  resetTimer(): void {
    this.clearTimer();
    this.countdown = this.slideIntervalSeconds;
    this.strokeDashoffset = 0;
    if (isPlatformBrowser(this.platformId)) {
      this.startTimer();
    }
  }

  /**
   * Cleanup method to prevent memory leaks
   * Clears the interval when component is destroyed
   */
  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId) && this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
