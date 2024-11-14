import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

/**
 * Service to handle automatic scrolling to top on route changes
 * This service is provided in 'root' so only one instance exists throughout the app
 */
@Injectable({
  providedIn: 'root'
})
export class ScrollTopService {
  // Inject Router to listen for navigation events
  private router = inject(Router);
  
  // Inject PLATFORM_ID to check if we're running in browser or server
  private platformId = inject(PLATFORM_ID);

  constructor() {
    // Subscribe to router navigation end events
    this.router.events.pipe(
      // Filter to only respond to NavigationEnd events
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Check if we're in browser environment to avoid SSR issues
      if (isPlatformBrowser(this.platformId)) {
        // Scroll to top of the page
        // Note: Could add { behavior: 'smooth' } for smooth scrolling
        window.scrollTo(0, 0);
      }
    });
  }
}
