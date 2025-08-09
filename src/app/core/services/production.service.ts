import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { ProductionData, ProductionCenter, ProductionVideo, ProductionStats, ProductionCenterDetail } from '../models/production.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductionService {
  private mockProductionData: ProductionData = {
    hero: {
      title: 'Production & Training Centers',
      subtitle: 'Empowering Communities Through Traditional Crafts',
      description: 'Discover our network of production and training centers across Sikkim, where traditional khadi and woollen crafts are preserved and artisans are empowered with skills and sustainable livelihoods.'
    },
    centers: [
      {
        id: 'turuk',
        name: 'Turuk Weaving Center',
        type: 'weaving',
        location: 'Turuk',
        district: 'Namchi District',
        image: '../../../assets/production/images/turuk4.jpg',
        description: 'Production cum Training Centre at Turuk Namchi District. Cotton towels and thaan cloth are woven in this centre. Training is also given to new artisans along with stipend.',
        routerLink: '/turuk',
        products: ['Cotton Towels', 'Thaan Cloth'],
        features: ['Production Center', 'Training Programs', 'Stipend Support'],
        established: '2018',
        capacity: 25
      },
      {
        id: 'dodak',
        name: 'Dodak Weaving Center',
        type: 'weaving',
        location: 'Dodak',
        district: 'Soreng District',
        image: '../../../assets/production/images/dodak1.jpg',
        description: 'SKVIB has Weaving cum Spinning centre at Dodak, Soreng District. Woollen asanis and radiis are hand woven in this centre. New local artisans are also given training along with stipend.',
        routerLink: '/dodak',
        products: ['Woollen Asanis', 'Radiis'],
        features: ['Hand Weaving', 'Spinning Center', 'Local Training'],
        established: '2017',
        capacity: 20
      },
      {
        id: 'samdong',
        name: 'Samdong Woollen Center',
        type: 'weaving',
        location: 'Samdong',
        district: 'Soreng District',
        image: '../../../assets/production/images/sam1.jpg',
        description: 'SKVIB have Weaving cum Spinning center located at Samdong Soreng District. Woollen ashanis and radiis are hand woven in this centre. New local artisans are also given training along with stipend.',
        routerLink: '/samdong',
        products: ['Woollen Ashanis', 'Radiis'],
        features: ['Weaving Center', 'Spinning Facility', 'Artisan Training'],
        established: '2019',
        capacity: 18
      },
      {
        id: 'pune',
        name: 'Bee keeping training in Pune',
        type: 'beekeeping',
        location: 'Pune',
        district: 'Maharashtra',
        image: '../../../assets/production/images/bee2.jpg',
        description: 'A batch of ten educated Bee Enthusiast sent to the Central Bee Research Institute(CBRTI), Pune for one month certificate course on modern Beekeeping techniques in the month of february 2023. These trainees have proven to be an invaluable pool of trainers for imparting training and propagation of Beekeeping among local framers and enthusiasts.',
        routerLink: '/pune',
        products: ['Honey', 'Bee Products'],
        features: ['CBRTI Training', 'Modern Techniques', 'Certificate Course'],
        established: '2023',
        capacity: 10,
        trainingPrograms: ['Modern Beekeeping', 'Honey Production', 'Bee Management']
      },
      {
        id: 'tarku',
        name: 'Tarku Production Center',
        type: 'weaving',
        location: 'Tarku',
        district: 'Namchi District',
        image: '../../../assets/production/images/tarku_bhawan.jpg',
        description: 'Production cum Training Centre at Tarku Namchi District where cotton towels and thaan cloth are woven. Training is also given to new artisans along with stipend.',
        routerLink: '/tarku',
        products: ['Cotton Towels', 'Thaan Cloth'],
        features: ['Production Center', 'Training Hub', 'Stipend Support'],
        established: '2020',
        capacity: 22
      },
      {
        id: 'gom',
        name: 'GOM Center',
        type: 'spinning',
        location: 'Gom',
        district: 'Namchi District',
        image: '../../../assets/production/images/gom.jpg',
        description: 'Khadi cotton yarn spinning is done in this centre located at Gom, Namchi District. New artisans are also provided training in this centre.',
        routerLink: '/gom',
        products: ['Khadi Cotton Yarn'],
        features: ['Yarn Spinning', 'Cotton Processing', 'Artisan Training'],
        established: '2016',
        capacity: 15
      },
      {
        id: 'raley',
        name: 'Raley Center',
        type: 'spinning',
        location: 'Raley Khesay',
        district: 'Gangtok District',
        image: '../../../assets/production/images/raley.jpg',
        description: 'Khadi cotton yarn is hand spun in this centre located at Raley Khesay Gangtok District. New artisans are also provided training in this centre along with stipend.',
        routerLink: '/raley',
        products: ['Hand Spun Cotton Yarn'],
        features: ['Hand Spinning', 'Traditional Methods', 'Training & Stipend'],
        established: '2018',
        capacity: 12
      },
      {
        id: 'mendogaon',
        name: 'Mendgaon Weaving Center',
        type: 'weaving',
        location: 'Mendogaon',
        district: 'Soreng District',
        image: '../../../assets/production/images/mendgaon.jpg',
        description: 'SKVIB have Weaving cum Spinning centre at Mendogaon, Soreng District. Woollen asanis and radiis are hand woven in this centre. New local Artisans are also given training along with stipend.',
        routerLink: '/mendogaon',
        products: ['Woollen Asanis', 'Radiis'],
        features: ['Weaving & Spinning', 'Local Artisans', 'Training Programs'],
        established: '2019',
        capacity: 16
      }
    ],
    videos: [
      {
        id: 'tarku-training-2',
        title: 'Tarku Training Video 2',
        description: 'Advanced training techniques at Tarku Production Center',
        youtubeId: '-ChfTCKSYG8',
        category: 'training',
        duration: '12:45',
        uploadDate: '2023-08-15'
      },
      {
        id: 'tarku-training-1',
        title: 'Tarku Training Video',
        description: 'Basic training methods and weaving techniques at Tarku Center',
        youtubeId: 'TXVSXuE1mfI',
        category: 'training',
        duration: '15:30',
        uploadDate: '2023-07-20'
      },
      {
        id: 'production-overview',
        title: 'Production Overview',
        description: 'Overview of production processes across SKVIB centers',
        youtubeId: 'kIEtkEKwbUo',
        category: 'production',
        duration: '18:22',
        uploadDate: '2023-09-10'
      }
    ],
    statistics: {
      totalCenters: 8,
      totalArtisans: 138,
      yearlyProduction: '2,500+ Units',
      trainingPrograms: 15
    }
  };

  /**
   * Get all production data
   */
  getProductionData(): Observable<ProductionData> {
    return of(this.mockProductionData).pipe(delay(800));
  }

  /**
   * Get production centers
   */
  getProductionCenters(): Observable<ProductionCenter[]> {
    return of(this.mockProductionData.centers).pipe(delay(600));
  }

  /**
   * Get production videos
   */
  getProductionVideos(): Observable<ProductionVideo[]> {
    return of(this.mockProductionData.videos).pipe(delay(400));
  }

  /**
   * Get production statistics
   */
  getProductionStats(): Observable<ProductionStats[]> {
    const stats: ProductionStats[] = [
      {
        icon: '🏭',
        value: '8',
        label: 'Production Centers',
        description: 'Active centers across Sikkim'
      },
      {
        icon: '👥',
        value: '138',
        label: 'Trained Artisans',
        description: 'Skilled craftspeople'
      },
      {
        icon: '🧵',
        value: '15+',
        label: 'Product Types',
        description: 'Diverse handloom items'
      },
      {
        icon: '🎓',
        value: '24',
        label: 'Training Programs',
        description: 'Annual skill development'
      }
    ];
    
    return of(stats).pipe(delay(800));
  }

  /**
   * Get detailed information for a specific production center
   */
  getCenterDetail(centerId: string): Observable<ProductionCenterDetail | null> {
    const centerDetails: { [key: string]: ProductionCenterDetail } = {
      'samdong': {
        id: 'samdong',
        name: 'Samdong Woollen Center',
        type: 'Weaving & Spinning Center',
        location: 'Samdong',
        district: 'Soreng District',
        description: 'SKVIB have Weaving cum Spinning center located at Samdong Soreng District.',
        longDescription: 'SKVIB have Weaving cum Spinning center located at Samdong Soreng District. Woollen ashanis and radiis are hand woven in this centre. New local artisans are also given training along with stipend. This center serves as a hub for traditional woollen craft preservation and modern training techniques.',
        heroImage: '../../../../assets/production/samdong/img1.jpg',
        gallery: [
          {
            id: 'sam1',
            url: '../../../../assets/production/samdong/img1.jpg',
            alt: 'Samdong Center Main Building',
            caption: 'Main production facility at Samdong',
            category: 'facility'
          },
          {
            id: 'sam2',
            url: '../../../../assets/production/samdong/img2.jpg',
            alt: 'Weaving in Progress',
            caption: 'Artisans working on traditional looms',
            category: 'training'
          },
          {
            id: 'sam3',
            url: '../../../../assets/production/samdong/img3.jpg',
            alt: 'Woollen Products',
            caption: 'Finished woollen ashanis and radiis',
            category: 'products'
          },
          {
            id: 'sam4',
            url: '../../../../assets/production/samdong/img4.jpg',
            alt: 'Training Session',
            caption: 'New artisans receiving training',
            category: 'training'
          }
        ],
        features: ['Hand Weaving', 'Spinning Center', 'Local Training'],
        products: ['Woollen Ashanis', 'Radiis', 'Traditional Textiles'],
        trainingPrograms: ['Basic Weaving', 'Advanced Spinning', 'Pattern Design'],
        facilities: ['Traditional Looms', 'Spinning Wheels', 'Training Hall', 'Raw Material Storage']
      },
      'dodak': {
        id: 'dodak',
        name: 'Dodak Production Center',
        type: 'Weaving Center',
        location: 'Dodak',
        district: 'West Sikkim',
        description: 'Traditional weaving center at Dodak specializing in handloom products.',
        longDescription: 'Traditional weaving center at Dodak specializing in handloom products. This center focuses on preserving traditional weaving techniques while training new artisans in the craft of handloom weaving.',
        heroImage: '../../../../assets/production/dodak/img1.jpg',
        gallery: [
          { id: 'dodak1', url: '../../../../assets/production/dodak/img1.jpg', alt: 'Dodak Center', caption: 'Main weaving facility', category: 'facility' },
          { id: 'dodak2', url: '../../../../assets/production/dodak/img2.jpg', alt: 'Weaving Process', caption: 'Traditional weaving in progress', category: 'training' },
          { id: 'dodak3', url: '../../../../assets/production/dodak/img3.jpg', alt: 'Handloom Products', caption: 'Finished handloom textiles', category: 'products' },
          { id: 'dodak4', url: '../../../../assets/production/dodak/img4.jpg', alt: 'Artisan Work', caption: 'Skilled artisans at work', category: 'artisans' },
          { id: 'dodak5', url: '../../../../assets/production/dodak/img5.jpg', alt: 'Center Overview', caption: 'Complete facility view', category: 'facility' }
        ],
        features: ['Traditional Weaving', 'Handloom Training', 'Quality Control'],
        products: ['Handloom Textiles', 'Traditional Fabrics'],
        facilities: ['Weaving Looms', 'Training Area', 'Storage Facility']
      },
      'gom': {
        id: 'gom',
        name: 'Gom Production Center',
        type: 'Textile Center',
        location: 'Gom',
        district: 'South Sikkim',
        description: 'Textile production center at Gom focusing on quality fabric production.',
        longDescription: 'Textile production center at Gom focusing on quality fabric production. The center combines traditional techniques with modern quality standards to produce high-quality textiles.',
        heroImage: '../../../../assets/production/gom/img1.jpg',
        gallery: [
          { id: 'gom1', url: '../../../../assets/production/gom/img1.jpg', alt: 'Gom Center', caption: 'Production facility overview', category: 'facility' },
          { id: 'gom2', url: '../../../../assets/production/gom/img2.jpg', alt: 'Textile Work', caption: 'Artisans at work', category: 'training' },
          { id: 'gom3', url: '../../../../assets/production/gom/img3.jpg', alt: 'Quality Fabrics', caption: 'High-quality textile products', category: 'products' }
        ],
        features: ['Quality Production', 'Modern Techniques', 'Skilled Artisans'],
        products: ['Quality Fabrics', 'Textile Products'],
        facilities: ['Production Floor', 'Quality Check Area', 'Finishing Section']
      },
      'mendogaon': {
        id: 'mendogaon',
        name: 'Mendogaon Production Center',
        type: 'Craft Center',
        location: 'Mendogaon',
        district: 'East Sikkim',
        description: 'Craft production center at Mendogaon specializing in traditional handicrafts.',
        longDescription: 'Craft production center at Mendogaon specializing in traditional handicrafts. This center preserves ancient craft traditions while providing employment opportunities to local artisans.',
        heroImage: '../../../../assets/production/mendogaon/image.jpg',
        gallery: [
          { id: 'mendo1', url: '../../../../assets/production/mendogaon/image.jpg', alt: 'Mendogaon Center', caption: 'Craft center building', category: 'facility' },
          { id: 'mendo2', url: '../../../../assets/production/mendogaon/image1.jpg', alt: 'Handicraft Work', caption: 'Traditional craft making', category: 'training' },
          { id: 'mendo3', url: '../../../../assets/production/mendogaon/image2.jpg', alt: 'Craft Products', caption: 'Finished handicraft items', category: 'products' },
          { id: 'mendo4', url: '../../../../assets/production/mendogaon/image3.jpg', alt: 'Artisan Training', caption: 'Training session in progress', category: 'training' },
          { id: 'mendo5', url: '../../../../assets/production/mendogaon/image4.jpg', alt: 'Workshop Area', caption: 'Main workshop facility', category: 'facility' },
          { id: 'mendo6', url: '../../../../assets/production/mendogaon/image5.jpg', alt: 'Traditional Crafts', caption: 'Heritage craft items', category: 'products' },
          { id: 'mendo7', url: '../../../../assets/production/mendogaon/image6.jpg', alt: 'Skilled Artisans', caption: 'Expert craftspeople at work', category: 'artisans' },
          { id: 'mendo8', url: '../../../../assets/production/mendogaon/image7.jpg', alt: 'Quality Control', caption: 'Product quality inspection', category: 'general' },
          { id: 'mendo9', url: '../../../../assets/production/mendogaon/image8.jpg', alt: 'Display Area', caption: 'Finished products display', category: 'products' },
          { id: 'mendo10', url: '../../../../assets/production/mendogaon/image9.jpg', alt: 'Training Materials', caption: 'Learning resources and tools', category: 'training' },
          { id: 'mendo11', url: '../../../../assets/production/mendogaon/image10.jpg', alt: 'Center Overview', caption: 'Complete facility overview', category: 'facility' }
        ],
        features: ['Traditional Crafts', 'Artisan Training', 'Heritage Preservation'],
        products: ['Handicrafts', 'Traditional Items'],
        facilities: ['Craft Workshop', 'Training Room', 'Display Area']
      },
      'pune': {
        id: 'pune',
        name: 'Bee keeping training in Pune',
        type: 'Training Center',
        location: 'Pune',
        district: 'Maharashtra',
        description: 'A batch of ten educated Bee Enthusiast sent to the Central Bee Research Institute(CBRTI), Pune.',
        longDescription: 'A batch of ten educated Bee Enthusiast sent to the Central Bee Research Institute(CBRTI), Pune for one month certificate course on modern Beekeeping techniques in the month of february 2023. These trainees have proven to be an invaluable pool of trainers for imparting training and propagation of Beekeeping among local farmers and enthusiasts.',
        heroImage: '../../../../assets/production/pune/img1.jpg',
        gallery: [
          { id: 'pune1', url: '../../../../assets/production/pune/img1.jpg', alt: 'CBRTI Pune', caption: 'Central Bee Research Institute', category: 'facility' },
          { id: 'pune2', url: '../../../../assets/production/pune/img3.jpg', alt: 'Beekeeping Training', caption: 'Modern beekeeping techniques training', category: 'training' },
          { id: 'pune3', url: '../../../../assets/production/pune/img5.jpg', alt: 'Bee Products', caption: 'Honey and bee products', category: 'products' },
          { id: 'pune4', url: '../../../../assets/production/pune/img6.jpg', alt: 'Training Session', caption: 'Practical beekeeping training', category: 'training' },
          { id: 'pune5', url: '../../../../assets/production/pune/img7.jpg', alt: 'Research Work', caption: 'Bee research activities', category: 'general' },
          { id: 'pune6', url: '../../../../assets/production/pune/img8.jpg', alt: 'Equipment Training', caption: 'Modern beekeeping equipment', category: 'training' },
          { id: 'pune7', url: '../../../../assets/production/pune/img12.jpg', alt: 'Certificate Course', caption: 'Training certification program', category: 'training' },
          { id: 'pune8', url: '../../../../assets/production/pune/img13.jpg', alt: 'Practical Work', caption: 'Hands-on beekeeping practice', category: 'training' },
          { id: 'pune9', url: '../../../../assets/production/pune/img14.jpg', alt: 'Honey Production', caption: 'Quality honey processing', category: 'products' }
        ],
        features: ['CBRTI Training', 'Modern Techniques', 'Certificate Course'],
        products: ['Honey', 'Bee Products'],
        trainingPrograms: ['Modern Beekeeping', 'Honey Production', 'Bee Management'],
        facilities: ['Research Institute', 'Training Labs', 'Practical Fields']
      },
      'raley': {
        id: 'raley',
        name: 'Raley Production Center',
        type: 'Weaving Center',
        location: 'Raley',
        district: 'North Sikkim',
        description: 'Weaving center at Raley focusing on traditional textile production.',
        longDescription: 'Weaving center at Raley focusing on traditional textile production. The center maintains traditional weaving practices while incorporating modern quality standards.',
        heroImage: '../../../../assets/production/raley/pic.jpg',
        gallery: [
          { id: 'raley1', url: '../../../../assets/production/raley/pic.jpg', alt: 'Raley Center', caption: 'Weaving center facility', category: 'facility' },
          { id: 'raley2', url: '../../../../assets/production/raley/pic1.jpg', alt: 'Traditional Weaving', caption: 'Artisans weaving textiles', category: 'training' },
          { id: 'raley3', url: '../../../../assets/production/raley/pic2.jpg', alt: 'Woven Products', caption: 'Traditional woven items', category: 'products' },
          { id: 'raley4', url: '../../../../assets/production/raley/pic3.jpg', alt: 'Weaving Process', caption: 'Traditional weaving techniques', category: 'training' },
          { id: 'raley5', url: '../../../../assets/production/raley/pic4.jpg', alt: 'Quality Textiles', caption: 'High-quality woven fabrics', category: 'products' }
        ],
        features: ['Traditional Weaving', 'Quality Standards', 'Local Training'],
        products: ['Woven Textiles', 'Traditional Fabrics'],
        facilities: ['Weaving Floor', 'Training Area', 'Storage Room']
      },
      'tarku': {
        id: 'tarku',
        name: 'Tarku Production Center',
        type: 'Production & Training Center',
        location: 'Tarku',
        district: 'Namchi District',
        description: 'Production cum Training Centre at Tarku Namchi District where cotton towels and thaan cloth are woven.',
        longDescription: 'Production cum Training Centre at Tarku Namchi District where cotton towels and thaan cloth are woven. Training is also given to new artisans along with stipend. This center serves as both a production facility and training institute.',
        heroImage: '../../../../assets/production/tarku/img1.jpg',
        gallery: [
          { id: 'tarku1', url: '../../../../assets/production/tarku/img1.jpg', alt: 'Tarku Center', caption: 'Production and training facility', category: 'facility' },
          { id: 'tarku2', url: '../../../../assets/production/tarku/img2.jpg', alt: 'Cotton Weaving', caption: 'Cotton towel production', category: 'training' },
          { id: 'tarku3', url: '../../../../assets/production/tarku/img3.jpg', alt: 'Cotton Products', caption: 'Cotton towels and thaan cloth', category: 'products' }
        ],
        features: ['Cotton Weaving', 'Training with Stipend', 'Dual Purpose Center'],
        products: ['Cotton Towels', 'Thaan Cloth'],
        trainingPrograms: ['Cotton Weaving', 'Textile Production'],
        facilities: ['Production Floor', 'Training Hall', 'Raw Material Store']
      },
      'turuk': {
        id: 'turuk',
        name: 'Turuk Production Center',
        type: 'Textile Center',
        location: 'Turuk',
        district: 'West Sikkim',
        description: 'Textile production center at Turuk specializing in quality fabric production.',
        longDescription: 'Textile production center at Turuk specializing in quality fabric production. The center focuses on maintaining high standards while preserving traditional textile techniques.',
        heroImage: '../../../../assets/production/turuk/turuk_bhawan.jpg',
        gallery: [
          { id: 'turuk1', url: '../../../../assets/production/turuk/turuk_bhawan.jpg', alt: 'Turuk Center', caption: 'Textile production facility building', category: 'facility' },
          { id: 'turuk2', url: '../../../../assets/production/turuk/turuk1.jpg', alt: 'Fabric Production', caption: 'Quality fabric weaving process', category: 'training' },
          { id: 'turuk3', url: '../../../../assets/production/turuk/turuk2.jpg', alt: 'Textile Work', caption: 'Artisans at work', category: 'training' },
          { id: 'turuk4', url: '../../../../assets/production/turuk/turuk3.jpg', alt: 'Textile Products', caption: 'High-quality textiles', category: 'products' },
          { id: 'turuk5', url: '../../../../assets/production/turuk/turuk4.jpg', alt: 'Production Area', caption: 'Complete production facility', category: 'facility' }
        ],
        features: ['Quality Production', 'Traditional Techniques', 'Modern Standards'],
        products: ['Quality Fabrics', 'Textile Items'],
        facilities: ['Weaving Section', 'Quality Control', 'Finishing Area']
      }
    };

    const center = centerDetails[centerId] || null;
    return of(center).pipe(delay(600));
  }

  /**
   * Get centers by type
   */
  getCentersByType(type: string): Observable<ProductionCenter[]> {
    const filteredCenters = this.mockProductionData.centers.filter(center => center.type === type);
    return of(filteredCenters).pipe(delay(400));
  }

  /**
   * Get center by ID
   */
  getCenterById(id: string): Observable<ProductionCenter | null> {
    const center = this.mockProductionData.centers.find(center => center.id === id) || null;
    return of(center).pipe(delay(300));
  }
}
