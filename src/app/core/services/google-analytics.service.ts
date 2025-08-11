import { Injectable } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor(private router: Router) { }

  public init() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.trackPage(event.urlAfterRedirects);
      }
    });
  }

  private trackPage(url: string) {
    if (typeof gtag === 'function') {
      gtag('config', 'G-V2YPHXR10D', {
        'page_path': url
      });
    }
  }
}
