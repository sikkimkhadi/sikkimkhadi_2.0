import { Component, PLATFORM_ID, inject, OnInit, OnDestroy, HostListener } from '@angular/core';
import { isPlatformBrowser, CommonModule, TitleCasePipe } from '@angular/common';
import { CloudinaryService, CarouselSlide } from '../../../services/cloudinary.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';



/**
 * Desktop Carousel Component
 * Displays a rotating carousel of images with titles and taglines
 * Features automatic sliding and smooth transitions
 * Handles SSR compatibility through platform checking
 */
@Component({
  selector: 'app-desk-cl',
  standalone: true,
  imports: [CommonModule, TitleCasePipe],
  templateUrl: './desk-cl.component.html',
  styleUrl: './desk-cl.component.css'
})
export class DeskClComponent implements OnInit, OnDestroy {
  // Inject PLATFORM_ID for SSR compatibility
  private platformId = inject(PLATFORM_ID);
  
  // Carousel data and state
  slides: CarouselSlide[] = [];
  currentIndex = 0;
  isPaused = false;
  
  // Timer management
  private intervalId: any;
  slideIntervalSeconds = 10;
  countdown: number = this.slideIntervalSeconds;
  strokeDashoffset: number = 0;
  
  // Loading state
  isLoading = true;
  hasError = false;
  
  // Hover state for auto-pause
  isHovered = false;
  
  // Scroll state for auto-pause
  isScrollPaused = false;

  constructor(private cloudinaryService: CloudinaryService) {}

  ngOnInit(): void {
    this.fetchImages();
  }

  /**
   * Fetch images from Cloudinary service
   */
  fetchImages(): void {
    this.isLoading = true;
    this.hasError = false;
    
    this.cloudinaryService.getImages().pipe(
      catchError(error => {
        console.error('Error fetching images:', error);
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
        url: '../../../../assets/carousel-desk/incense.jpg',
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
   * Go to specific slide
   */
  goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
    this.resetTimer();
  }

  /**
   * Toggle pause/play functionality
   */
  togglePause(): void {
    this.isPaused = !this.isPaused;
  }

  /**
   * Handle mouse enter - pause on hover
   */
  onMouseEnter(): void {
    this.isHovered = true;
    this.isPaused = true;
  }

  /**
   * Handle mouse leave - resume on mouse leave
   */
  onMouseLeave(): void {
    this.isHovered = false;
    this.isPaused = false;
  }

  /**
   * Handle scroll events - pause when scrolled away from carousel
   */
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const carouselElement = document.querySelector('.carousel-container');
      
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
      if (!this.isPaused && !this.isHovered && !this.isScrollPaused) {
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
  private resetTimer(): void {
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
