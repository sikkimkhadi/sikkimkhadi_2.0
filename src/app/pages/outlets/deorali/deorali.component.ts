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
  selector: 'app-deorali',
  standalone: true,
  imports: [CommonModule, RouterModule, LazyLoadDirective],
  templateUrl: './deorali.component.html',
  styleUrls: ['./deorali.component.css']
})
export class DeoraliComponent implements OnInit, OnDestroy {
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
      setTimeout(() => {
        this.showFloatingButton = true;
      }, 1000);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
    if (this.mouseTimeout) {
      clearTimeout(this.mouseTimeout);
    }
  }

  private loadOutletDetail(): void {
    this.outletDetailService.getOutletDetail('deorali')
      .pipe(takeUntil(this.destroy$))
      .subscribe(outlet => {
        if (outlet) {
          this.outletDetail = outlet;
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
    console.warn(`Failed to load ${type} image for Deorali outlet`);
  }

  trackByImageId(index: number, image: OutletDetailImage): string {
    return image.id;
  }

  navigateBack(): void {
    this.router.navigate(['/outlets']);
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.showFloatingButton = true;
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
      clearTimeout(this.mouseTimeout);
      this.mouseTimeout = setTimeout(() => {
        this.showFloatingButton = false;
      }, 3000);
    }
  }
}
