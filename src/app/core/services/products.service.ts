import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { 
  Product, 
  ProductCategory, 
  ProductsData, 
  ProductStats 
} from '../models/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsData: ProductsData = {
    heroTitle: 'Sikkim Khadi Products',
    heroSubtitle: 'Authentic handcrafted products promoting traditional craftsmanship and sustainable living',
    categories: [
      {
        id: 'textiles',
        name: 'Textiles & Fabrics',
        description: 'Traditional handwoven textiles and fabrics',
        icon: '🧵',
        color: 'var(--brand-primary-orange)',
        products: ['saree', 'shawl', 'quilt']
      },
      {
        id: 'food',
        name: 'Organic Food Products',
        description: 'Pure organic spices, tea, and honey',
        icon: '🌿',
        color: 'var(--brand-green)',
        products: ['turmeric', 'temitea', 'honey']
      },
      {
        id: 'wellness',
        name: 'Wellness & Care',
        description: 'Natural toiletries and wellness products',
        icon: '🧴',
        color: 'var(--brand-primary-blue)',
        products: ['toileteries', 'incense']
      },
      {
        id: 'home',
        name: 'Home & Living',
        description: 'Comfortable home essentials',
        icon: '🏠',
        color: 'var(--brand-purple)',
        products: ['pillow', 'beebox', 'duree']
      }
    ],
    featuredProducts: [],
    statistics: [
      { label: 'Product Categories', value: '4', description: 'Diverse range of authentic products', icon: '📦' },
      { label: 'Handcrafted Items', value: '100%', description: 'Traditional craftsmanship', icon: '✋' },
      { label: 'Organic Products', value: '85%', description: 'Natural and chemical-free', icon: '🌱' },
      { label: 'Total Products', value: '11', description: 'Authentic Sikkim products', icon: '🛍️' }
    ]
  };

  private products: { [key: string]: Product } = {
    saree: {
      id: 'saree',
      name: 'Handwoven Sarees',
      category: 'Textiles & Fabrics',
      description: 'Exquisite handwoven sarees crafted by skilled artisans using traditional techniques passed down through generations. Each saree tells a story of Sikkim\'s rich textile heritage.',
      shortDescription: 'Traditional handwoven sarees with intricate patterns',
      heroImage: 'assets/products/images/saree.jpg',
      images: [
        { id: 'saree1', src: 'assets/products/saree/images/saree1.jpg', alt: 'Traditional Sikkimese saree', caption: 'Classic design with traditional motifs' },
        { id: 'saree2', src: 'assets/products/saree/images/saree2.jpg', alt: 'Handwoven silk saree', caption: 'Premium silk with golden threads' },
        { id: 'saree3', src: 'assets/products/saree/images/saree3.jpg', alt: 'Cotton saree', caption: 'Comfortable daily wear cotton saree' },
        { id: 'saree4', src: 'assets/products/saree/images/saree4.jpg', alt: 'Elegant silk saree', caption: 'Luxurious silk saree with intricate weaving' },
        { id: 'saree5', src: 'assets/products/saree/images/saree5.jpg', alt: 'Festive saree', caption: 'Perfect for festivals and celebrations' },
        { id: 'saree6', src: 'assets/products/saree/images/saree6.jpg', alt: 'Wedding saree', caption: 'Bridal collection with golden work' },
        { id: 'saree7', src: 'assets/products/saree/images/saree7.jpg', alt: 'Traditional pattern saree', caption: 'Authentic Sikkimese traditional patterns' },
        { id: 'saree8', src: 'assets/products/saree/images/saree8.jpg', alt: 'Handloom saree', caption: 'Pure handloom weaving technique' },
        { id: 'saree9', src: 'assets/products/saree/images/saree9.jpg', alt: 'Designer saree', caption: 'Contemporary design with traditional touch' },
        { id: 'saree10', src: 'assets/products/saree/images/saree10.jpg', alt: 'Ceremonial saree', caption: 'Special occasion ceremonial wear' },
        { id: 'saree11', src: 'assets/products/saree/images/saree11.jpg', alt: 'Artisan saree', caption: 'Crafted by master artisans' },
        { id: 'saree12', src: 'assets/products/saree/images/saree12.jpg', alt: 'Heritage saree', caption: 'Preserving textile heritage of Sikkim' }
      ],
      features: [
        'Hand-woven by skilled artisans',
        'Natural dyes and colors',
        'Traditional Sikkimese patterns',
        'Premium quality fabric',
        'Comfortable and breathable'
      ],
      benefits: [
        'Supports local artisan communities',
        'Eco-friendly production process',
        'Unique and authentic designs',
        'Durable and long-lasting',
        'Cultural heritage preservation'
      ],
      usage: [
        'Perfect for special occasions',
        'Cultural events and festivals',
        'Wedding ceremonies',
        'Traditional celebrations'
      ],
      availability: 'Available at all SKVIB outlets',
      route: 'saree',
      badge: 'Handcrafted',
      icon: '👘'
    },
    shawl: {
      id: 'shawl',
      name: 'Traditional Shawls',
      category: 'Textiles & Fabrics',
      description: 'Warm and elegant shawls handwoven with traditional patterns, perfect for Sikkim\'s climate and cultural occasions.',
      shortDescription: 'Handwoven shawls with traditional patterns',
      heroImage: 'assets/products/images/shawl.jpg',
      images: [
        { id: 'shawl1', src: 'assets/products/shawl/images/img1.jpg', alt: 'Traditional Sikkimese shawl', caption: 'Handwoven wool shawl with traditional patterns' },
        { id: 'shawl2', src: 'assets/products/shawl/images/img2.jpg', alt: 'Colorful shawl', caption: 'Vibrant colors and intricate designs' },
        { id: 'shawl3', src: 'assets/products/shawl/images/img3.jpg', alt: 'Premium shawl', caption: 'Luxurious wool with fine craftsmanship' }
      ],
      features: [
        'Hand-woven traditional patterns',
        'Natural wool and silk blend',
        'Warm and comfortable',
        'Elegant designs',
        'Cultural authenticity'
      ],
      benefits: [
        'Perfect for cold weather',
        'Versatile styling options',
        'Cultural significance',
        'Premium quality materials'
      ],
      usage: [
        'Daily winter wear',
        'Layering for outdoor activities',
        'Cultural and traditional functions',
        'Gift for special occasions'
      ],
      availability: 'Available at selected outlets',
      route: 'shawl',
      badge: 'Traditional',
      icon: '🧣'
    },
    quilt: {
      id: 'quilt',
      name: 'Handmade Quilts',
      category: 'Textiles & Fabrics',
      description: 'Cozy handmade quilts crafted with love and traditional techniques, providing warmth and comfort for your home.',
      shortDescription: 'Comfortable handmade quilts for cozy nights',
      heroImage: 'assets/products/images/quilt.jpg',
      images: [
        { id: 'quilt1', src: 'assets/products/quilt/images/img1.jpg', alt: 'Handmade quilt', caption: 'Cozy and warm handmade quilt' },
        { id: 'quilt2', src: 'assets/products/quilt/images/img2.jpg', alt: 'Patchwork quilt', caption: 'Beautiful patchwork design' },
        { id: 'quilt3', src: 'assets/products/quilt/images/img3.jpg', alt: 'Traditional quilt', caption: 'Heritage quilting techniques' }
      ],
      features: [
        'Handmade with traditional techniques',
        'Natural cotton and wool filling',
        'Comfortable and breathable',
        'Durable stitching',
        'Beautiful patterns'
      ],
      benefits: [
        'Excellent insulation',
        'Hypoallergenic materials',
        'Long-lasting durability',
        'Easy maintenance'
      ],
      usage: [
        'Winter bedding for warmth',
        'Decorative bedspread',
        'Gift for housewarming or weddings',
        'Extra comfort during travel'
      ],
      availability: 'Available at all outlets',
      route: 'quilt',
      badge: 'Comfort',
      icon: '🛏️'
    },
    turmeric: {
      id: 'turmeric',
      name: 'Local Organic Spices',
      category: 'Organic Food Products',
      description: 'Pure organic turmeric and spices grown in the pristine hills of Sikkim, free from chemicals and pesticides.',
      shortDescription: 'Pure organic turmeric and traditional spices',
      heroImage: 'assets/products/images/turmeric.jpg',
      images: [
        { id: 'turmeric1', src: 'assets/products/turmeric/images/img1.jpg', alt: 'Organic turmeric powder', caption: 'Fresh ground turmeric powder' },
        { id: 'turmeric2', src: 'assets/products/turmeric/images/img2.jpg', alt: 'Whole turmeric', caption: 'Dried whole turmeric roots' }
      ],
      features: [
        'Organically grown in Sikkim',
        'No chemicals or pesticides',
        'High curcumin content',
        'Fresh and aromatic',
        'Traditional processing methods'
      ],
      benefits: [
        'Rich in antioxidants',
        'Anti-inflammatory properties',
        'Boosts immunity',
        'Natural healing properties',
        'Enhances flavor in cooking'
      ],
      usage: [
        'Cooking and seasoning',
        'Traditional medicine',
        'Health supplements',
        'Beauty treatments'
      ],
      availability: 'Available at all outlets',
      route: 'turmeric',
      badge: 'Organic',
      icon: '🌶️'
    },
    temitea: {
      id: 'temitea',
      name: 'Temi Tea',
      category: 'Organic Food Products',
      description: 'Premium tea from the famous Temi Tea Garden, the only tea garden in Sikkim, known for its unique flavor and aroma.',
      shortDescription: 'Premium tea from Sikkim\'s only tea garden',
      heroImage: 'assets/products/images/temitea.jpg',
      images: [
        { id: 'tea1', src: 'assets/products/temitea/images/img1.jpg', alt: 'Temi black tea', caption: 'Premium black tea leaves' },
        { id: 'tea2', src: 'assets/products/temitea/images/img2.jpg', alt: 'Temi green tea', caption: 'Fresh green tea from Temi garden' }
      ],
      features: [
        'From Sikkim\'s only tea garden',
        'High altitude grown',
        'Unique flavor profile',
        'Premium quality leaves',
        'Organic cultivation'
      ],
      benefits: [
        'Rich in antioxidants',
        'Refreshing taste',
        'Health benefits',
        'Cultural heritage',
        'Premium quality'
      ],
      usage: [
        'Daily tea consumption',
        'Special occasions',
        'Gift purposes',
        'Health wellness'
      ],
      availability: 'Available at all outlets',
      route: 'temitea',
      badge: 'Premium',
      icon: '🍵'
    },
    honey: {
      id: 'honey',
      name: 'Local Organic Honey',
      category: 'Organic Food Products',
      description: 'Pure organic honey harvested from the pristine forests of Sikkim, rich in natural enzymes and nutrients.',
      shortDescription: 'Pure organic honey from Sikkim forests',
      heroImage: 'assets/products/images/honey.jpg',
      images: [
        { id: 'honey1', src: 'assets/products/honey/images/img1.jpg', alt: 'Wild forest honey', caption: 'Pure wild forest honey' },
        { id: 'honey2', src: 'assets/products/honey/images/img2.jpg', alt: 'Multifloral honey', caption: 'Multifloral honey from various flowers' }
      ],
      features: [
        'Wild forest honey',
        'No artificial processing',
        'Rich in enzymes',
        'Natural sweetener',
        'Sustainable harvesting'
      ],
      benefits: [
        'Natural energy source',
        'Antibacterial properties',
        'Digestive health',
        'Immune system support',
        'Natural healing'
      ],
      usage: [
        'Natural sweetener',
        'Health supplements',
        'Traditional medicine',
        'Beauty treatments'
      ],
      availability: 'Seasonal availability',
      route: 'honey',
      badge: 'Pure',
      icon: '🍯'
    },
    toileteries: {
      id: 'toileteries',
      name: 'Khadi Toileteries',
      category: 'Wellness & Care',
      description: 'Natural khadi toiletries made from herbal ingredients, gentle on skin and environmentally friendly.',
      shortDescription: 'Natural herbal toiletries and personal care',
      heroImage: 'assets/products/images/toileteries.jpg',
      images: [
        { id: 'toilet1', src: 'assets/products/toileteries/images/img1.jpg', alt: 'Herbal soap', caption: 'Natural herbal soap bars' },
        { id: 'toilet2', src: 'assets/products/toileteries/images/img2.jpg', alt: 'Hair oil', caption: 'Traditional herbal hair oil' },
        { id: 'toilet3', src: 'assets/products/toileteries/images/img3.jpg', alt: 'Natural shampoo', caption: 'Herbal shampoo for all hair types' }
      ],
      features: [
        'Natural herbal ingredients',
        'Chemical-free formulation',
        'Gentle on skin',
        'Eco-friendly packaging',
        'Traditional recipes'
      ],
      benefits: [
        'Suitable for all skin types',
        'No harmful chemicals',
        'Moisturizing properties',
        'Long-lasting freshness',
        'Environmentally safe'
      ],
      usage: [
        'Daily personal care',
        'Sensitive skin care',
        'Natural beauty routine',
        'Family use'
      ],
      availability: 'Available at all outlets',
      route: 'toileteries',
      badge: 'Natural',
      icon: '🧼'
    },
    incense: {
      id: 'incense',
      name: 'Organic Incense',
      category: 'Wellness & Care',
      description: 'Handmade organic incense sticks crafted from natural herbs and aromatic plants, perfect for meditation and spiritual practices.',
      shortDescription: 'Handmade organic incense for meditation',
      heroImage: 'assets/products/images/incense.jpg',
      images: [
        { id: 'incense1', src: 'assets/products/incense/images/img1.jpg', alt: 'Herbal incense sticks', caption: 'Natural herbal incense sticks' },
        { id: 'incense2', src: 'assets/products/incense/images/img2.jpg', alt: 'Sandalwood incense', caption: 'Premium sandalwood incense' },
        { id: 'incense3', src: 'assets/products/incense/images/img3.jpg', alt: 'Aromatic incense', caption: 'Traditional aromatic incense blend' }
      ],
      features: [
        'Handmade from natural herbs',
        'No artificial fragrances',
        'Long-lasting aroma',
        'Traditional preparation',
        'Spiritual significance'
      ],
      benefits: [
        'Creates peaceful atmosphere',
        'Aids in meditation',
        'Natural air freshener',
        'Stress relief',
        'Spiritual enhancement'
      ],
      usage: [
        'Meditation and prayer',
        'Home fragrance',
        'Spiritual ceremonies',
        'Relaxation therapy'
      ],
      availability: 'Available at selected outlets',
      route: 'incense',
      badge: 'Spiritual',
      icon: '🕯️'
    },
    pillow: {
      id: 'pillow',
      name: 'Simul Pillows',
      category: 'Home & Living',
      description: 'Comfortable pillows filled with natural simul cotton, providing excellent support and breathability for a good night\'s sleep.',
      shortDescription: 'Natural simul cotton pillows for comfort',
      heroImage: 'assets/products/images/pillow.jpg',
      images: [
        { id: 'pillow1', src: 'assets/products/pillow/images/img1.jpg', alt: 'Simul cotton pillow', caption: 'Soft simul cotton filled pillow' },
        { id: 'pillow2', src: 'assets/products/pillow/images/img2.jpg', alt: 'Pillow set', caption: 'Complete pillow set for bedroom' }
      ],
      features: [
        'Natural simul cotton filling',
        'Breathable fabric cover',
        'Hypoallergenic properties',
        'Comfortable support',
        'Durable construction'
      ],
      benefits: [
        'Excellent neck support',
        'Temperature regulation',
        'Allergy-friendly',
        'Long-lasting comfort',
        'Easy maintenance'
      ],
      usage: [
        'Bedroom comfort',
        'Guest room essentials',
        'Travel comfort',
        'Therapeutic support'
      ],
      availability: 'Available at all outlets',
      route: 'pillow',
      badge: 'Comfort',
      icon: '🛏️'
    },
    beebox: {
      id: 'beebox',
      name: 'Bee Boxes',
      category: 'Home & Living',
      description: 'Traditional wooden bee boxes crafted for beekeeping enthusiasts, supporting local honey production and bee conservation.',
      shortDescription: 'Traditional wooden bee boxes for beekeeping',
      heroImage: 'assets/products/images/beebox.jpg',
      images: [
        { id: 'beebox1', src: 'assets/products/beebox/images/img1.jpg', alt: 'Wooden bee box', caption: 'Traditional wooden bee hive box' },
        { id: 'beebox2', src: 'assets/products/beebox/images/img3.jpg', alt: 'Bee box set', caption: 'Complete beekeeping setup' },
        { id: 'beebox3', src: 'assets/products/beebox/images/5.jpg', alt: 'Beekeeping tools', caption: 'Essential beekeeping tools and accessories' },
        { id: 'beebox4', src: 'assets/products/beebox/images/6.jpg', alt: 'Bee box components', caption: 'Quality bee box components' },
        { id: 'beebox5', src: 'assets/products/beebox/images/9.jpg', alt: 'Beekeeping equipment', caption: 'Professional beekeeping equipment' },
        { id: 'beebox6', src: 'assets/products/beebox/images/11.jpg', alt: 'Bee hive frames', caption: 'Wooden bee hive frames' },
        { id: 'beebox7', src: 'assets/products/beebox/images/12.jpg', alt: 'Beekeeping accessories', caption: 'Complete beekeeping accessories' },
        { id: 'beebox8', src: 'assets/products/beebox/images/15.jpg', alt: 'Bee box setup', caption: 'Professional bee box setup' }
      ],
      features: [
        'Quality local timber',
        'Traditional design',
        'Weather-resistant finish',
        'Easy maintenance',
        'Bee-friendly construction'
      ],
      benefits: [
        'Supports beekeeping',
        'Honey production',
        'Environmental conservation',
        'Sustainable livelihood',
        'Educational value'
      ],
      usage: [
        'Honey production',
        'Bee conservation',
        'Educational purposes',
        'Sustainable farming'
      ],
      availability: 'Available on order',
      route: 'beebox',
      badge: 'Sustainable',
      icon: '🐝'
    },
    duree: {
      id: 'duree',
      name: 'Traditional Duree',
      category: 'Home & Living',
      description: 'Traditional Sikkimese duree (carpet) handwoven with intricate patterns, perfect for home decoration and cultural significance.',
      shortDescription: 'Handwoven traditional Sikkimese carpets',
      heroImage: 'assets/products/images/duree.jpg',
      images: [
        { id: 'duree1', src: 'assets/products/duree/images/img1.jpg', alt: 'Traditional duree', caption: 'Authentic Sikkimese duree' },
        { id: 'duree2', src: 'assets/products/duree/images/img2.jpg', alt: 'Handwoven duree', caption: 'Premium quality handwoven duree' },
        { id: 'duree3', src: 'assets/products/duree/images/img3.jpg', alt: 'Ceremonial duree', caption: 'Special occasion traditional wear' },
        { id: 'duree4', src: 'assets/products/duree/images/img4.jpg', alt: 'Artisan duree', caption: 'Crafted by master weavers' },
        { id: 'duree5', src: 'assets/products/duree/images/img5.jpg', alt: 'Heritage duree', caption: 'Preserving traditional textile art' }
      ],
      features: [
        'Handwoven traditional patterns',
        'Natural wool and cotton',
        'Cultural authenticity',
        'Durable construction',
        'Beautiful designs'
      ],
      benefits: [
        'Home decoration',
        'Cultural heritage',
        'Warmth and comfort',
        'Artistic value',
        'Long-lasting durability'
      ],
      usage: [
        'Floor covering',
        'Wall decoration',
        'Cultural ceremonies',
        'Home aesthetics'
      ],
      availability: 'Available on order',
      route: 'duree',
      badge: 'Cultural',
      icon: '🏺'
    }
  };

  constructor() {
    // Initialize featured products - all 11 products
    this.productsData.featuredProducts = Object.values(this.products);
  }

  /**
   * Get all products data
   */
  getProductsData(): Observable<ProductsData> {
    return of(this.productsData);
  }

  /**
   * Get all product categories
   */
  getCategories(): Observable<ProductCategory[]> {
    return of(this.productsData.categories);
  }

  /**
   * Get all products
   */
  getAllProducts(): Observable<Product[]> {
    return of(Object.values(this.products));
  }

  /**
   * Get product by ID
   */
  getProductById(id: string): Observable<Product | undefined> {
    return of(this.products[id]);
  }

  /**
   * Get products by category
   */
  getProductsByCategory(categoryId: string): Observable<Product[]> {
    const category = this.productsData.categories.find(c => c.id === categoryId);
    if (!category) {
      return of([]);
    }
    
    const categoryProducts = category.products.map(productId => this.products[productId]).filter(Boolean) as Product[];
    return of(categoryProducts);
  }

  /**
   * Get featured products
   */
  getFeaturedProducts(): Observable<Product[]> {
    return of(this.productsData.featuredProducts);
  }

  /**
   * Get product statistics
   */
  getProductStats(): Observable<ProductStats[]> {
    return of(this.productsData.statistics);
  }

  /**
   * Search products by name or description
   */
  searchProducts(query: string): Observable<Product[]> {
    const searchTerm = query.toLowerCase();
    const results = Object.values(this.products).filter(product => 
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
    );
    return of(results);
  }
}
