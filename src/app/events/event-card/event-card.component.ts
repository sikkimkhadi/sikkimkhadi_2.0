import { Component, Input } from '@angular/core';
import { Event } from '../../core/models/event.interface';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css'],
  standalone: true
})
export class EventCardComponent {
  @Input({ required: true }) event!: Event;
}
