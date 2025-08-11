import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface OutletDetailImage {
  id: string;
  url: string;
  alt: string;
  cloudinaryId: string;
  caption?: string;
}

export interface OutletDetail {
  id: string;
  name: string;
  location: string;
  fullAddress: {
    line1: string;
    line2: string;
    line3?: string;
    line4?: string;
  };
  description: string;
  features: string[];
  openingHours: {
    weekdays: string;
    weekends: string;
    holidays?: string;
  };
  contact: {
    phone?: string;
    email?: string;
  };
  heroImage: OutletDetailImage;
  galleryImages: OutletDetailImage[];
  coordinates?: {
    lat: number;
    lng: number;
  };
  specialties: string[];
}

@Injectable({
  providedIn: 'root'
})
export class OutletDetailService {

  private readonly outletDetails: { [key: string]: OutletDetail } = {
    'namchi': {
      id: 'namchi',
      name: 'Namchi Outlet',
      location: 'Namchi, South Sikkim',
      fullAddress: {
        line1: 'Khadi Emporium',
        line2: 'Bhanjyang Road',
        line3: 'Beside Smart City Office',
        line4: 'Namchi, South Sikkim - 737121'
      },
      description: 'Our flagship outlet in Namchi serves as the premier destination for authentic Khadi products in South Sikkim. Located strategically beside the Smart City Office, this outlet showcases the finest collection of handwoven textiles, traditional crafts, and locally manufactured goods.',
      features: [
        'Wide range of Khadi textiles',
        'Traditional handicrafts',
        'Local entrepreneur products',
        'Custom tailoring services',
        'Bulk order facility'
      ],
      openingHours: {
        weekdays: '9:00 AM - 6:00 PM',
        weekends: '9:00 AM - 5:00 PM',
        holidays: 'Closed on major holidays'
      },
      contact: {
        phone: '+91-3595-264XXX',
        email: 'namchi@sikkimkhadi.gov.in'
      },
      heroImage: {
        id: 'namchi-hero',
        url: '../../../../assets/outlets/namchi/images/img1.jpg',
        alt: 'Namchi Khadi Outlet - Main interior view',
        cloudinaryId: 'sikkim-khadi/outlets/namchi/hero-interior',
        caption: 'Main showroom displaying authentic Khadi products'
      },
      galleryImages: [
        {
          id: 'namchi-gallery-1',
          url: '../../../../assets/outlets/namchi/images/img1.jpg',
          alt: 'Namchi outlet interior showcasing textile displays',
          cloudinaryId: 'sikkim-khadi/outlets/namchi/interior-1',
          caption: 'Textile display section with organized fabric collections'
        },
        {
          id: 'namchi-gallery-2',
          url: '../../../../assets/outlets/namchi/images/img2.jpg',
          alt: 'Handwoven khadi fabrics display',
          cloudinaryId: 'sikkim-khadi/outlets/namchi/fabrics-display',
          caption: 'Premium handwoven Khadi fabrics in various colors'
        },
        {
          id: 'namchi-gallery-3',
          url: '../../../../assets/outlets/namchi/images/img3.jpg',
          alt: 'Traditional craft section',
          cloudinaryId: 'sikkim-khadi/outlets/namchi/crafts-section',
          caption: 'Traditional handicrafts and artisan products'
        },
        {
          id: 'namchi-gallery-4',
          url: '../../../../assets/outlets/namchi/images/img4.jpg',
          alt: 'Customer service area',
          cloudinaryId: 'sikkim-khadi/outlets/namchi/service-area',
          caption: 'Dedicated customer service and consultation area'
        },
        {
          id: 'namchi-gallery-5',
          url: '../../../../assets/outlets/namchi/images/img5.jpg',
          alt: 'Product showcase and billing counter',
          cloudinaryId: 'sikkim-khadi/outlets/namchi/billing-counter',
          caption: 'Modern billing counter with product showcase'
        },
        {
          id: 'namchi-gallery-6',
          url: '../../../../assets/outlets/namchi/images/img6.jpg',
          alt: 'Khadi garments collection',
          cloudinaryId: 'sikkim-khadi/outlets/namchi/garments',
          caption: 'Ready-to-wear Khadi garments for all occasions'
        },
        {
          id: 'namchi-gallery-7',
          url: '../../../../assets/outlets/namchi/images/img7.jpg',
          alt: 'Outlet entrance and signage',
          cloudinaryId: 'sikkim-khadi/outlets/namchi/entrance',
          caption: 'Welcoming entrance with clear Khadi branding'
        }
      ],
      coordinates: { lat: 27.1926, lng: 88.3639 },
      specialties: ['Handwoven Textiles', 'Traditional Crafts', 'Custom Tailoring', 'Bulk Orders']
    },
    'gyalshing': {
      id: 'gyalshing',
      name: 'Gyalshing Outlet',
      location: 'Gyalshing, West Sikkim',
      fullAddress: {
        line1: 'Khadi Gramodyog Bhavan',
        line2: 'Main Market Road',
        line3: 'Gyalshing, West Sikkim - 737111'
      },
      description: 'Located in the heart of West Sikkim, our Gyalshing outlet serves the local community with quality Khadi products and promotes local artisan crafts.',
      features: [
        'Local artisan products',
        'Khadi clothing',
        'Handicraft items',
        'Organic products'
      ],
      openingHours: {
        weekdays: '9:00 AM - 6:00 PM',
        weekends: '9:00 AM - 5:00 PM'
      },
      contact: {
        phone: '+91-3595-250XXX'
      },
      heroImage: {
        id: 'gyalshing-hero',
        url: '../../../../assets/outlets/images/gyalshing.jpg',
        alt: 'Gyalshing Khadi Outlet storefront',
        cloudinaryId: 'sikkim-khadi/outlets/gyalshing/hero',
        caption: 'Gyalshing outlet serving West Sikkim community'
      },
      galleryImages: [
        {
          id: 'gyalshing-gallery-1',
          url: '../../../../assets/outlets/gyalshing/images/img1.jpg',
          alt: 'Gyalshing outlet interior view',
          cloudinaryId: 'sikkim-khadi/outlets/gyalshing/interior-1',
          caption: 'Spacious interior with organized product displays'
        },
        {
          id: 'gyalshing-gallery-2',
          url: '../../../../assets/outlets/gyalshing/images/img2.jpg',
          alt: 'Local artisan products display',
          cloudinaryId: 'sikkim-khadi/outlets/gyalshing/artisan-products',
          caption: 'Authentic local artisan crafts and products'
        },
        {
          id: 'gyalshing-gallery-3',
          url: '../../../../assets/outlets/gyalshing/images/img3.jpg',
          alt: 'Khadi clothing section',
          cloudinaryId: 'sikkim-khadi/outlets/gyalshing/clothing-section',
          caption: 'Premium Khadi clothing collection'
        }
      ],
      specialties: ['Local Crafts', 'Organic Products', 'Traditional Wear']
    },
    'singtam': {
      id: 'singtam',
      name: 'Singtam Outlet',
      location: 'Singtam, East Sikkim',
      fullAddress: {
        line1: 'Khadi Emporium',
        line2: 'NH-10, Singtam',
        line3: 'East Sikkim - 737134'
      },
      description: 'Strategically located on the main highway, our Singtam outlet caters to both locals and travelers, offering authentic Sikkim Khadi products.',
      features: [
        'Highway accessibility',
        'Travel-friendly products',
        'Quick service',
        'Souvenir items'
      ],
      openingHours: {
        weekdays: '8:00 AM - 7:00 PM',
        weekends: '8:00 AM - 6:00 PM'
      },
      contact: {
        phone: '+91-3592-266XXX'
      },
      heroImage: {
        id: 'singtam-hero',
        url: '../../../../assets/outlets/images/singtam.jpg',
        alt: 'Singtam Khadi Outlet building',
        cloudinaryId: 'sikkim-khadi/outlets/singtam/hero',
        caption: 'Singtam outlet on the main highway serving travelers'
      },
      galleryImages: [
        {
          id: 'singtam-gallery-1',
          url: '../../../../assets/outlets/singtam/images/img1.jpg',
          alt: 'Singtam outlet highway view',
          cloudinaryId: 'sikkim-khadi/outlets/singtam/img1',
          caption: 'Strategic location on NH-10 for easy access'
        },
        {
          id: 'singtam-gallery-2',
          url: '../../../../assets/outlets/singtam/images/img2.jpg',
          alt: 'Travel-friendly product display',
          cloudinaryId: 'sikkim-khadi/outlets/singtam/img2',
          caption: 'Curated selection of travel-friendly Khadi products'
        },
        {
          id: 'singtam-gallery-3',
          url: '../../../../assets/outlets/singtam/images/img3.jpg',
          alt: 'Souvenir section',
          cloudinaryId: 'sikkim-khadi/outlets/singtam/img3',
          caption: 'Authentic Sikkimese souvenirs and handicrafts'
        },
        {
          id: 'singtam-gallery-4',
          url: '../../../../assets/outlets/singtam/images/img4.jpg',
          alt: 'Interior product arrangement',
          cloudinaryId: 'sikkim-khadi/outlets/singtam/img4',
          caption: 'Well-organized interior with diverse product range'
        },
        {
          id: 'singtam-gallery-5',
          url: '../../../../assets/outlets/singtam/images/img5.jpg',
          alt: 'Customer service area',
          cloudinaryId: 'sikkim-khadi/outlets/singtam/img5',
          caption: 'Dedicated customer service and assistance area'
        },
        {
          id: 'singtam-gallery-6',
          url: '../../../../assets/outlets/singtam/images/img6.jpg',
          alt: 'Outlet exterior and signage',
          cloudinaryId: 'sikkim-khadi/outlets/singtam/img6',
          caption: 'Clear signage and welcoming exterior design'
        }
      ],
      specialties: ['Travel Products', 'Souvenirs', 'Quick Service']
    },
    'deorali': {
      id: 'deorali',
      name: 'Deorali Outlet',
      location: 'Deorali, Gangtok',
      fullAddress: {
        line1: 'Khadi Gramodyog',
        line2: 'Deorali Bazaar',
        line3: 'Gangtok, East Sikkim - 737102'
      },
      description: 'Our Gangtok area outlet in Deorali serves the capital region with premium Khadi products and traditional Sikkimese handicrafts.',
      features: [
        'Premium products',
        'Capital city access',
        'Traditional handicrafts',
        'Government proximity'
      ],
      openingHours: {
        weekdays: '9:00 AM - 6:00 PM',
        weekends: '9:00 AM - 5:00 PM'
      },
      contact: {
        phone: '+91-3592-280XXX'
      },
      heroImage: {
        id: 'deorali-hero',
        url: '../../../../assets/outlets/images/deorali.jpg',
        alt: 'Deorali Khadi Outlet in Gangtok',
        cloudinaryId: 'sikkim-khadi/outlets/deorali/hero',
        caption: 'Premium outlet serving the capital region'
      },
      galleryImages: [
        {
          id: 'deorali-gallery-1',
          url: '../../../../assets/outlets/deorali/images/img1.jpg',
          alt: 'Deorali outlet premium interior',
          cloudinaryId: 'sikkim-khadi/outlets/deorali/img1',
          caption: 'Elegant interior showcasing premium Khadi products'
        },
        {
          id: 'deorali-gallery-2',
          url: '../../../../assets/outlets/deorali/images/img2.jpg',
          alt: 'Traditional handicrafts section',
          cloudinaryId: 'sikkim-khadi/outlets/deorali/img2',
          caption: 'Exquisite traditional Sikkimese handicrafts'
        },
        {
          id: 'deorali-gallery-3',
          url: '../../../../assets/outlets/deorali/images/img3.jpg',
          alt: 'Government area accessibility',
          cloudinaryId: 'sikkim-khadi/outlets/deorali/img3',
          caption: 'Conveniently located near government offices'
        },
        {
          id: 'deorali-gallery-4',
          url: '../../../../assets/outlets/deorali/images/img4.jpg',
          alt: 'Product display area',
          cloudinaryId: 'sikkim-khadi/outlets/deorali/img4',
          caption: 'Comprehensive product display with organized sections'
        },
        {
          id: 'deorali-gallery-5',
          url: '../../../../assets/outlets/deorali/images/img5.jpg',
          alt: 'Textile collection',
          cloudinaryId: 'sikkim-khadi/outlets/deorali/img5',
          caption: 'Premium textile collection and fabric displays'
        },
        {
          id: 'deorali-gallery-6',
          url: '../../../../assets/outlets/deorali/images/img6.jpg',
          alt: 'Customer consultation area',
          cloudinaryId: 'sikkim-khadi/outlets/deorali/img6',
          caption: 'Comfortable customer consultation and selection area'
        },
        {
          id: 'deorali-gallery-7',
          url: '../../../../assets/outlets/deorali/images/img7.jpg',
          alt: 'Artisan work display',
          cloudinaryId: 'sikkim-khadi/outlets/deorali/img7',
          caption: 'Showcase of local artisan work and craftsmanship'
        },
        {
          id: 'deorali-gallery-8',
          url: '../../../../assets/outlets/deorali/images/img8.jpg',
          alt: 'Seasonal collection',
          cloudinaryId: 'sikkim-khadi/outlets/deorali/img8',
          caption: 'Seasonal and special occasion product collections'
        },
        {
          id: 'deorali-gallery-9',
          url: '../../../../assets/outlets/deorali/images/img9.jpg',
          alt: 'Billing and checkout area',
          cloudinaryId: 'sikkim-khadi/outlets/deorali/img9',
          caption: 'Modern billing and checkout facility'
        },
        {
          id: 'deorali-gallery-10',
          url: '../../../../assets/outlets/deorali/images/img10.jpg',
          alt: 'Outlet entrance and facade',
          cloudinaryId: 'sikkim-khadi/outlets/deorali/img10',
          caption: 'Welcoming entrance with traditional architectural elements'
        },
        {
          id: 'deorali-gallery-11',
          url: '../../../../assets/outlets/deorali/images/img11.jpg',
          alt: 'Special exhibitions area',
          cloudinaryId: 'sikkim-khadi/outlets/deorali/img11',
          caption: 'Special exhibitions and featured product displays'
        }
      ],
      specialties: ['Premium Products', 'Traditional Handicrafts', 'Government Supplies']
    },
    'jorethang': {
      id: 'jorethang',
      name: 'Jorethang Outlet',
      location: 'Jorethang, South Sikkim',
      fullAddress: {
        line1: 'Khadi Bhavan',
        line2: 'Jorethang Market',
        line3: 'South Sikkim - 737121'
      },
      description: 'Serving the Jorethang community with authentic Khadi products, our outlet promotes local entrepreneurship and traditional craftsmanship.',
      features: [
        'Community focused',
        'Local entrepreneur support',
        'Market accessibility',
        'Affordable pricing'
      ],
      openingHours: {
        weekdays: '9:00 AM - 6:00 PM',
        weekends: '9:00 AM - 5:00 PM'
      },
      contact: {
        phone: '+91-3595-265XXX'
      },
      heroImage: {
        id: 'jorethang-hero',
        url: '../../../../assets/outlets/images/jorethang.jpg',
        alt: 'Jorethang Khadi Outlet storefront',
        cloudinaryId: 'sikkim-khadi/outlets/jorethang/hero',
        caption: 'Jorethang outlet serving South Sikkim community'
      },
      galleryImages: [
        {
          id: 'jorethang-gallery-1',
          url: '../../../../assets/outlets/jorethang/images/img1.jpg',
          alt: 'Jorethang outlet community space',
          cloudinaryId: 'sikkim-khadi/outlets/jorethang/img1',
          caption: 'Welcoming space for the local community'
        },
        {
          id: 'jorethang-gallery-2',
          url: '../../../../assets/outlets/jorethang/images/img2.jpg',
          alt: 'Local artisan collaboration',
          cloudinaryId: 'sikkim-khadi/outlets/jorethang/img2',
          caption: 'Supporting local artisans and their crafts'
        },
        {
          id: 'jorethang-gallery-3',
          url: '../../../../assets/outlets/jorethang/images/img3.jpg',
          alt: 'Bulk order facility',
          cloudinaryId: 'sikkim-khadi/outlets/jorethang/img3',
          caption: 'Efficient bulk order processing facility'
        },
        {
          id: 'jorethang-gallery-4',
          url: '../../../../assets/outlets/jorethang/images/img4.jpg',
          alt: 'Product showcase area',
          cloudinaryId: 'sikkim-khadi/outlets/jorethang/img4',
          caption: 'Comprehensive product showcase and display'
        },
        {
          id: 'jorethang-gallery-5',
          url: '../../../../assets/outlets/jorethang/images/img5.jpg',
          alt: 'Traditional textile section',
          cloudinaryId: 'sikkim-khadi/outlets/jorethang/img5',
          caption: 'Traditional textile collection and handloom products'
        },
        {
          id: 'jorethang-gallery-6',
          url: '../../../../assets/outlets/jorethang/images/img6.jpg',
          alt: 'Customer interaction area',
          cloudinaryId: 'sikkim-khadi/outlets/jorethang/img6',
          caption: 'Interactive customer service and consultation space'
        },
        {
          id: 'jorethang-gallery-7',
          url: '../../../../assets/outlets/jorethang/images/img7.jpg',
          alt: 'Handicraft collection',
          cloudinaryId: 'sikkim-khadi/outlets/jorethang/img7',
          caption: 'Diverse handicraft collection from local artisans'
        },
        {
          id: 'jorethang-gallery-8',
          url: '../../../../assets/outlets/jorethang/images/img8.jpg',
          alt: 'Seasonal displays',
          cloudinaryId: 'sikkim-khadi/outlets/jorethang/img8',
          caption: 'Seasonal product displays and special collections'
        },
        {
          id: 'jorethang-gallery-9',
          url: '../../../../assets/outlets/jorethang/images/img9.jpg',
          alt: 'Workshop and demonstration area',
          cloudinaryId: 'sikkim-khadi/outlets/jorethang/img9',
          caption: 'Live workshop and craft demonstration space'
        },
        {
          id: 'jorethang-gallery-10',
          url: '../../../../assets/outlets/jorethang/images/img10.jpg',
          alt: 'Storage and inventory',
          cloudinaryId: 'sikkim-khadi/outlets/jorethang/img10',
          caption: 'Well-organized storage and inventory management'
        },
        {
          id: 'jorethang-gallery-11',
          url: '../../../../assets/outlets/jorethang/images/img11.jpg',
          alt: 'Community engagement space',
          cloudinaryId: 'sikkim-khadi/outlets/jorethang/img11',
          caption: 'Dedicated space for community events and engagement'
        },
        {
          id: 'jorethang-gallery-12',
          url: '../../../../assets/outlets/jorethang/images/img12.jpg',
          alt: 'Quality control area',
          cloudinaryId: 'sikkim-khadi/outlets/jorethang/img12',
          caption: 'Quality control and product inspection facility'
        },
        {
          id: 'jorethang-gallery-13',
          url: '../../../../assets/outlets/jorethang/images/img13.jpg',
          alt: 'Packaging and dispatch',
          cloudinaryId: 'sikkim-khadi/outlets/jorethang/img13',
          caption: 'Professional packaging and dispatch services'
        },
        {
          id: 'jorethang-gallery-14',
          url: '../../../../assets/outlets/jorethang/images/img14.jpg',
          alt: 'Educational display',
          cloudinaryId: 'sikkim-khadi/outlets/jorethang/img14',
          caption: 'Educational displays about Khadi heritage and process'
        },
        {
          id: 'jorethang-gallery-15',
          url: '../../../../assets/outlets/jorethang/images/img15.jpg',
          alt: 'Outlet exterior view',
          cloudinaryId: 'sikkim-khadi/outlets/jorethang/img15',
          caption: 'Complete exterior view of the Jorethang outlet'
        }
        // {
        //   id: 'jorethang-gallery-16',
        //   url: '../../../../assets/outlets/jorethang/images/img16.jpg',
        //   alt: 'Staff and management area',
        //   cloudinaryId: 'sikkim-khadi/outlets/jorethang/img16',
        //   caption: 'Staff facilities and management coordination area'
        // }
      ],
      specialties: ['Community Products', 'Local Entrepreneurs', 'Affordable Range']
    },
    'supermarket': {
      id: 'supermarket',
      name: 'Supermarket Outlet',
      location: 'Gangtok, East Sikkim',
      fullAddress: {
        line1: 'Khadi Supermarket',
        line2: 'M.G. Road',
        line3: 'Gangtok, East Sikkim - 737101'
      },
      description: 'Our premium supermarket outlet in Gangtok offers the largest collection of Khadi products, textiles, and handicrafts in a modern retail environment.',
      features: [
        'Largest collection',
        'Modern retail experience',
        'Prime location',
        'Tourist friendly',
        'Multiple payment options'
      ],
      openingHours: {
        weekdays: '9:00 AM - 8:00 PM',
        weekends: '9:00 AM - 8:00 PM'
      },
      contact: {
        phone: '+91-3592-202XXX',
        email: 'supermarket@sikkimkhadi.gov.in'
      },
      heroImage: {
        id: 'supermarket-hero',
        url: '../../../../assets/outlets/images/supermarket.jpg',
        alt: 'Khadi Supermarket main entrance',
        cloudinaryId: 'sikkim-khadi/outlets/supermarket/hero',
        caption: 'Our flagship supermarket with comprehensive product range'
      },
      galleryImages: [
        {
          id: 'supermarket-gallery-1',
          url: '../../../../assets/outlets/supermarket/images/img1.jpg',
          alt: 'Supermarket wide product range',
          cloudinaryId: 'sikkim-khadi/outlets/supermarket/img1',
          caption: 'Extensive collection of Khadi and handloom products'
        },
        {
          id: 'supermarket-gallery-2',
          url: '../../../../assets/outlets/supermarket/images/img2.jpg',
          alt: 'Modern shopping experience',
          cloudinaryId: 'sikkim-khadi/outlets/supermarket/img2',
          caption: 'Modern retail experience with traditional products'
        },
        {
          id: 'supermarket-gallery-3',
          url: '../../../../assets/outlets/supermarket/images/img3.jpg',
          alt: 'Customer service area',
          cloudinaryId: 'sikkim-khadi/outlets/supermarket/img3',
          caption: 'Dedicated customer service and consultation area'
        },
        {
          id: 'supermarket-gallery-4',
          url: '../../../../assets/outlets/supermarket/images/img4.jpg',
          alt: 'Wholesale section',
          cloudinaryId: 'sikkim-khadi/outlets/supermarket/img4',
          caption: 'Specialized wholesale section for bulk purchases'
        },
        {
          id: 'supermarket-gallery-5',
          url: '../../../../assets/outlets/supermarket/images/img5.jpg',
          alt: 'Premium product showcase',
          cloudinaryId: 'sikkim-khadi/outlets/supermarket/img5',
          caption: 'Premium product showcase and featured items'
        },
        {
          id: 'supermarket-gallery-6',
          url: '../../../../assets/outlets/supermarket/images/img6.jpg',
          alt: 'Textile department',
          cloudinaryId: 'sikkim-khadi/outlets/supermarket/img6',
          caption: 'Comprehensive textile department with fabric varieties'
        },
        {
          id: 'supermarket-gallery-7',
          url: '../../../../assets/outlets/supermarket/images/img7.jpg',
          alt: 'Shopping aisles',
          cloudinaryId: 'sikkim-khadi/outlets/supermarket/img7',
          caption: 'Well-organized shopping aisles for easy navigation'
        },
        {
          id: 'supermarket-gallery-8',
          url: '../../../../assets/outlets/supermarket/images/img8.jpg',
          alt: 'Checkout and billing',
          cloudinaryId: 'sikkim-khadi/outlets/supermarket/img8',
          caption: 'Multiple checkout counters for efficient service'
        },
        {
          id: 'supermarket-gallery-9',
          url: '../../../../assets/outlets/supermarket/images/img9.jpg',
          alt: 'Store layout overview',
          cloudinaryId: 'sikkim-khadi/outlets/supermarket/img9',
          caption: 'Complete store layout with organized product sections'
        }
      ],
      specialties: ['Premium Collection', 'Modern Retail', 'Tourist Products', 'Full Range']
    }
  };

  constructor() { }

  /**
   * Get outlet detail by ID
   */
  getOutletDetail(id: string): Observable<OutletDetail | undefined> {
    const outlet = this.outletDetails[id];
    return of(outlet).pipe(
      delay(300) // Simulate network delay
    );
  }

  /**
   * Get gallery images for an outlet
   */
  getOutletGallery(id: string): Observable<OutletDetailImage[]> {
    const outlet = this.outletDetails[id];
    return of(outlet?.galleryImages || []).pipe(
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
   * Check if outlet exists
   */
  outletExists(id: string): boolean {
    return id in this.outletDetails;
  }
}
