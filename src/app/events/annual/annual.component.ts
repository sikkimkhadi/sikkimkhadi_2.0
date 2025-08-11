import { Component, OnInit, HostListener, Inject, PLATFORM_ID, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ExhibitionService, ExhibitionData, ExhibitionImage } from '../../core/services/exhibition.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-exhibition',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './annual.component.html',
  styleUrl: './annual.component.css'
})
export class ExhibitionComponent implements OnInit {
  exhibitionData$!: Observable<ExhibitionData>;
  exhibitionImages$!: Observable<ExhibitionImage[]>;
  showFloatingButton = signal(false);
  private inactivityTimer: any;

  constructor(
    private exhibitionService: ExhibitionService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.exhibitionData$ = this.exhibitionService.getExhibitionData();
    this.exhibitionImages$ = this.exhibitionService.getExhibitionImages();
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
