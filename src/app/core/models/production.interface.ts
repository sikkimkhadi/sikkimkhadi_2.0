export interface ProductionCenter {
  id: string;
  name: string;
  type: 'weaving' | 'spinning' | 'training' | 'beekeeping';
  location: string;
  district: string;
  image: string;
  description: string;
  routerLink: string;
  products: string[];
  features: string[];
  established?: string;
  capacity?: number;
  trainingPrograms?: string[];
}

export interface ProductionVideo {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  duration?: string;
  category: 'training' | 'production' | 'technique';
  uploadDate?: string;
  thumbnailUrl?: string;
}

export interface ProductionData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  centers: ProductionCenter[];
  videos: ProductionVideo[];
  statistics: {
    totalCenters: number;
    totalArtisans: number;
    yearlyProduction: string;
    trainingPrograms: number;
  };
}

export interface ProductionStats {
  icon: string;
  value: string;
  label: string;
  description: string;
}

export interface ProductionCenterDetail {
  id: string;
  name: string;
  type: string;
  location: string;
  district: string;
  description: string;
  longDescription?: string;
  heroImage: string;
  gallery: ProductionGalleryImage[];
  features: string[];
  products: string[];
  trainingPrograms?: string[];
  facilities: string[];
  contact?: {
    phone?: string;
    email?: string;
    address?: string;
  };
  statistics?: {
    established?: string;
    capacity?: number;
    traineesPerYear?: number;
    productsPerMonth?: number;
  };
}

export interface ProductionGalleryImage {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  category?: 'facility' | 'products' | 'training' | 'artisans' | 'general';
}
