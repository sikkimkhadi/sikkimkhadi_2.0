import { Component, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Interface defining the structure of a carousel slide
 */
interface CarouselSlide {
  id: number;
  image: string;
  title: string;
  tagline: string;
}

/**
 * Mobile Carousel Component
 * Displays a rotating carousel of images with titles and taglines
 * Features automatic sliding and smooth transitions
 */
@Component({
  selector: 'app-mob-cl',
  standalone: true,
  imports: [],
  templateUrl: './mob-cl.component.html',
  styleUrl: './mob-cl.component.css'
})
export class MobClComponent {
  // Inject PLATFORM_ID to handle SSR compatibility
  private platformId = inject(PLATFORM_ID);
  
  // Track current slide index
  currentSlide = 1;
  
  // Store interval reference for cleanup
  private intervalId: any;

  // Carousel slide data with type safety
  slides: CarouselSlide[] = [
    {
      id: 1,
      image: '../../../../assets/carousel-mb/Incense.jpg',
      title: 'Organic Incense',
      tagline: 'Traditional aromatic experience'
    },
    {
      id: 2,
      image: '../../../../assets/carousel-mb/bhawan.jpg',
      title: 'Khadi Bhawan',
      tagline: 'Deorali, Gangtok'
    },
    {
      id: 3,
      image: '../../../../assets/carousel-mb/honey.jpg',
      title: 'Organic Honey',
      tagline: 'Pure and Natural'
    },
    {
      id: 4,
      image: '../../../../assets/carousel-mb/store.jpg',
      title: 'Khadi Store',
      tagline: 'Deorali Khadi Outlet'
    },
    {
      id: 5,
      image: '../../../../assets/carousel-mb/toiletories.jpg',
      title: 'Khadi Toiletories',
      tagline: 'Handmade Toiletries'
    }
  ];

  /**
   * Initialize carousel on component creation
   * Checks for browser environment before starting interval
   */
  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.startCarousel();
    }
  }

  /**
   * Starts the automatic carousel rotation
   * Changes slides every 5 seconds
   * @private
   */
  private startCarousel() {
    this.intervalId = setInterval(() => {
      this.currentSlide = this.currentSlide === this.slides.length ? 1 : this.currentSlide + 1;
    }, 5000);
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
