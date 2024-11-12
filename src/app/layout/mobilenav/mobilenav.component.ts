import { Component, signal, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mobilenav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './mobilenav.component.html',
  styleUrl: './mobilenav.component.css'
})
export class MobilenavComponent {
  isMenuOpen = signal(false);
  showSlidingNav = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    this.showSlidingNav.set(scrollPosition > 105);
  }

  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }
}
