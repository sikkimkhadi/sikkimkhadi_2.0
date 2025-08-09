import { Component, OnInit, HostListener, Inject, PLATFORM_ID, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventsService } from '../../core/services/events.service';
import { Event } from '../../core/models/event.interface';
import { EventCardComponent } from '../event-card/event-card.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-upcoming',
  standalone: true,
  imports: [CommonModule, RouterModule, EventCardComponent],
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.css'
})
export class UpcomingComponent implements OnInit {
  events$!: Observable<Event[]>;
  showFloatingButton = signal(false);
  private inactivityTimer: any;

  constructor(
    private eventsService: EventsService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.events$ = this.eventsService.getUpcomingEvents();
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
}
