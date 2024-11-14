import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

import { NavbarComponent } from './layout/navbar/navbar.component';
import { MobilenavComponent } from './layout/mobilenav/mobilenav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ScrollTopService } from './services/scroll-top.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, NavbarComponent, MobilenavComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showNavbar = this.breakpointObserver
    .observe(['(min-width: 769px)'])
    .pipe(map((result: BreakpointState) => result.matches));

  private scrollService = inject(ScrollTopService);

  constructor(private breakpointObserver: BreakpointObserver) {}
}
