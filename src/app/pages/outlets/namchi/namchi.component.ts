import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { OutletDetailService, OutletDetail, OutletDetailImage } from '../../../services/outlet-detail.service';
import { LazyLoadDirective } from '../../../directives/lazy-load.directive';

interface ImageWithState extends OutletDetailImage {
  loaded: boolean;
}

@Component({
  selector: 'app-namchi',
  standalone: true,
  imports: [CommonModule, RouterModule, LazyLoadDirective],
  templateUrl: './namchi.component.html',
  styleUrls: ['./namchi.component.css']
})
export class NamchiComponent implements OnInit, OnDestroy {
  outletDetail: OutletDetail | undefined;
  heroImageLoaded = false;
  galleryImages: ImageWithState[] = [];
  showFloatingButton = false;
  
  private destroy$ = new Subject<void>();
  private scrollTimeout: any;
  private mouseTimeout: any;

  constructor(
    private outletDetailService: OutletDetailService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.loadOutletDetail();
    if (isPlatformBrowser(this.platformId)) {
      // Show button after initial load
      setTimeout(() => {
        this.showFloatingButton = true;
      }, 1000);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    
    // Clear timeouts
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
    if (this.mouseTimeout) {
      clearTimeout(this.mouseTimeout);
    }
  }

  private loadOutletDetail(): void {
    this.outletDetailService.getOutletDetail('namchi')
      .pipe(takeUntil(this.destroy$))
      .subscribe(outlet => {
        if (outlet) {
          this.outletDetail = outlet;
          // Convert gallery images to ImageWithState
          this.galleryImages = outlet.galleryImages.map(img => ({
            ...img,
            loaded: false
          } as ImageWithState));
        }
      });
  }

  onHeroImageLoad(): void {
    this.heroImageLoaded = true;
  }

  onImageAppear(image: ImageWithState): void {
    if (!image.loaded) {
      image.loaded = true;
    }
  }

  onGalleryImageLoad(image: ImageWithState): void {
    image.loaded = true;
  }

  onImageError(type: string): void {
    console.warn(`Failed to load ${type} image for Namchi outlet`);
  }

  trackByImageId(index: number, image: OutletDetailImage): string {
    return image.id;
  }

  // Floating button functionality
  navigateBack(): void {
    this.router.navigate(['/outlets']);
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.showFloatingButton = true;
      
      // Hide after 3 seconds of no scrolling
      clearTimeout(this.scrollTimeout);
      this.scrollTimeout = setTimeout(() => {
        this.showFloatingButton = false;
      }, 3000);
    }
  }

  @HostListener('window:mousemove', [])
  onMouseMove(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.showFloatingButton = true;
      
      // Hide after 4 seconds of no mouse movement
      clearTimeout(this.mouseTimeout);
      this.mouseTimeout = setTimeout(() => {
        this.showFloatingButton = false;
      }, 4000);
    }
  }

  @HostListener('window:touchstart', [])
  @HostListener('window:touchmove', [])
  onTouchActivity(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.showFloatingButton = true;
      
      // Hide after 3 seconds of no touch activity (mobile)
      clearTimeout(this.mouseTimeout);
      this.mouseTimeout = setTimeout(() => {
        this.showFloatingButton = false;
      }, 3000);
    }
  }
}
