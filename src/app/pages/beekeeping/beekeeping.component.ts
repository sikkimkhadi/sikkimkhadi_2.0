import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { BeekeepingService } from '../../core/services/beekeeping.service';
import { 
  BeekeepingData, 
  BeekeepingSection, 
  BeekeepingObjective, 
  BeekeepingActivity,
  BeekeepingStatistic 
} from '../../core/models/beekeeping.interface';

@Component({
  selector: 'app-beekeeping',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beekeeping.component.html',
  styleUrl: './beekeeping.component.css'
})
export class BeekeepingComponent implements OnInit {
  beekeepingData$!: Observable<BeekeepingData>;
  sections$!: Observable<BeekeepingSection[]>;
  objectives$!: Observable<BeekeepingObjective[]>;
  activities$!: Observable<BeekeepingActivity[]>;
  statistics$!: Observable<BeekeepingStatistic[]>;

  constructor(private beekeepingService: BeekeepingService) {}

  ngOnInit(): void {
    this.beekeepingData$ = this.beekeepingService.getBeekeepingData();
    this.sections$ = this.beekeepingService.getSections();
    this.objectives$ = this.beekeepingService.getObjectives();
    this.activities$ = this.beekeepingService.getActivities();
    this.statistics$ = this.beekeepingService.getStatistics();
  }

  /**
   * TrackBy function for sections
   */
  trackBySectionId(index: number, section: BeekeepingSection): string {
    return section.id;
  }

  /**
   * TrackBy function for objectives
   */
  trackByObjectiveId(index: number, objective: BeekeepingObjective): string {
    return objective.id;
  }

  /**
   * TrackBy function for activities
   */
  trackByActivityId(index: number, activity: BeekeepingActivity): string {
    return activity.id;
  }

  /**
   * TrackBy function for statistics
   */
  trackByStatId(index: number, stat: BeekeepingStatistic): string {
    return stat.id;
  }
}
