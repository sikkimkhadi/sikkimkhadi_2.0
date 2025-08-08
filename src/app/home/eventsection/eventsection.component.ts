import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { EventImageService, EventImage } from '../../services/event-image.service';

@Component({
  selector: 'app-eventsection',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './eventsection.component.html',
  styleUrl: './eventsection.component.css'
})
export class EventsectionComponent implements OnInit {
  eventImages$!: Observable<EventImage[]>;

  private eventData = [
    {
      title: 'Our Latest Events',
      description: 'Discover the newest happenings in Sikkim\'s traditional craft community and recent achievements.',
      badge: 'Latest',
      route: '/latest'
    },
    {
      title: 'Upcoming Events',
      description: 'Join us for exciting upcoming workshops, exhibitions, and cultural celebrations.',
      badge: 'Coming Soon',
      route: '/upcoming'
    },
    {
      title: 'Annual Exhibition',
      description: 'Experience our grand annual showcase of finest Khadi products and traditional craftsmanship.',
      badge: 'Annual',
      route: '/annual'
    }
  ];

  constructor(private eventImageService: EventImageService) {}

  ngOnInit(): void {
    this.eventImages$ = this.eventImageService.getEventImages();
  }

  getBadgeText(index: number): string {
    return this.eventData[index]?.badge || '';
  }

  getCardTitle(index: number): string {
    return this.eventData[index]?.title || '';
  }

  getCardDescription(index: number): string {
    return this.eventData[index]?.description || '';
  }

  getRouterLink(index: number): string[] {
    return [this.eventData[index]?.route || '/'];
  }
}
