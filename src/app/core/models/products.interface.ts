export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  shortDescription: string;
  heroImage: string;
  images: ProductImage[];
  features: string[];
  specifications?: ProductSpecification[];
  benefits: string[];
  usage?: string[];
  price?: ProductPrice;
  availability: string;
  route: string;
  badge?: string;
  icon: string;
}

export interface ProductImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category?: string;
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductPrice {
  amount: number;
  currency: string;
  unit?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  products: string[]; // Array of product IDs
  color: string;
}

export interface ProductStats {
  label: string;
  value: string;
  description: string;
  icon: string;
}

export interface ProductsData {
  heroTitle: string;
  heroSubtitle: string;
  categories: ProductCategory[];
  featuredProducts: Product[];
  statistics: ProductStats[];
}
