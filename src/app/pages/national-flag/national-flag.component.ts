import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FlagPriceItem {
  size: string;
  material: string;
  price: string;
  popular?: boolean;
}

export interface ContactOfficial {
  name: string;
  designation?: string;
  phone: string;
  telLink: string;
}

export interface GalleryItem {
  url: string;
  caption: string;
}

@Component({
  selector: 'app-national-flag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './national-flag.component.html',
  styleUrl: './national-flag.component.css'
})
export class NationalFlagComponent {
  heroImage = 'assets/products/tricolor/1.jpg';

  pricingData: FlagPriceItem[] = [
    { size: '2 X 3 ft', material: 'Thin Cotton', price: '₹ 550/-' },
    { size: '2 X 3 ft', material: 'Thick Cotton', price: '₹ 845/-' },
    { size: '3 X 4 ft', material: 'Thick Cotton', price: '₹ 1,830/-' },
    { size: '4 X 6 ft', material: 'Thin Cotton', price: '₹ 2,335/-' },
    { size: '4 X 6 ft', material: 'Thick Cotton', price: '₹ 2,800/-', popular: true },
    { size: '8 X 12 ft', material: 'Thick Cotton', price: '₹ 8,910/-' },
    { size: 'Car Flag', material: 'Thick Cotton', price: '₹ 270/-' },
    { size: 'Car Flag', material: 'Thin Cotton', price: '₹ 175/-' }
  ];

  officials: ContactOfficial[] = [
    { name: 'Songmith Lepcha', phone: '+91 9593985264', telLink: 'tel:+919593985264' },
    { name: 'Anuka Rai', phone: '+91 6297966214', telLink: 'tel:+916297966214' },
    { name: 'Assistant Executive Officer', designation: 'Administration', phone: '+91 8918128518', telLink: 'tel:+918918128518' },
    { name: 'Puja Bhandari', phone: '+91 8597664980', telLink: 'tel:+918597664980' }
  ];

  galleryImages: GalleryItem[] = [
    { url: 'assets/products/tricolor/1.jpg', caption: 'Authentic Khadi National Flag - Premium Stitching' },
    { url: 'assets/products/tricolor/2.jpg', caption: 'Hand-Spun Khadi Cotton Tricolor' },
    { url: 'assets/products/tricolor/3.jpg', caption: 'Precision Ashok Chakra Wheel' },
    { url: 'assets/products/tricolor/4.jpg', caption: 'Institutional & Event Display Flags' },
    { url: 'assets/products/tricolor/5.jpg', caption: 'Official BIS Standard Dimensions' },
    { url: 'assets/products/tricolor/6.jpg', caption: 'Handcrafted Quality Verification' }
  ];
}
