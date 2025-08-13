import { Component, OnInit, OnDestroy, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable, Subject, map, takeUntil } from 'rxjs';

import { PMEGPService, PMEGPData, PMEGPCarouselImage, PMEGPPerformanceData, PMEGPObjective, PMEGPSection } from '../../core/services/pmegp.service';
import { PmegpClDeskComponent } from './pmegp-cl-desk/pmegp-cl-desk.component';
import { PmegpClMobComponent } from './pmegp-cl-mob/pmegp-cl-mob.component';

@Component({
  selector: 'app-pmegp',
  standalone: true,
  imports: [CommonModule, RouterModule, PmegpClDeskComponent, PmegpClMobComponent],
  templateUrl: './pmegp.component.html',
  styleUrl: './pmegp.component.css'
})
export class PmegpComponent implements OnInit, OnDestroy {
  private breakpointObserver = inject(BreakpointObserver);
  private pmegpService = inject(PMEGPService);
  private platformId = inject(PLATFORM_ID);
  private destroy$ = new Subject<void>();
  
  // Signals for reactive state management
  pmegpData = signal<PMEGPData | null>(null);
  loading = signal(true);
  error = signal<string | null>(null);
  
  // Computed properties
  isLargeScreen = this.breakpointObserver
    .observe(['(min-width: 769px)'])
    .pipe(map(result => result.matches));
  
  // Observables for template
  pmegpData$ = this.pmegpService.getPMEGPData();
  desktopImages$ = this.pmegpService.getDesktopCarouselImages();
  mobileImages$ = this.pmegpService.getMobileCarouselImages();
  performanceData$ = this.pmegpService.getPerformanceData();
  objectives$ = this.pmegpService.getObjectives();
  sections$ = this.pmegpService.getSections();
  statistics$ = this.pmegpService.getStatistics();

  ngOnInit(): void {
    this.loadPMEGPData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadPMEGPData(): void {
    this.loading.set(true);
    this.pmegpService.getPMEGPData()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.pmegpData.set(data);
          this.loading.set(false);
        },
        error: (err) => {
          this.error.set('Failed to load PMEGP data');
          this.loading.set(false);
          console.error('Error loading PMEGP data:', err);
        }
      });
  }



  // Track by functions for performance
  trackByImageId(index: number, image: PMEGPCarouselImage): string {
    return image.id;
  }

  trackByYear(index: number, data: PMEGPPerformanceData): string {
    return data.year;
  }

  trackByObjectiveId(index: number, objective: PMEGPObjective): number {
    return objective.id;
  }

  trackBySectionId(index: number, section: PMEGPSection): string {
    return section.id;
  }
}
