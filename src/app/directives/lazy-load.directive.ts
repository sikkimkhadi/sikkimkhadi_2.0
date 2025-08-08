import { Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appLazyLoad]',
  standalone: true
})
export class LazyLoadDirective implements OnInit, OnDestroy {
  @Output() appear = new EventEmitter<void>();

  private observer?: IntersectionObserver;
  private isBrowser: boolean;

  constructor(
    private element: ElementRef,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.createObserver();
    } else {
      // For SSR, immediately emit appear event
      setTimeout(() => this.appear.emit(), 0);
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private createObserver(): void {
    // Check if IntersectionObserver is available
    if (typeof IntersectionObserver === 'undefined') {
      // Fallback for older browsers or SSR
      setTimeout(() => this.appear.emit(), 0);
      return;
    }

    const options = {
      root: null,
      rootMargin: '100px', // Start loading 100px before element comes into view
      threshold: 0.1
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.appear.emit();
          // Stop observing after first intersection
          this.observer?.unobserve(entry.target);
        }
      });
    }, options);

    this.observer.observe(this.element.nativeElement);
  }
}
