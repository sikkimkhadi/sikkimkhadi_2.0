import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { EventImageService, EventImage } from '../../core/services/event-image.service';
import { EventsService } from '../../core/services/events.service';
import { EventCategory } from '../../core/models/event.interface';

@Component({
  selector: 'app-eventsection',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './eventsection.component.html',
  styleUrl: './eventsection.component.css'
})
export class EventsectionComponent implements OnInit {
  eventImages$!: Observable<EventImage[]>;
  eventCategories$!: Observable<EventCategory[]>;

  constructor(
    private eventImageService: EventImageService,
    private eventsService: EventsService
  ) {}

  ngOnInit(): void {
    this.eventImages$ = this.eventImageService.getEventImages();
    this.eventCategories$ = this.eventsService.getEventCategories();
  }

  getBadgeText(index: number): string {
    // This will be handled by the template with async pipe
    return '';
  }

  getCardTitle(index: number): string {
    // This will be handled by the template with async pipe
    return '';
  }

  getCardDescription(index: number): string {
    // This will be handled by the template with async pipe
    return '';
  }

  getRouterLink(index: number): string[] {
    // This will be handled by the template with async pipe
    return ['/'];
  }
}
