import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StatsService } from '../../core/services/stats.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  stats$ = inject(StatsService).getSiteStats();
}
