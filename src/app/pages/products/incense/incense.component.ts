import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ProductsService } from '../../../core/services/products.service';
import { Product } from '../../../core/models/products.interface';

@Component({
  selector: 'app-incense',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './incense.component.html',
  styleUrl: './incense.component.css'
})
export class IncenseComponent implements OnInit, OnDestroy {
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

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      this.showFloatingButton = scrollOffset > 200;
    }
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadProduct(): void {
    this.productsService.getProductById('incense')
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (product: Product | undefined) => {
          this.product = product || null;
          this.loading = false;
        },
        error: (error: any) => {
          this.error = 'Failed to load product details';
          this.loading = false;
          console.error('Error loading incense product:', error);
        }
      });
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
