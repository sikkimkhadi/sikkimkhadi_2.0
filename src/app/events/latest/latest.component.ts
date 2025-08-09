import { Component, computed, signal, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';
import { EventCardComponent } from '../event-card/event-card.component';
import { EventsService } from '../../core/services/events.service';
import { Event } from '../../core/models/event.interface';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

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
export class LatestComponent implements OnInit {
  events$!: Observable<Event[]>;
  showFloatingButton = signal(false);
  private inactivityTimer: any;

  constructor(
    public router: Router,
    private eventsService: EventsService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    this.events$ = this.eventsService.getLatestEvents();
  }

  @HostListener('window:scroll', [])
  @HostListener('window:mousemove', [])
  onUserActivity(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.showFloatingButton.set(true);
      
      clearTimeout(this.inactivityTimer);
      this.inactivityTimer = setTimeout(() => {
        this.showFloatingButton.set(false);
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
