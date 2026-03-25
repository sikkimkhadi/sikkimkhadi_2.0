import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { map, filter, startWith } from 'rxjs';
import { AsyncPipe } from '@angular/common';

import { NavbarComponent } from './layout/navbar/navbar.component';
import { MobilenavComponent } from './layout/mobilenav/mobilenav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ScrollTopService } from './core/services/scroll-top.service';
import { GoogleAnalyticsService } from './core/services/google-analytics.service';

/** Routes that render their own nav/footer — hide the global shell for these. */
const SHELL_HIDDEN_ROUTES = ['/developer'];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, NavbarComponent, MobilenavComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private router = inject(Router);

  showNavbar = this.breakpointObserver
    .observe(['(min-width: 769px)'])
    .pipe(map((result: BreakpointState) => result.matches));

  /** False when the current route should hide the global nav + footer */
  showShell = this.router.events.pipe(
    filter(e => e instanceof NavigationEnd),
    startWith(null),
    map(() => !SHELL_HIDDEN_ROUTES.includes(this.router.url.split('?')[0]))
  );

  private scrollService = inject(ScrollTopService);

  constructor(
    private breakpointObserver: BreakpointObserver,
    private googleAnalyticsService: GoogleAnalyticsService
  ) {}

  ngOnInit(): void {
    this.googleAnalyticsService.init();
  }
}
