import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductsService } from '../../core/services/products.service';
import { ProductsData, Product, ProductCategory, ProductStats } from '../../core/models/products.interface';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('productsSection', { static: false }) productsSection!: ElementRef;

  // Observable data streams
  productsData$!: Observable<ProductsData>;
  categories$!: Observable<ProductCategory[]>;
  featuredProducts$!: Observable<Product[]>;
  stats$!: Observable<ProductStats[]>;

  // Loading states
  loading = true;
  productsLoading = true;
  statsLoading = true;

  // Animation states
  productsVisible = false;
  visibleProducts: Set<number> = new Set();

  private destroy$ = new Subject<void>();
  private intersectionObserver!: IntersectionObserver;

  constructor(
    private productsService: ProductsService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.loadProductsData();
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.setupIntersectionObserver();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  /**
   * Load products data
   */
  private loadProductsData(): void {
    this.loading = true;
    this.productsData$ = this.productsService.getProductsData();
    this.categories$ = this.productsService.getCategories();
    this.featuredProducts$ = this.productsService.getFeaturedProducts();
    this.stats$ = this.productsService.getProductStats();

    // Load all data immediately for better UX
    this.productsData$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.loading = false;
      this.productsLoading = false;
      this.statsLoading = false;
    });
  }

  /**
   * Setup intersection observer for animations
   */
  private setupIntersectionObserver(): void {
    if (!isPlatformBrowser(this.platformId) || typeof IntersectionObserver === 'undefined') {
      return;
    }

    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            
            if (element.classList.contains('product-card')) {
              const index = parseInt(element.getAttribute('data-index') || '0');
              this.animateProduct(index);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    // Observe product cards after a short delay
    setTimeout(() => {
      this.observeProductCards();
    }, 100);
  }

  /**
   * Observe product cards for animation
   */
  private observeProductCards(): void {
    if (!isPlatformBrowser(this.platformId) || !this.intersectionObserver) {
      return;
    }

    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
      this.intersectionObserver.observe(card);
    });
  }

  /**
   * Animate product card
   */
  private animateProduct(index: number): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (!this.visibleProducts.has(index)) {
      this.visibleProducts.add(index);
      const card = document.querySelector(`[data-index="${index}"].product-card`) as HTMLElement;
      if (card) {
        card.classList.add('animate-in');
      }
    }
  }

  /**
   * Track by function for products
   */
  trackByProductId(index: number, product: Product): string {
    return product.id;
  }

  /**
   * Track by function for categories
   */
  trackByCategoryId(index: number, category: ProductCategory): string {
    return category.id;
  }

  /**
   * Track by function for stats
   */
  trackByStatsLabel(index: number, stat: ProductStats): string {
    return stat.label;
  }

  /**
   * Get category color for styling
   */
  getCategoryColor(category: ProductCategory): string {
    return category.color;
  }
}
