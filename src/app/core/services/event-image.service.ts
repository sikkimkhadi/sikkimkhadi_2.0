import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface EventImage {
  id: string;
  url: string;
  alt: string;
  cloudinaryId?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventImageService {
  // Simulate current local images as if they were from Cloudinary
  private mockCloudinaryImages: EventImage[] = [
    {
      id: 'latest-events',
      url: '../../../assets/events/pic4.jpg',
      alt: 'Our Latest Events - Traditional Khadi weaving demonstration',
      cloudinaryId: 'sikkim-khadi/events/latest-events-pic4'
    },
    {
      id: 'upcoming-events', 
      url: '../../../assets/events/flag_hosting/thumbnail.jpg',
      alt: 'National Flag Hosting - Har Ghar Tiranga ceremony at Khadi Bhawan',
      cloudinaryId: 'sikkim-khadi/events/flag-hosting-thumbnail'
    },
    {
      id: 'tiranga-exhibition',
      url: '../../../assets/exhibition/tiranga_weaves.jpg', 
      alt: 'Tiranga Weaves & Threads Exhibition - A Celebration of Unity in Colours',
      cloudinaryId: 'sikkim-khadi/exhibition/tiranga-weaves-banner'
    }
  ];

  constructor() { }

  /**
   * Simulate fetching images from Cloudinary
   * In production, this would make actual HTTP requests to Cloudinary API
   */
  getEventImages(): Observable<EventImage[]> {
    // Simulate network delay
    return of(this.mockCloudinaryImages).pipe(
      delay(300) // 300ms delay to simulate API call
    );
  }

  /**
   * Get a specific event image by ID
   */
  getEventImageById(id: string): Observable<EventImage | undefined> {
    const image = this.mockCloudinaryImages.find(img => img.id === id);
    return of(image).pipe(
      delay(150) // Shorter delay for single image
    );
  }

  /**
   * Simulate Cloudinary URL transformation
   * In production, this would apply Cloudinary transformations
   */
  getOptimizedImageUrl(cloudinaryId: string, width: number = 400, height: number = 300): string {
    // For now, return the original URL
    // In production: return `https://res.cloudinary.com/your-cloud/image/upload/w_${width},h_${height},c_fill/${cloudinaryId}`
    const image = this.mockCloudinaryImages.find(img => img.cloudinaryId === cloudinaryId);
    return image ? image.url : '';
  }
}
