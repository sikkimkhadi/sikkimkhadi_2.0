import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { GalleryService, GalleryItem } from '../../services/gallery.service';
import { StatsService, SiteStats } from '../../services/stats.service';
import { LazyLoadDirective } from '../../directives/lazy-load.directive';

interface GalleryItemWithState extends GalleryItem {
  loaded?: boolean;
  visible?: boolean;
}

@Component({
  selector: 'app-homegallery',
  standalone: true,
  imports: [RouterModule, CommonModule, LazyLoadDirective],
  templateUrl: './homegallery.component.html',
  styleUrls: ['./homegallery.component.css']
})
export class HomegalleryComponent implements OnInit, OnDestroy {
  galleryItems$!: Observable<GalleryItem[]>;
  galleryStats$!: Observable<SiteStats>;
  
  allItems: GalleryItemWithState[] = [];
  visibleItems: GalleryItemWithState[] = [];
  currentBatch = 0;
  private batchSize = 6;
  hasMoreItems = true;
  
  private destroy$ = new Subject<void>();
  private visibleItemsSubject = new BehaviorSubject<GalleryItemWithState[]>([]);

  constructor(
    private galleryService: GalleryService,
    private statsService: StatsService
  ) {}

  ngOnInit(): void {
    this.loadInitialData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadInitialData(): void {
    // Load actual site stats from dedicated components
    this.galleryStats$ = this.statsService.getSiteStats();
    
    // Load all gallery items
    this.galleryItems$ = this.galleryService.getGalleryItems();
    
    this.galleryItems$
      .pipe(takeUntil(this.destroy$))
      .subscribe(items => {
        this.allItems = items.map(item => ({
          ...item,
          loaded: false,
          visible: false
        }));
        
        // Load all items initially to avoid loading state issues
        this.loadAllItems();
      });
  }

  private loadAllItems(): void {
    this.visibleItems = [...this.allItems];
    this.hasMoreItems = false;
    this.currentBatch = Math.ceil(this.allItems.length / this.batchSize);
  }

  loadMoreItems(): void {
    if (!this.hasMoreItems || this.currentBatch * this.batchSize >= this.allItems.length) {
      this.hasMoreItems = false;
      return;
    }

    const startIndex = this.currentBatch * this.batchSize;
    const endIndex = Math.min(startIndex + this.batchSize, this.allItems.length);
    const newItems = this.allItems.slice(startIndex, endIndex);
    
    this.visibleItems = [...this.visibleItems, ...newItems];
    this.currentBatch++;
    
    // Check if there are more items
    this.hasMoreItems = endIndex < this.allItems.length;
  }

  onItemAppear(item: GalleryItemWithState): void {
    if (!item.visible) {
      item.visible = true;
    }
  }

  onImageLoad(item: GalleryItemWithState): void {
    item.loaded = true;
  }

  onImageError(item: GalleryItemWithState): void {
    console.warn(`Failed to load image for item: ${item.title}`);
    item.loaded = true; // Mark as loaded to remove placeholder
  }

  getCategoryLabel(category: string): string {
    switch (category) {
      case 'products':
        return 'Products';
      case 'outlets':
        return 'Outlets';
      case 'production':
        return 'Production';
      default:
        return category;
    }
  }

  trackByItemId(index: number, item: GalleryItemWithState): string {
    return item.id;
  }
}
