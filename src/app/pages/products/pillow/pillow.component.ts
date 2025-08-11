import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Subject, fromEvent } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { ProductsService } from '../../../core/services/products.service';
import { Product } from '../../../core/models/products.interface';

@Component({
  selector: 'app-pillow',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pillow.component.html',
  styleUrl: './pillow.component.css'
})
export class PillowComponent implements OnInit, OnDestroy {
  product: Product | null = null;
  loading = true;
  error: string | null = null;
  showFloatingButton = false;
  private destroy$ = new Subject<void>();

  constructor(
    private productsService: ProductsService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.loadProduct();
    this.setupScrollListener();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadProduct(): void {
    this.productsService.getProductById('pillow')
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (product: Product | undefined) => {
          this.product = product || null;
          this.loading = false;
        },
        error: (error: any) => {
          this.error = 'Failed to load product details';
          this.loading = false;
        }
      });
  }

  private setupScrollListener(): void {
    if (isPlatformBrowser(this.platformId)) {
      fromEvent(window, 'scroll')
        .pipe(
          debounceTime(10),
          takeUntil(this.destroy$)
        )
        .subscribe(() => {
          this.showFloatingButton = window.scrollY > 300;
        });
    }
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

  onImageError(event: any): void {
    event.target.src = 'assets/images/placeholder.jpg';
  }

  onImageLoad(event: any): void {
    event.target.style.opacity = '1';
  }
}
