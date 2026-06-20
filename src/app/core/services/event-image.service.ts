import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { EventsService } from './events.service';

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
  private eventsService = inject(EventsService);
  // Simulate current local images as if they were from Cloudinary
  private mockCloudinaryImages: EventImage[] = [
    {
      id: 'latest-events',
      url: '../../../assets/events/pic4.jpg',
      alt: 'Our Latest Events - Traditional Khadi weaving demonstration',
      cloudinaryId: 'sikkim-khadi/events/latest-events-pic4'
    },
    {
      id: 'pmegp-workshop',
      url: '../../../assets/events/PMEGP_Workshop/home_card.jpg',
      alt: 'State Level PMEGP Workshop - KVIC workshop at Paryatan Bhawan, Gangtok',
      cloudinaryId: 'sikkim-khadi/events/pmegp-workshop-home-card'
    },
    {
      id: 'upcoming-events',
      url: '../../../assets/events/flag_hosting/thumbnail.jpg',
      alt: 'National Flag Hosting - Har Ghar Tiranga ceremony at Khadi Bhawan',
      cloudinaryId: 'sikkim-khadi/events/flag-hosting-thumbnail'
    }
  ];

  constructor() { }

  /**
   * Simulate fetching images from Cloudinary
   * In production, this would make actual HTTP requests to Cloudinary API
   */
  getEventImages(): Observable<EventImage[]> {
    return this.eventsService.getLatestEvents().pipe(
      delay(300),
      map(events => {
        const latest = events[0];
        const secondLatest = events[1] || events[0];

        return [
          {
            id: 'latest-events',
            url: '../../../assets/events/pic4.jpg',
            alt: 'Our Latest Events - Traditional Khadi weaving demonstration',
            cloudinaryId: 'sikkim-khadi/events/latest-events-pic4'
          },
          {
            id: latest.id,
            url: latest.imageUrl.startsWith('assets') ? '../../../' + latest.imageUrl : latest.imageUrl,
            alt: latest.title,
            cloudinaryId: 'sikkim-khadi/events/' + latest.id
          },
          {
            id: secondLatest.id,
            url: secondLatest.imageUrl.startsWith('assets') ? '../../../' + secondLatest.imageUrl : secondLatest.imageUrl,
            alt: secondLatest.title,
            cloudinaryId: 'sikkim-khadi/events/' + secondLatest.id
          }
        ];
      })
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
