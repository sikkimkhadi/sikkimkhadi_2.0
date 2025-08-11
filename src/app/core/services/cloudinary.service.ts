import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

/**
 * Interface defining the structure of a carousel slide
 */
export interface CarouselSlide {
  id: number;
  url: string;
  title: string;
  description: string;
  category?: string;
}

/**
 * Response interface for Cloudinary service
 */
export interface CloudinaryResponse {
  slides: CarouselSlide[];
  total: number;
}

/**
 * Cloudinary Service
 * Simulates fetching images from Cloudinary with conditional loading
 * In production, this would make actual API calls to Cloudinary
 */
@Injectable({
  providedIn: 'root'
})
export class CloudinaryService {

  // Simulated desktop image data - in production this would come from Cloudinary API
  private mockDesktopSlides: CarouselSlide[] = [
    {
      id: 1,
      url: '../../../../assets/carousel-desk/gandhi.jpg',
      title: 'Mahatma Gandhi',
      description: 'Father of the Khadi Movement',
      category: 'ideal'
    },
    {
      id: 2,
      url: '../../../../assets/carousel-desk/incense.jpg',
      title: 'Organic Incense',
      description: 'Traditional aromatic experience crafted with natural ingredients',
      category: 'products'
    },
    {
      id: 3,
      url: '../../../../assets/carousel-desk/members.jpg',
      title: 'SKVIB Members',
      description: 'Our dedicated team working towards sustainable development',
      category: 'team'
    },
    {
      id: 4,
      url: '../../../../assets/carousel-desk/bhawan.jpg',
      title: 'Khadi Bhawan',
      description: 'Our main center located at Deorali, Gangtok',
      category: 'locations'
    },
    {
      id: 5,
      url: '../../../../assets/carousel-desk/store.jpg',
      title: 'Khadi Store',
      description: 'Visit our retail outlet at Deorali for authentic Khadi products',
      category: 'locations'
    },
    {
      id: 6,
      url: '../../../../assets/carousel-desk/toiletories.jpg',
      title: 'Khadi Toiletries',
      description: 'Handmade toiletries using traditional methods and natural ingredients',
      category: 'products'
    },
    {
      id: 7,
      url: '../../../../assets/carousel-desk/products.jpg',
      title: 'Khadi Products',
      description: 'Explore our complete collection of authentic Khadi items',
      category: 'products'
    }
  ];

  // Simulated mobile image data - optimized for mobile viewing
  private mockMobileSlides: CarouselSlide[] = [
    {
      id: 1,
      url: '../../../../assets/carousel-mb/gandhi_mobile.jpg',
      title: 'Mahatma Gandhi',
      description: 'Father of the Khadi Movement',
      category: 'ideal'
    },
    {
      id: 2,
      url: '../../../../assets/carousel-mb/Incense.jpg',
      title: 'Organic Incense',
      description: 'Traditional aromatic experience',
      category: 'products'
    },
    {
      id: 3,
      url: '../../../../assets/carousel-mb/members.jpg',
      title: 'SKVIB Members',
      description: 'Our dedicated team',
      category: 'team'
    },
    {
      id: 4,
      url: '../../../../assets/carousel-mb/honey.jpg',
      title: 'Organic Honey',
      description: 'Pure and natural sweetness',
      category: 'products'
    },
    {
      id: 5,
      url: '../../../../assets/carousel-mb/store.jpg',
      title: 'Khadi Store',
      description: 'Deorali Khadi Outlet',
      category: 'locations'
    },
    {
      id: 6,
      url: '../../../../assets/carousel-mb/toiletories.jpg',
      title: 'Khadi Toiletries',
      description: 'Handmade toiletries',
      category: 'products'
    },
    {
      id: 7,
      url: '../../../../assets/carousel-mb/bhawan.jpg',
      title: 'Khadi Bhawan',
      description: 'Deorali, Gangtok',
      category: 'locations'
    }
  ];

  constructor() { }

  /**
   * Fetch images conditionally based on category and device type
   * @param category - Optional category filter ('products', 'team', 'locations')
   * @param limit - Maximum number of slides to return
   * @param deviceType - Device type ('desktop' or 'mobile')
   * @returns Observable<CloudinaryResponse>
   */
  getImages(category?: string, limit?: number, deviceType: 'desktop' | 'mobile' = 'desktop'): Observable<CloudinaryResponse> {
    const sourceSlides = deviceType === 'mobile' ? this.mockMobileSlides : this.mockDesktopSlides;
    let filteredSlides = sourceSlides;

    // Filter by category if provided
    if (category) {
      filteredSlides = sourceSlides.filter((slide: CarouselSlide) => slide.category === category);
    }

    // Limit results if specified
    if (limit) {
      filteredSlides = filteredSlides.slice(0, limit);
    }

    // Simulate API delay
    return of({
      slides: filteredSlides,
      total: filteredSlides.length
    }).pipe(delay(500));
  }

  /**
   * Get all available categories for a device type
   * @param deviceType - Device type ('desktop' or 'mobile')
   * @returns Observable<string[]>
   */
  getCategories(deviceType: 'desktop' | 'mobile' = 'desktop'): Observable<string[]> {
    const sourceSlides = deviceType === 'mobile' ? this.mockMobileSlides : this.mockDesktopSlides;
    const categories = [...new Set(sourceSlides.map((slide: CarouselSlide) => slide.category).filter(Boolean))];
    return of(categories as string[]).pipe(delay(200));
  }

  /**
   * Get a single slide by ID and device type
   * @param id - Slide ID
   * @param deviceType - Device type ('desktop' or 'mobile')
   * @returns Observable<CarouselSlide | null>
   */
  getSlideById(id: number, deviceType: 'desktop' | 'mobile' = 'desktop'): Observable<CarouselSlide | null> {
    const sourceSlides = deviceType === 'mobile' ? this.mockMobileSlides : this.mockDesktopSlides;
    const slide = sourceSlides.find((s: CarouselSlide) => s.id === id) || null;
    return of(slide).pipe(delay(300));
  }

  /**
   * In production, this would handle Cloudinary transformations
   * @param url - Original image URL
   * @param transformations - Cloudinary transformation parameters
   * @returns Transformed URL
   */
  getTransformedUrl(url: string, transformations: string = ''): string {
    // In production: return cloudinary transformed URL
    // For now, return original URL
    return url;
  }
}
