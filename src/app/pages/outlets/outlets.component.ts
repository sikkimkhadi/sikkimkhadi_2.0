import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { OutletsService, Outlet } from '../../core/services/outlets.service';
import { LazyLoadDirective } from '../../directives/lazy-load.directive';

interface OutletWithState extends Outlet {
  loaded: boolean;
  imageLoaded: boolean;
  visible: boolean;
}

@Component({
  selector: 'app-outlets',
  standalone: true,
  imports: [RouterModule, CommonModule, LazyLoadDirective],
  templateUrl: './outlets.component.html',
  styleUrls: ['./outlets.component.css']
})
export class OutletsComponent implements OnInit, OnDestroy {
  outlets$!: Observable<Outlet[]>;
  outletStats$!: Observable<{total: number, locations: string[]}>;
  
  allOutlets: OutletWithState[] = [];
  visibleOutlets: OutletWithState[] = [];
  
  private destroy$ = new Subject<void>();

  constructor(private outletsService: OutletsService) {}

  ngOnInit(): void {
    this.loadOutletsData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadOutletsData(): void {
    // Load outlet statistics
    this.outletStats$ = this.outletsService.getOutletStats();
    
    // Load all outlets
    this.outlets$ = this.outletsService.getAllOutlets();
    
    this.outlets$
      .pipe(takeUntil(this.destroy$))
      .subscribe(outlets => {
        this.allOutlets = outlets.map(outlet => ({
          ...outlet,
          loaded: false,
          imageLoaded: false,
          visible: false
        }));
        
        // Load all outlets immediately for better UX
        this.loadAllOutlets();
      });
  }

  private loadAllOutlets(): void {
    this.visibleOutlets = [...this.allOutlets];
  }

  onOutletAppear(outlet: OutletWithState): void {
    if (!outlet.visible) {
      outlet.visible = true;
      outlet.loaded = true;
    }
  }

  onImageLoad(outlet: OutletWithState): void {
    outlet.imageLoaded = true;
  }

  onImageError(outlet: OutletWithState): void {
    outlet.imageLoaded = false;
    console.warn(`Failed to load image for outlet: ${outlet.name}`);
  }

  trackByOutletId(index: number, outlet: OutletWithState): string {
    return outlet.id;
  }
}
