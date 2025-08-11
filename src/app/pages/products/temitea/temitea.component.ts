import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable, Subject, fromEvent } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { ProductsService } from '../../../core/services/products.service';
import { Product } from '../../../core/models/products.interface';

@Component({
  selector: 'app-temitea',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './temitea.component.html',
  styleUrl: './temitea.component.css'
})
export class TemiteaComponent implements OnInit, OnDestroy {
  product$!: Observable<Product | undefined>;
  loading = true;
  error = false;

  // Floating back button visibility
  backButtonVisible = signal(false);
  private userActivityTimer?: number;
  private destroy$ = new Subject<void>();

  constructor(
    private productsService: ProductsService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.loadProductData();
    this.setupUserActivityDetection();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.userActivityTimer) {
      clearTimeout(this.userActivityTimer);
    }
  }

  private loadProductData(): void {
    this.loading = true;
    this.product$ = this.productsService.getProductById('temitea');
    
    this.product$.subscribe({
      next: (product) => {
        this.loading = false;
        this.error = !product;
      },
      error: () => {
        this.loading = false;
        this.error = true;
      }
    });
  }

  private setupUserActivityDetection(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const events = ['scroll', 'mousemove', 'keydown', 'touchstart'];
    
    events.forEach(eventType => {
      fromEvent(document, eventType)
        .pipe(
          debounceTime(100),
          takeUntil(this.destroy$)
        )
        .subscribe(() => {
          this.showBackButton();
        });
    });
  }

  private showBackButton(): void {
    this.backButtonVisible.set(true);
    
    if (this.userActivityTimer) {
      clearTimeout(this.userActivityTimer);
    }
    
    this.userActivityTimer = window.setTimeout(() => {
      this.backButtonVisible.set(false);
    }, 3000);
  }

  trackByImageId(index: number, image: any): string {
    return image.id || index.toString();
  }
}
