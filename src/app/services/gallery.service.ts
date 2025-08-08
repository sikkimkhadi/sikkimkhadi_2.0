import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'products' | 'outlets' | 'production';
  imageUrl: string;
  route: string[];
  size: 'small' | 'medium' | 'large';
  alt: string;
  cloudinaryId?: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  // Mock gallery data simulating Cloudinary images
  private mockGalleryItems: GalleryItem[] = [
    {
      id: 'silk-saris',
      title: 'Handwoven Silk Saris',
      category: 'products',
      imageUrl: '../../../assets/mainGallery/img4.jpg',
      route: ['/products'],
      size: 'large',
      alt: 'Beautiful handwoven silk saris in traditional patterns',
      cloudinaryId: 'sikkim-khadi/products/silk-saris-img4',
      description: 'Exquisite handwoven silk saris crafted by local artisans'
    },
    {
      id: 'organic-incense',
      title: 'Organic Incense',
      category: 'products',
      imageUrl: '../../../assets/mainGallery/img5.jpg',
      route: ['/products'],
      size: 'large',
      alt: 'Natural organic incense sticks made from local herbs',
      cloudinaryId: 'sikkim-khadi/products/organic-incense-img5',
      description: 'Aromatic incense made from organic Himalayan herbs'
    },
    {
      id: 'namchi-outlet',
      title: 'Namchi Outlet',
      category: 'outlets',
      imageUrl: '../../../assets/mainGallery/img7.jpg',
      route: ['/outlets'],
      size: 'medium',
      alt: 'Namchi outlet storefront displaying khadi products',
      cloudinaryId: 'sikkim-khadi/outlets/namchi-outlet-img7',
      description: 'Visit our Namchi outlet for authentic khadi products'
    },
    {
      id: 'khadi-quilts',
      title: 'Khadi Quilts',
      category: 'products',
      imageUrl: '../../../assets/mainGallery/img8.jpg',
      route: ['/products'],
      size: 'small',
      alt: 'Warm and comfortable khadi quilts',
      cloudinaryId: 'sikkim-khadi/products/khadi-quilts-img8',
      description: 'Cozy quilts made from pure khadi cotton'
    },
    {
      id: 'simul-pillows',
      title: 'Simul Pillows',
      category: 'products',
      imageUrl: '../../../assets/mainGallery/img9.jpg',
      route: ['/products'],
      size: 'small',
      alt: 'Soft pillows filled with simul cotton',
      cloudinaryId: 'sikkim-khadi/products/simul-pillows-img9',
      description: 'Natural pillows filled with locally sourced simul cotton'
    },
    {
      id: 'gyalshing-outlet',
      title: 'Gyalshing Outlet',
      category: 'outlets',
      imageUrl: '../../../assets/mainGallery/img10.jpg',
      route: ['/outlets'],
      size: 'small',
      alt: 'Gyalshing outlet showcasing traditional crafts',
      cloudinaryId: 'sikkim-khadi/outlets/gyalshing-outlet-img10',
      description: 'Explore traditional crafts at our Gyalshing location'
    },
    {
      id: 'organic-turmeric',
      title: 'Local Organic Turmeric',
      category: 'products',
      imageUrl: '../../../assets/mainGallery/img11.jpg',
      route: ['/products'],
      size: 'medium',
      alt: 'Pure organic turmeric powder from local farms',
      cloudinaryId: 'sikkim-khadi/products/organic-turmeric-img11',
      description: 'Premium organic turmeric from Sikkim farms'
    },
    {
      id: 'tarku-weaving',
      title: 'Tarku Weaving Center',
      category: 'production',
      imageUrl: '../../../assets/mainGallery/img12.jpg',
      route: ['/production'],
      size: 'small',
      alt: 'Traditional weaving at Tarku center',
      cloudinaryId: 'sikkim-khadi/production/tarku-weaving-img12',
      description: 'Traditional weaving techniques at Tarku center'
    },
    {
      id: 'temi-tea',
      title: 'Temi Tea',
      category: 'products',
      imageUrl: '../../../assets/mainGallery/img13.jpg',
      route: ['/products'],
      size: 'large',
      alt: 'Premium Temi tea from Sikkim gardens',
      cloudinaryId: 'sikkim-khadi/products/temi-tea-img13',
      description: 'World-renowned Temi tea from Sikkim\'s finest gardens'
    },
    {
      id: 'handmade-shawls',
      title: 'Khadi Hand Made Shawls',
      category: 'products',
      imageUrl: '../../../assets/mainGallery/img14.jpg',
      route: ['/products'],
      size: 'large',
      alt: 'Elegant handmade khadi shawls',
      cloudinaryId: 'sikkim-khadi/products/handmade-shawls-img14',
      description: 'Elegant shawls handcrafted from pure khadi'
    },
    {
      id: 'organic-honey',
      title: 'Organic Honey',
      category: 'products',
      imageUrl: '../../../assets/mainGallery/img15.jpg',
      route: ['/products'],
      size: 'medium',
      alt: 'Pure organic honey from Himalayan bees',
      cloudinaryId: 'sikkim-khadi/products/organic-honey-img15',
      description: 'Pure honey from Himalayan wildflowers'
    },
    {
      id: 'turuk-weaving',
      title: 'Turuk Weaving Center',
      category: 'production',
      imageUrl: '../../../assets/mainGallery/img16.jpg',
      route: ['/production'],
      size: 'medium',
      alt: 'Artisans working at Turuk weaving center',
      cloudinaryId: 'sikkim-khadi/production/turuk-weaving-img16',
      description: 'Master artisans creating beautiful textiles'
    },
    {
      id: 'cotton-saris',
      title: 'Hand Made Cotton Saris',
      category: 'products',
      imageUrl: '../../../assets/mainGallery/img17.jpg',
      route: ['/products'],
      size: 'large',
      alt: 'Beautiful handmade cotton saris',
      cloudinaryId: 'sikkim-khadi/products/cotton-saris-img17',
      description: 'Traditional cotton saris woven by hand'
    },
    {
      id: 'beekeeping-equipment',
      title: 'Bee Keeping Equipment',
      category: 'products',
      imageUrl: '../../../assets/mainGallery/img18.jpg',
      route: ['/products'],
      size: 'medium',
      alt: 'Professional beekeeping equipment and tools',
      cloudinaryId: 'sikkim-khadi/products/beekeeping-equipment-img18',
      description: 'Professional equipment for sustainable beekeeping'
    },
    {
      id: 'deorali-outlet',
      title: 'Deorali Outlet',
      category: 'outlets',
      imageUrl: '../../../assets/mainGallery/img19.jpg',
      route: ['/outlets'],
      size: 'medium',
      alt: 'Deorali outlet with wide product selection',
      cloudinaryId: 'sikkim-khadi/outlets/deorali-outlet-img19',
      description: 'Our flagship Deorali outlet with comprehensive selection'
    },
    {
      id: 'khadi-shawls-premium',
      title: 'Premium Khadi Shawls',
      category: 'products',
      imageUrl: '../../../assets/mainGallery/img20.jpg',
      route: ['/products'],
      size: 'large',
      alt: 'Premium quality handmade khadi shawls',
      cloudinaryId: 'sikkim-khadi/products/premium-shawls-img20',
      description: 'Premium collection of handwoven khadi shawls'
    },
    {
      id: 'khadi-toiletries',
      title: 'Khadi Toiletries',
      category: 'products',
      imageUrl: '../../../assets/mainGallery/img1.jpg',
      route: ['/products'],
      size: 'medium',
      alt: 'Natural khadi toiletries and cosmetics',
      cloudinaryId: 'sikkim-khadi/products/toiletries-img1',
      description: 'Natural toiletries made from khadi and organic ingredients'
    },
    {
      id: 'local-honey',
      title: 'Local Organic Honey',
      category: 'products',
      imageUrl: '../../../assets/mainGallery/img2.jpg',
      route: ['/products'],
      size: 'medium',
      alt: 'Fresh local organic honey',
      cloudinaryId: 'sikkim-khadi/products/local-honey-img2',
      description: 'Fresh honey harvested from local organic apiaries'
    },
    {
      id: 'khadi-rugs',
      title: 'Khadi Duree and Rugs',
      category: 'products',
      imageUrl: '../../../assets/mainGallery/img3.jpg',
      route: ['/products'],
      size: 'small',
      alt: 'Traditional khadi rugs and floor coverings',
      cloudinaryId: 'sikkim-khadi/products/rugs-img3',
      description: 'Beautiful floor coverings woven from pure khadi'
    }
  ];

  constructor() { }

  /**
   * Get all gallery items with simulated loading delay
   */
  getGalleryItems(): Observable<GalleryItem[]> {
    return of(this.mockGalleryItems).pipe(
      delay(500) // Simulate network delay
    );
  }

  /**
   * Get gallery items by category
   */
  getGalleryItemsByCategory(category: 'products' | 'outlets' | 'production'): Observable<GalleryItem[]> {
    const filteredItems = this.mockGalleryItems.filter(item => item.category === category);
    return of(filteredItems).pipe(
      delay(300)
    );
  }

  /**
   * Get gallery items in batches for lazy loading
   */
  getGalleryItemsBatch(startIndex: number, batchSize: number = 6): Observable<GalleryItem[]> {
    const batch = this.mockGalleryItems.slice(startIndex, startIndex + batchSize);
    return of(batch).pipe(
      delay(200) // Shorter delay for batches
    );
  }

  /**
   * Get optimized image URL (simulating Cloudinary transformations)
   */
  getOptimizedImageUrl(cloudinaryId: string, width: number = 400, height: number = 300): string {
    // For now, return the original URL
    // In production: return `https://res.cloudinary.com/your-cloud/image/upload/w_${width},h_${height},c_fill/${cloudinaryId}`
    const item = this.mockGalleryItems.find(item => item.cloudinaryId === cloudinaryId);
    return item ? item.imageUrl : '';
  }

  /**
   * Get gallery statistics
   */
  getGalleryStats(): Observable<{products: number, outlets: number, production: number, total: number}> {
    const stats = {
      products: this.mockGalleryItems.filter(item => item.category === 'products').length,
      outlets: this.mockGalleryItems.filter(item => item.category === 'outlets').length,
      production: this.mockGalleryItems.filter(item => item.category === 'production').length,
      total: this.mockGalleryItems.length
    };
    return of(stats).pipe(delay(100));
  }
}
