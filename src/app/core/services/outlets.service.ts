import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface OutletImage {
  id: string;
  url: string;
  alt: string;
  cloudinaryId: string;
}

export interface Outlet {
  id: string;
  name: string;
  location: string;
  address: {
    line1: string;
    line2: string;
    line3?: string;
    line4?: string;
  };
  description: string;
  coverImage: OutletImage;
  galleryImages: OutletImage[];
  route: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class OutletsService {

  private readonly mockOutlets: Outlet[] = [
    {
      id: 'namchi',
      name: 'Namchi Outlet',
      location: 'Namchi, South Sikkim',
      address: {
        line1: 'Khadi Emporium',
        line2: 'Bhanjyang Road',
        line3: 'Beside Smart City Office',
        line4: 'Namchi, South Sikkim'
      },
      description: 'Our flagship outlet in Namchi offers a wide range of authentic Khadi products, handwoven textiles, and traditional crafts from Sikkim and neighboring states.',
      coverImage: {
        id: 'namchi-cover',
        url: '../../../assets/outlets/images/namchi.jpg',
        alt: 'Namchi Khadi Outlet exterior view',
        cloudinaryId: 'sikkim-khadi/outlets/namchi/cover'
      },
      galleryImages: [
        {
          id: 'namchi-1',
          url: '../../../../assets/outlets/namchi/images/img1.jpg',
          alt: 'Namchi outlet interior showcasing textile displays',
          cloudinaryId: 'sikkim-khadi/outlets/namchi/interior-1'
        },
        {
          id: 'namchi-2',
          url: '../../../../assets/outlets/namchi/images/img2.jpg',
          alt: 'Handwoven khadi fabrics display',
          cloudinaryId: 'sikkim-khadi/outlets/namchi/fabrics-display'
        },
        {
          id: 'namchi-3',
          url: '../../../../assets/outlets/namchi/images/img3.jpg',
          alt: 'Traditional craft section',
          cloudinaryId: 'sikkim-khadi/outlets/namchi/crafts-section'
        },
        {
          id: 'namchi-4',
          url: '../../../../assets/outlets/namchi/images/img4.jpg',
          alt: 'Customer service area',
          cloudinaryId: 'sikkim-khadi/outlets/namchi/service-area'
        },
        {
          id: 'namchi-5',
          url: '../../../../assets/outlets/namchi/images/img5.jpg',
          alt: 'Product showcase and billing counter',
          cloudinaryId: 'sikkim-khadi/outlets/namchi/billing-counter'
        },
        {
          id: 'namchi-6',
          url: '../../../../assets/outlets/namchi/images/img6.jpg',
          alt: 'Khadi garments collection',
          cloudinaryId: 'sikkim-khadi/outlets/namchi/garments'
        },
        {
          id: 'namchi-7',
          url: '../../../../assets/outlets/namchi/images/img7.jpg',
          alt: 'Outlet entrance and signage',
          cloudinaryId: 'sikkim-khadi/outlets/namchi/entrance'
        }
      ],
      route: ['/outlets', 'namchi'],
      coordinates: { lat: 27.1926, lng: 88.3639 }
    },
    {
      id: 'gyalshing',
      name: 'Gyalshing Outlet',
      location: 'Gyalshing, West Sikkim',
      address: {
        line1: 'Khadi Gramodyog Bhavan',
        line2: 'Main Market Road',
        line3: 'Gyalshing, West Sikkim'
      },
      description: 'Located in the heart of West Sikkim, our Gyalshing outlet serves the local community with quality Khadi products and promotes local artisan crafts.',
      coverImage: {
        id: 'gyalshing-cover',
        url: '../../../assets/outlets/images/gyalshing.jpg',
        alt: 'Gyalshing Khadi Outlet storefront',
        cloudinaryId: 'sikkim-khadi/outlets/gyalshing/cover'
      },
      galleryImages: [],
      route: ['/outlets', 'gyalshing']
    },
    {
      id: 'singtam',
      name: 'Singtam Outlet',
      location: 'Singtam, East Sikkim',
      address: {
        line1: 'Khadi Emporium',
        line2: 'NH-10, Singtam',
        line3: 'East Sikkim'
      },
      description: 'Strategically located on the main highway, our Singtam outlet caters to both locals and travelers, offering authentic Sikkim Khadi products.',
      coverImage: {
        id: 'singtam-cover',
        url: '../../../assets/outlets/images/singtam.jpg',
        alt: 'Singtam Khadi Outlet building',
        cloudinaryId: 'sikkim-khadi/outlets/singtam/cover'
      },
      galleryImages: [],
      route: ['/outlets', 'singtam']
    },
    {
      id: 'deorali',
      name: 'Deorali Outlet',
      location: 'Deorali, Gangtok',
      address: {
        line1: 'Khadi Gramodyog',
        line2: 'Deorali Bazaar',
        line3: 'Gangtok, East Sikkim'
      },
      description: 'Our Gangtok area outlet in Deorali serves the capital region with premium Khadi products and traditional Sikkimese handicrafts.',
      coverImage: {
        id: 'deorali-cover',
        url: '../../../assets/outlets/images/deorali.jpg',
        alt: 'Deorali Khadi Outlet in Gangtok',
        cloudinaryId: 'sikkim-khadi/outlets/deorali/cover'
      },
      galleryImages: [],
      route: ['/outlets', 'deorali']
    },
    {
      id: 'jorethang',
      name: 'Jorethang Outlet',
      location: 'Jorethang, South Sikkim',
      address: {
        line1: 'Khadi Bhavan',
        line2: 'Jorethang Market',
        line3: 'South Sikkim'
      },
      description: 'Serving the Jorethang community with authentic Khadi products, our outlet promotes local entrepreneurship and traditional craftsmanship.',
      coverImage: {
        id: 'jorethang-cover',
        url: '../../../assets/outlets/images/jorethang.jpg',
        alt: 'Jorethang Khadi Outlet marketplace',
        cloudinaryId: 'sikkim-khadi/outlets/jorethang/cover'
      },
      galleryImages: [],
      route: ['/outlets', 'jorethang']
    },
    {
      id: 'supermarket',
      name: 'Supermarket Outlet',
      location: 'Gangtok, East Sikkim',
      address: {
        line1: 'Khadi Supermarket',
        line2: 'M.G. Road',
        line3: 'Gangtok, East Sikkim'
      },
      description: 'Our premium supermarket outlet in Gangtok offers the largest collection of Khadi products, textiles, and handicrafts in a modern retail environment.',
      coverImage: {
        id: 'supermarket-cover',
        url: '../../../assets/outlets/images/supermarket.jpg',
        alt: 'Khadi Supermarket in Gangtok',
        cloudinaryId: 'sikkim-khadi/outlets/supermarket/cover'
      },
      galleryImages: [],
      route: ['/outlets', 'supermarket']
    }
  ];

  constructor() { }

  /**
   * Get all outlets with simulated loading delay
   */
  getAllOutlets(): Observable<Outlet[]> {
    return of(this.mockOutlets).pipe(
      delay(500) // Simulate network delay
    );
  }

  /**
   * Get outlet by ID
   */
  getOutletById(id: string): Observable<Outlet | undefined> {
    const outlet = this.mockOutlets.find(o => o.id === id);
    return of(outlet).pipe(
      delay(300)
    );
  }

  /**
   * Get outlets by batch for lazy loading
   */
  getOutletsBatch(startIndex: number, batchSize: number = 3): Observable<Outlet[]> {
    const batch = this.mockOutlets.slice(startIndex, startIndex + batchSize);
    return of(batch).pipe(
      delay(200)
    );
  }

  /**
   * Get optimized image URL (simulating Cloudinary transformations)
   */
  getOptimizedImageUrl(cloudinaryId: string, width: number = 400, height: number = 300): string {
    // For now, return the original URL
    // In production: return `https://res.cloudinary.com/your-cloud/image/upload/w_${width},h_${height},c_fill/${cloudinaryId}`
    return cloudinaryId; // Placeholder for now
  }

  /**
   * Get outlet statistics
   */
  getOutletStats(): Observable<{total: number, locations: string[]}> {
    const stats = {
      total: this.mockOutlets.length,
      locations: [...new Set(this.mockOutlets.map(o => o.location.split(',')[1]?.trim() || 'Sikkim'))]
    };
    return of(stats).pipe(delay(100));
  }
}
