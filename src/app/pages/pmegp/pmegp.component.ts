import { Component, computed, inject } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

import { PmegpClDeskComponent } from './pmegp-cl-desk/pmegp-cl-desk.component';
import { PmegpClMobComponent } from './pmegp-cl-mob/pmegp-cl-mob.component';

@Component({
  selector: 'app-pmegp',
  standalone: true,
  imports: [PmegpClDeskComponent, PmegpClMobComponent, AsyncPipe],
  templateUrl: './pmegp.component.html',
  styleUrl: './pmegp.component.css'
})
export class PmegpComponent {
  private breakpointObserver = inject(BreakpointObserver);
  
  isLargeScreen = this.breakpointObserver
    .observe(['(min-width: 769px)'])
    .pipe(map(result => result.matches)); 
}
