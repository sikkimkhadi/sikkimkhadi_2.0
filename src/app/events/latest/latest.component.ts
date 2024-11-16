import { Component, computed, signal } from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';
import { EventCardComponent } from '../event-card/event-card.component';

// Move interface to a separate file: src/app/models/event.interface.ts
export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css'],
  standalone: true,
  imports: [
    RouterLink, 
    RouterOutlet, 
    EventCardComponent
  ]
})
export class LatestComponent {
  // Static data should be moved to a separate service or constant file
  events = signal<Event[]>([
   
    {
      id: '14-08-2024',
      title: 'Farewell to Our Esteemed Retirees',
      date: '14th August 2024',
      description: 'A heartfelt farewell honoring six retiring staff members with mementos and gifts at Khadi Bhawan Deorali.',
      imageUrl: '../../../assets/events/farewell_14_08/thumbnail.jpg'
    },
    {
      id: '12-09-2024',
      title: 'SLBC Steering Committee Meeting & 80th State Level Banker’s Committee Meeting',
      date: '12th September 2024',
      description: 'Key stakeholders convened in Gangtok to discuss banking progress and initiatives for the June 2024 quarter',
      imageUrl: '../../../assets/events/slbc_12_09/thumbnail.jpg'
    },
    {
      id: '17-09-2024',
      title: 'Bishwakarma Puja',
      date: '17th September 2024',
      description: 'Bishwakarma Puja was celebrated at Khadi Bhawan, Deorali.',
      imageUrl: '../../../assets/events/bishwakarma_17_09/thumbnail.jpg'
    },
    {
      id: '27-09-2024',
      title: 'Empowering Farmers through Bee-Keeping and Entrepreneurship',
      date: '27th September 2024',
      description: 'A meeting in Duga, Rangpo discussed about bee-keeping and PMEGP, inspiring farmers towards self-entrepreneurship',
      imageUrl: '../../../assets/events/duga_27_10/thumbnail.jpg'
    },
    
  ]);

  constructor(public router: Router) { }

  // Private properties
  private routerEvents = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(event => event.urlAfterRedirects)
    )
  );

  // Public computed properties
  isLatestRoute = computed(() => 
    this.routerEvents() === '/latest'
  );

  breadcrumbText = computed(() => {
    const currentUrl = this.routerEvents() || this.router.url;
    const segments = currentUrl.split('/');
    const eventDate = segments[segments.length - 1];
    
    const event = eventDate !== 'latest' 
      ? this.events().find(e => e.id === eventDate)
      : null;

    return eventDate !== 'latest' 
      ? `latest-events / ${event?.date || eventDate}` 
      : 'latest-events';
  });

  eventDate = computed(() => {
    const currentUrl = this.routerEvents() || this.router.url;
    const segments = currentUrl.split('/');
    const eventDate = segments[segments.length - 1];
    
    const event = this.events().find(e => e.id === eventDate);
    return event?.date || eventDate;
  });
}
