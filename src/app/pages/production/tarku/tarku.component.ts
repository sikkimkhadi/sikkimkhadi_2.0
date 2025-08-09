import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser, TitleCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductionService } from '../../../core/services/production.service';
import { ProductionCenterDetail } from '../../../core/models/production.interface';

@Component({
  selector: 'app-tarku',
  standalone: true,
  imports: [CommonModule, RouterModule, TitleCasePipe],
  templateUrl: './tarku.component.html',
  styleUrl: './tarku.component.css'
})
export class TarkuComponent implements OnInit, OnDestroy {
  centerDetail$!: Observable<ProductionCenterDetail | null>;
  loading = true;
  showBackButton = false;
  private destroy$ = new Subject<void>();
  private centerId = 'tarku';

  constructor(
    private productionService: ProductionService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.loadCenterDetail();
    this.setupBackButtonVisibility();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadCenterDetail(): void {
    this.centerDetail$ = this.productionService.getCenterDetail(this.centerId);
    
    this.centerDetail$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    });
  }

  private setupBackButtonVisibility(): void {
    if (isPlatformBrowser(this.platformId)) {
      const showButton = () => {
        this.showBackButton = true;
        setTimeout(() => {
          this.showBackButton = false;
        }, 5000);
      };

      document.addEventListener('scroll', showButton);
      document.addEventListener('mousemove', showButton);
      
      showButton();
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
