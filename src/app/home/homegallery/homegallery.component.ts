import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { homeGallery, GalleryCategory, HomeGalleryItem } from '../../core/content/content';

type Filter = 'all' | GalleryCategory;

/**
 * Home page gallery: one uniform grid, filterable by category.
 * Items come from src/content/home-gallery.json (edited by the admin panel).
 */
@Component({
  selector: 'app-homegallery',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './homegallery.component.html',
  styleUrls: ['./homegallery.component.css']
})
export class HomegalleryComponent {
  readonly items: HomeGalleryItem[] = homeGallery;
  readonly initialCount = 8;

  readonly filters: { id: Filter; label: string; count: number }[] = [
    { id: 'all', label: 'All', count: this.items.length },
    { id: 'products', label: 'Products', count: this.count('products') },
    { id: 'outlets', label: 'Outlets', count: this.count('outlets') },
    { id: 'production', label: 'Production', count: this.count('production') },
  ].filter(f => f.count > 0) as { id: Filter; label: string; count: number }[];

  readonly active = signal<Filter>('all');
  readonly expanded = signal(false);

  readonly filtered = computed(() =>
    this.active() === 'all' ? this.items : this.items.filter(i => i.category === this.active()));

  readonly shown = computed(() =>
    this.expanded() ? this.filtered() : this.filtered().slice(0, this.initialCount));

  readonly hiddenCount = computed(() => this.filtered().length - this.shown().length);

  select(f: Filter): void {
    this.active.set(f);
    this.expanded.set(false);
  }

  categoryLabel(c: GalleryCategory): string {
    return c === 'products' ? 'Product' : c === 'outlets' ? 'Outlet' : 'Production centre';
  }

  private count(c: GalleryCategory): number {
    return this.items.filter(i => i.category === c).length;
  }
}
