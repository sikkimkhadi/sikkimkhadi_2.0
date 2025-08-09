import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface NavigationItem {
  label: string;
  route: string;
  isExact?: boolean;
}

export interface LogoItem {
  src: string;
  alt: string;
  width: string;
  clickable?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private readonly navigationItems: NavigationItem[] = [
    { label: 'Home', route: '/', isExact: true },
    { label: 'Outlets', route: '/outlets' },
    { label: 'Products', route: '/products' },
    { label: 'Production & Training', route: '/production' },
    { label: 'PMEGP', route: '/pmegp' },
    { label: 'BEE-KEEPING', route: '/beekeeping' },
    { label: 'Events', route: '/events' },
    { label: 'About Us', route: '/about' },
    { label: 'CONTACT US', route: '/contact' }
  ];

  private readonly logoItems: LogoItem[] = [
    {
      src: 'assets/navbar/sikkim_govt_png@0.33x.png',
      alt: 'Sikkim Government Logo',
      width: '118px',
      clickable: true
    },
    {
      src: 'assets/navbar/skvib@0.33x.png',
      alt: 'Sikkim Khadi and Village Industries Board Logo',
      width: '104px',
      clickable: true
    },
    {
      src: 'assets/navbar/khadi-india@0.33x.png',
      alt: 'Khadi India Logo',
      width: '152px',
      clickable: true
    }
  ];

  /**
   * Get navigation menu items
   */
  getNavigationItems(): Observable<NavigationItem[]> {
    return of(this.navigationItems);
  }

  /**
   * Get logo items for header
   */
  getLogoItems(): Observable<LogoItem[]> {
    return of(this.logoItems);
  }

  /**
   * Get site title
   */
  getSiteTitle(): Observable<string> {
    return of('Sikkim Khadi and Village Industries Board');
  }
}
