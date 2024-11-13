import { Component, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Interface defining the structure of a carousel slide
 * @property id - Unique identifier for the slide
 * @property image - Path to the slide image
 * @property title - Main heading text for the slide
 * @property tagline - Subheading text for the slide
 */
interface CarouselSlide {
  id: number;
  image: string;
  title: string;
  tagline: string;
}

/**
 * Desktop Carousel Component
 * Displays a rotating carousel of images with titles and taglines
 * Features automatic sliding and smooth transitions
 * Handles SSR compatibility through platform checking
 */
@Component({
  selector: 'app-desk-cl',
  standalone: true,
  imports: [],
  templateUrl: './desk-cl.component.html',
  styleUrl: './desk-cl.component.css'
})
export class DeskClComponent {
  // Inject PLATFORM_ID for SSR compatibility
  private platformId = inject(PLATFORM_ID);
  
  // Track current active slide
  currentSlide = 1;
  
  // Store interval reference for cleanup
  private intervalId: any;

  // Carousel slide data with type safety
  slides: CarouselSlide[] = [
    {
      id: 1,
      image: '../../../../assets/carousel-desk/incense.jpg',
      title: 'Organic Incense',
      tagline: 'Traditional aromatic experience'
    },
    {
      id: 2,
      image: '../../../../assets/carousel-desk/members.jpg',
      title: 'SKVIB Members',
      tagline: 'Our Team'
    },
    {
      id: 3,
      image: '../../../../assets/carousel-desk/bhawan.jpg',
      title: 'Khadi Bhawan',
      tagline: 'Deorali, Gangtok'
    },
    {
      id: 4,
      image: '../../../../assets/carousel-desk/store.jpg',
      title: 'Khadi Store',
      tagline: 'Deorali Khadi Outlet'
    },
    {
      id: 5,
      image: '../../../../assets/carousel-desk/toiletories.jpg',
      title: 'Khadi Toiletories',
      tagline: 'Handmade Toiletries'
    },
    {
      id: 6,
      image: '../../../../assets/carousel-desk/products.jpg',
      title: 'Khadi Products',
      tagline: 'Our Collection'
    }
  ];

  /**
   * Initialize carousel on component creation
   * Starts automatic sliding if in browser environment
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
