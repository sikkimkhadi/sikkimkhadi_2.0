import { Component, signal, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { NavigationService, NavigationItem, LogoItem } from '../../core/services/navigation.service';

@Component({
  selector: 'app-mobilenav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mobilenav.component.html',
  styleUrl: './mobilenav.component.css'
})
export class MobilenavComponent implements OnInit {
  isMenuOpen = signal(false);
  showSlidingNav = signal(false);
  navigationItems$!: Observable<NavigationItem[]>;
  logoItems$!: Observable<LogoItem[]>;
  siteTitle$!: Observable<string>;

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.navigationItems$ = this.navigationService.getNavigationItems();
    this.logoItems$ = this.navigationService.getLogoItems();
    this.siteTitle$ = this.navigationService.getSiteTitle();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    this.showSlidingNav.set(scrollPosition > 105);
  }

  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }
}
