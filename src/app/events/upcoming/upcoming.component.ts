import { Component, OnInit, HostListener, Inject, PLATFORM_ID, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FlagHostingService, FlagHostingData, FlagHostingImage } from '../../core/services/flag-hosting.service';

import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-flag-hosting',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class FlagHostingComponent implements OnInit {
  flagHostingData$!: Observable<FlagHostingData>;
  flagHostingImages$!: Observable<FlagHostingImage[]>;
  showFloatingButton = signal(false);
  private inactivityTimer: any;

  constructor(
    private flagHostingService: FlagHostingService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.flagHostingData$ = this.flagHostingService.getFlagHostingData();
    this.flagHostingImages$ = this.flagHostingService.getFlagHostingImages();
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

  trackByImageId(index: number, image: FlagHostingImage): string {
    return image.id;
  }
}
