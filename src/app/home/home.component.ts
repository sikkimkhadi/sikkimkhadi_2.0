import { Component } from '@angular/core';
import { CarouselComponent } from "./carousel/carousel.component";
import { PortraitsComponent } from "./portraits/portraits.component";
import { EventsectionComponent } from "./eventsection/eventsection.component";
import { HomegalleryComponent } from "./homegallery/homegallery.component";
import { AboutComponent } from "./about/about.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, PortraitsComponent, EventsectionComponent, HomegalleryComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
