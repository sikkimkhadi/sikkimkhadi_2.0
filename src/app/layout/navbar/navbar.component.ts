import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { NavigationService, NavigationItem, LogoItem } from '../../core/services/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class NavbarComponent implements OnInit {
  navigationItems$!: Observable<NavigationItem[]>;
  logoItems$!: Observable<LogoItem[]>;
  siteTitle$!: Observable<string>;

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.navigationItems$ = this.navigationService.getNavigationItems();
    this.logoItems$ = this.navigationService.getLogoItems();
    this.siteTitle$ = this.navigationService.getSiteTitle();
  }
}
