import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable, Subject, fromEvent } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { ProductionService } from '../../core/services/production.service';
import { ProductionData, ProductionCenter, ProductionVideo, ProductionStats } from '../../core/models/production.interface';

@Component({
  selector: 'app-production',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './production.component.html',
  styleUrl: './production.component.css'
})
export class ProductionComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('centersSection', { static: false }) centersSection!: ElementRef;
  @ViewChild('videosSection', { static: false }) videosSection!: ElementRef;

  // Observable data streams
  productionData$!: Observable<ProductionData>;
  centers$!: Observable<ProductionCenter[]>;
  videos$!: Observable<ProductionVideo[]>;
  stats$!: Observable<ProductionStats[]>;

  // Loading states
  loading = true;
  centersLoading = true;
  videosLoading = true;
  statsLoading = true;

  // Lazy loading states
  centersVisible = false;
  videosVisible = false;
  visibleCenters: Set<number> = new Set();
  visibleVideos: Set<number> = new Set();

  private destroy$ = new Subject<void>();
  private intersectionObserver!: IntersectionObserver;

  constructor(
    private productionService: ProductionService,
    private sanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    // Load all data immediately for reliable loading
    this.loading = true;
    this.centersLoading = false; // Show centers immediately
    this.videosLoading = false;  // Show videos immediately
    
    this.productionData$ = this.productionService.getProductionData();
    this.centers$ = this.productionService.getProductionCenters();
    this.videos$ = this.productionService.getProductionVideos();
    
    // Set loading to false after data is ready
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

  ngAfterViewInit(): void {
    // Only setup intersection observer if in browser
    if (isPlatformBrowser(this.platformId)) {
      this.setupIntersectionObserver();
      this.setupScrollObserver();
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
   * Load initial data
   */
  private loadInitialData(): void {
    this.loading = true;
    this.productionData$ = this.productionService.getProductionData();
    this.stats$ = this.productionService.getProductionStats();
    this.centers$ = this.productionService.getProductionCenters();
    this.videos$ = this.productionService.getProductionVideos();
    
    // Set loading to false after a short delay
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  /**
   * Load all content immediately for reliable loading
   */
  private loadAllContent(): void {
    // Load centers immediately
    this.centersLoading = false;
    
    // Load videos immediately  
    this.videosLoading = false;
    
    // Ensure all data is available
    this.productionData$.pipe(takeUntil(this.destroy$)).subscribe();
    this.centers$.pipe(takeUntil(this.destroy$)).subscribe();
    this.videos$.pipe(takeUntil(this.destroy$)).subscribe();
  }

  /**
   * Setup intersection observer for lazy loading
   */
  private setupIntersectionObserver(): void {
    // Only run in browser environment
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // Check if IntersectionObserver is available
    if (typeof IntersectionObserver === 'undefined') {
      // Fallback: load all content immediately
      this.loadCenters();
      this.loadVideos();
      return;
    }

    const options = {
      root: null,
      rootMargin: '100px',
      threshold: 0.1
    };

    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          
          if (target.classList.contains('centers-section') && !this.centersVisible) {
            this.loadCenters();
          } else if (target.classList.contains('videos-section') && !this.videosVisible) {
            this.loadVideos();
          } else if (target.classList.contains('center-card')) {
            const index = parseInt(target.getAttribute('data-index') || '0');
            this.animateCenter(index);
          } else if (target.classList.contains('video-card')) {
            const index = parseInt(target.getAttribute('data-index') || '0');
            this.animateVideo(index);
          }
        }
      });
    }, options);
  }

  /**
   * Setup scroll observer for sections
   */
  private setupScrollObserver(): void {
    // Only run in browser environment
    if (!isPlatformBrowser(this.platformId) || !this.intersectionObserver) {
      return;
    }

    setTimeout(() => {
      if (this.centersSection) {
        this.intersectionObserver.observe(this.centersSection.nativeElement);
      }
      if (this.videosSection) {
        this.intersectionObserver.observe(this.videosSection.nativeElement);
      }
    }, 100);
  }

  /**
   * Load centers with lazy loading
   */
  private loadCenters(): void {
    if (this.centersVisible) return;
    
    this.centersVisible = true;
    this.centers$ = this.productionService.getProductionCenters();
    this.centers$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.centersLoading = false;
      this.observeCenterCards();
    });
  }

  /**
   * Load videos with lazy loading
   */
  private loadVideos(): void {
    if (this.videosVisible) return;
    
    this.videosVisible = true;
    this.videos$ = this.productionService.getProductionVideos();
    this.videos$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.videosLoading = false;
      this.observeVideoCards();
    });
  }

  /**
   * Observe center cards for animation
   */
  private observeCenterCards(): void {
    // Only run in browser environment
    if (!isPlatformBrowser(this.platformId) || !this.intersectionObserver) {
      return;
    }

    setTimeout(() => {
      const centerCards = document.querySelectorAll('.center-card');
      centerCards.forEach(card => {
        this.intersectionObserver.observe(card);
      });
    }, 100);
  }

  /**
   * Observe video cards for animation
   */
  private observeVideoCards(): void {
    // Only run in browser environment
    if (!isPlatformBrowser(this.platformId) || !this.intersectionObserver) {
      return;
    }

    setTimeout(() => {
      const videoCards = document.querySelectorAll('.video-card');
      videoCards.forEach(card => {
        this.intersectionObserver.observe(card);
      });
    }, 100);
  }

  /**
   * Animate center card
   */
  private animateCenter(index: number): void {
    // Only run in browser environment
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (!this.visibleCenters.has(index)) {
      this.visibleCenters.add(index);
      const card = document.querySelector(`[data-index="${index}"].center-card`) as HTMLElement;
      if (card) {
        card.classList.add('animate-in');
      }
    }
  }

  /**
   * Animate video card
   */
  private animateVideo(index: number): void {
    // Only run in browser environment
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (!this.visibleVideos.has(index)) {
      this.visibleVideos.add(index);
      const card = document.querySelector(`[data-index="${index}"].video-card`) as HTMLElement;
      if (card) {
        card.classList.add('animate-in');
      }
    }
  }

  /**
   * Track by function for centers
   */
  trackByCenterId(index: number, center: ProductionCenter): string {
    return center.id;
  }

  /**
   * Track by function for videos
   */
  trackByVideoId(index: number, video: ProductionVideo): string {
    return video.id;
  }

  /**
   * Track by function for stats
   */
  trackByStatsLabel(index: number, stat: ProductionStats): string {
    return stat.label;
  }

  /**
   * Get center type badge class
   */
  getCenterTypeBadge(type: string): string {
    const badges: { [key: string]: string } = {
      'weaving': 'badge-weaving',
      'spinning': 'badge-spinning',
      'training': 'badge-training',
      'beekeeping': 'badge-beekeeping'
    };
    return badges[type] || 'badge-default';
  }

  /**
   * Get video category badge class
   */
  getVideoCategoryBadge(category: string): string {
    const badges: { [key: string]: string } = {
      'training': 'badge-training',
      'production': 'badge-production',
      'technique': 'badge-technique'
    };
    return badges[category] || 'badge-default';
  }

  /**
   * Get safe YouTube URL for iframe
   */
  getSafeVideoUrl(youtubeId: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
