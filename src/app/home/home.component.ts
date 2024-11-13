import { Component, computed, inject } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { PortraitsComponent } from "./portraits/portraits.component";
import { EventsectionComponent } from "./eventsection/eventsection.component";
import { HomegalleryComponent } from "./homegallery/homegallery.component";
import { AboutComponent } from "./about/about.component";
import { DeskClComponent } from './carousel/desk-cl/desk-cl.component';
import { MobClComponent } from './carousel/mob-cl/mob-cl.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    // Components for different sections of the home page
    PortraitsComponent, 
    EventsectionComponent, 
    HomegalleryComponent, 
    AboutComponent, 
    // Carousel components for different screen sizes
    DeskClComponent, 
    MobClComponent,
    // Required for async pipe in template
    AsyncPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Inject BreakpointObserver service to detect screen size changes
  private breakpointObserver = inject(BreakpointObserver);
  
  // Observable that emits true for screens >= 768px (tablet/desktop)
  // and false for smaller screens (mobile)
  isLargeScreen = this.breakpointObserver
    .observe(['(min-width: 768px)'])
    .pipe(map(result => result.matches));
}
