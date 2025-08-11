import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface SiteStats {
  products: number;
  outlets: number;
  production: number;
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  
  // Actual counts based on your dedicated components
  private readonly actualStats: SiteStats = {
    products: 11,    // beebox, duree, honey, incense, pillow, quilt, saree, shawl, temitea, toileteries, turmeric
    outlets: 6,      // deorali, gyalshing, jorethang, namchi, singtam, supermarket
    production: 7,   // dodak, gom, mendogaon, pune, raley, samdong, tarku, turuk
    total: 25
  };

  constructor() { }

  /**
   * Get site statistics
   */
  getSiteStats(): Observable<SiteStats> {
    return of(this.actualStats);
  }

  /**
   * Get count for specific category
   */
  getCategoryCount(category: 'products' | 'outlets' | 'production'): number {
    return this.actualStats[category];
  }

  /**
   * Update stats if needed (for future dynamic updates)
   */
  updateStats(newStats: Partial<SiteStats>): void {
    Object.assign(this.actualStats, newStats);
    this.actualStats.total = this.actualStats.products + this.actualStats.outlets + this.actualStats.production;
  }
}
