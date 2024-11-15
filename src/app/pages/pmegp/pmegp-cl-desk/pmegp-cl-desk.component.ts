import { Component, DestroyRef, inject, PLATFORM_ID } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

interface Slide {
  id: number;
  image: string;
  title: string;
  tagline: string;
}

@Component({
  selector: 'app-pmegp-cl-desk',
  standalone: true,
  imports: [],
  templateUrl: './pmegp-cl-desk.component.html',
  styleUrl: './pmegp-cl-desk.component.css'
})
export class PmegpClDeskComponent {
  private destroyRef = inject(DestroyRef);
  private platformId = inject(PLATFORM_ID);

  currentSlide = 0;
  private isPlaying = true;
  readonly isBrowser = isPlatformBrowser(this.platformId);
  
  // Sample slides data - replace with your actual content
  slides: Slide[] = [
    {
      id: 1,
      image: '../../../../assets/pmegp/deskCl/img1.jpg',
      title: 'PMEGP',
      tagline: 'PMEGP - A Unique Initiative'
    },
    {
      id: 2,
      image: '../../../../assets/pmegp/deskCl/img2.jpg',
      title: 'PMEGP',
      tagline: 'PMEGP - A Unique Initiative'
    },
    {
      id: 3,
      image: '../../../../assets/pmegp/deskCl/img3.jpg',
      title: 'PMEGP',
      tagline: 'PMEGP - A Unique Initiative'
    }, 
    {
      id: 4,
      image: '../../../../assets/pmegp/deskCl/img4.jpg',
      title: 'PMEGP',
      tagline: 'PMEGP - A Unique Initiative'
    },
    {
      id: 5,
      image: '../../../../assets/pmegp/deskCl/img5.jpg',
      title: 'PMEGP',
      tagline: 'PMEGP - A Unique Initiative'
    },
    {
      id: 6,
      image: '../../../../assets/pmegp/deskCl/img6.jpg',
      title: 'PMEGP',
      tagline: 'PMEGP - A Unique Initiative'
    },
    {
      id: 7,
      image: '../../../../assets/pmegp/deskCl/img7.jpg',
      title: 'PMEGP',
      tagline: 'PMEGP - A Unique Initiative'
    },
    {
      id: 8,
      image: '../../../../assets/pmegp/deskCl/img8.jpg',
      title: 'PMEGP',
      tagline: 'PMEGP - A Unique Initiative'
    },
    {
      id: 9,
      image: '../../../../assets/pmegp/deskCl/img9.jpg',
      title: 'PMEGP',
      tagline: 'PMEGP - A Unique Initiative'
    },
    {
      id: 10,
      image: '../../../../assets/pmegp/deskCl/img10.jpg',
      title: 'PMEGP',
      tagline: 'PMEGP - A Unique Initiative'
    },
    {
      id: 11,
      image: '../../../../assets/pmegp/deskCl/img11.jpg',
      title: 'PMEGP',
      tagline: 'PMEGP - A Unique Initiative'
    },
    {
      id: 12,
      image: '../../../../assets/pmegp/deskCl/img12.jpg',
      title: 'PMEGP',
      tagline: 'PMEGP - A Unique Initiative'
    },
    {
      id: 13,
      image: '../../../../assets/pmegp/deskCl/img13.jpg',
      title: 'PMEGP',
      tagline: 'PMEGP - A Unique Initiative'
    }
  ]
  constructor() {
    if (this.isBrowser) {
      this.setupAutoSlide();
    }
  }

  private setupAutoSlide(): void {
    if (this.isBrowser && this.isPlaying) {
      interval(6000)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(() => this.nextSlide());
    }
  }

  prevSlide(): void {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  nextSlide(): void {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  pauseSlide(): void {
    if (this.isBrowser) {
      this.isPlaying = false;
    }
  }

  resumeSlide(): void {
    if (this.isBrowser && !this.isPlaying) {
      this.isPlaying = true;
      this.setupAutoSlide();
    }
  }
}
