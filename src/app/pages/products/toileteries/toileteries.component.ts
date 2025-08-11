import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Subject, takeUntil, debounceTime, fromEvent } from 'rxjs';
import { ProductsService } from '../../../core/services/products.service';
import { Product } from '../../../core/models/products.interface';

@Component({
  selector: 'app-toileteries',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './toileteries.component.html',
  styleUrl: './toileteries.component.css'
})
export class ToileteriesComponent implements OnInit, OnDestroy {
  product: Product | null = null;
  loading = true;
  error: string | null = null;
  
  // Floating back button visibility
  showFloatingButton = signal(false);
  private userActivityTimer?: number;
  private destroy$ = new Subject<void>();

  constructor(
    private productsService: ProductsService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.loadProduct();
    this.setupUserActivityDetection();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.userActivityTimer) {
      clearTimeout(this.userActivityTimer);
    }
  }



  private loadProduct(): void {
    this.productsService.getProductById('toileteries')
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (product: Product | undefined) => {
          this.product = product || null;
          this.loading = false;
        },
        error: (error: any) => {
          this.error = 'Failed to load product details';
          this.loading = false;
          console.error('Error loading toileteries product:', error);
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
    this.showFloatingButton.set(true);
    
    if (this.userActivityTimer) {
      clearTimeout(this.userActivityTimer);
    }
    
    this.userActivityTimer = window.setTimeout(() => {
      this.showFloatingButton.set(false);
    }, 3000);
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }

  navigateToOutlets(): void {
    this.router.navigate(['/outlets']);
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }
}
