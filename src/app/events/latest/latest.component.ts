import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, HostListener, computed } from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';
import { EventCardComponent } from '../event-card/event-card.component';
import { EventsService } from '../../core/services/events.service';
import { Event } from '../../core/models/event.interface';
import { Observable } from 'rxjs';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink, 
    RouterOutlet, 
    EventCardComponent
  ]
})
export class LatestComponent implements OnInit, OnDestroy {
  events$!: Observable<Event[]>;
  showFloatingButton = false;
  private scrollTimeout: any;
  private mouseTimeout: any;

  constructor(
    public router: Router,
    private eventsService: EventsService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    this.events$ = this.eventsService.getLatestEvents();
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.showFloatingButton = true;
      }, 1000);
    }
  }

  ngOnDestroy(): void {
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
    if (this.mouseTimeout) {
      clearTimeout(this.mouseTimeout);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.showFloatingButton = true;
      clearTimeout(this.scrollTimeout);
      this.scrollTimeout = setTimeout(() => {
        this.showFloatingButton = false;
      }, 3000);
    }
  }

  @HostListener('window:mousemove', [])
  onMouseMove(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.showFloatingButton = true;
      clearTimeout(this.mouseTimeout);
      this.mouseTimeout = setTimeout(() => {
        this.showFloatingButton = false;
      }, 4000);
    }
  }

  @HostListener('window:touchstart', [])
  @HostListener('window:touchmove', [])
  onTouchActivity(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.showFloatingButton = true;
      clearTimeout(this.mouseTimeout);
      this.mouseTimeout = setTimeout(() => {
        this.showFloatingButton = false;
      }, 3000);
    }
  }

  navigateBack(): void {
    this.router.navigate(['/events']);
  }

  // Private properties
  private routerEvents = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(event => event.urlAfterRedirects)
    )
  );

  // Public computed properties
  isLatestRoute = computed(() => 
    this.routerEvents()?.endsWith('/events/latest') || this.routerEvents() === '/events/latest'
  );

  breadcrumbText = computed(() => {
    const currentUrl = this.routerEvents() || this.router.url;
    const segments = currentUrl.split('/');
    const eventDate = segments[segments.length - 1];
    
    return eventDate !== 'latest' 
      ? `latest-events / ${eventDate}` 
      : 'latest-events';
  });

  eventDate = computed(() => {
    const currentUrl = this.routerEvents() || this.router.url;
    const segments = currentUrl.split('/');
    const eventDate = segments[segments.length - 1];
    
    return eventDate;
  });
}
