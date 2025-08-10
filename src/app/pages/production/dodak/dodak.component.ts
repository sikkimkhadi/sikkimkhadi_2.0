import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { CommonModule, isPlatformBrowser, TitleCasePipe } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ProductionService } from '../../../core/services/production.service';
import { ProductionCenterDetail } from '../../../core/models/production.interface';

@Component({
  selector: 'app-dodak',
  standalone: true,
  imports: [CommonModule, RouterModule, TitleCasePipe],
  templateUrl: './dodak.component.html',
  styleUrl: './dodak.component.css'
})
export class DodakComponent implements OnInit, OnDestroy {
  centerDetail$!: Observable<ProductionCenterDetail | null>;
  loading = true;
  showFloatingButton = false;
  private destroy$ = new Subject<void>();
  private centerId = 'dodak';
  private scrollTimeout: any;
  private mouseTimeout: any;

  constructor(
    private productionService: ProductionService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.loadCenterDetail();
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

  private loadCenterDetail(): void {
    this.centerDetail$ = this.productionService.getCenterDetail(this.centerId);
    
    this.centerDetail$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    });
  }

  navigateBack(): void {
    this.router.navigate(['/production']);
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

  trackByImageId(index: number, image: any): string {
    return image.id;
  }

  getCategoryBadge(category: string): string {
    const badges: { [key: string]: string } = {
      'facility': 'badge-facility',
      'products': 'badge-products', 
      'training': 'badge-training',
      'artisans': 'badge-artisans',
      'general': 'badge-general'
    };
    return badges[category] || 'badge-general';
  }
}
