import { Component, signal, effect, computed, PLATFORM_ID, Inject, DestroyRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

interface Slide {
  id: number;
  image: string;
  title: string;
  tagline: string;
}

@Component({
  selector: 'app-pmegp-cl-mob',
  standalone: true,
  imports: [],
  templateUrl: './pmegp-cl-mob.component.html',
  styleUrls: ['./pmegp-cl-mob.component.css']
})
export class PmegpClMobComponent {
  currentSlide = signal(0);
  slides = signal<Slide[]>([
    {
      id: 1,
      image: '../../../../assets/pmegp/mobCl/img1.jpg',
      title: 'PMEGP',
      tagline: 'PMEGP - A Unique Initiative'
    },
    {
      id: 2,
      image: '../../../../assets/pmegp/mobCl/img2.jpg',
      title: 'PMEGP',
      tagline: 'PMEGP - A Unique Initiative'
    },
    {
      id: 3,
      image: '../../../../assets/pmegp/mobCl/img3.jpg',
      title: 'PMEGP',
      tagline: 'PMEGP - A Unique Initiative'
    },
    {
      id: 4,
      image: '../../../../assets/pmegp/mobCl/img4.jpg',
      title: 'PMEGP',
      tagline: 'PMEGP - A Unique Initiative'
    },
    {
      id: 5,
      image: '../../../../assets/pmegp/mobCl/img5.jpg',
      title: 'PMEGP',
      tagline: 'PMEGP - A Unique Initiative'
    },
    {
      id: 6,
      image: '../../../../assets/pmegp/mobCl/img6.jpg',
      title: 'PMEGP',
      tagline: 'PMEGP - A Unique Initiative'
    }
  ]);

  totalSlides = computed(() => this.slides().length);

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private destroyRef: DestroyRef
  ) {
    if (isPlatformBrowser(this.platformId)) {
      interval(6000)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(() => this.nextSlide());
    }
  }

  nextSlide() {
    this.currentSlide.update(current => 
      (current + 1) % this.totalSlides()
    );
  }

  prevSlide() {
    this.currentSlide.update(current => 
      (current - 1 + this.totalSlides()) % this.totalSlides()
    );
  }

  goToSlide(index: number) {
    this.currentSlide.set(index);
  }
}
