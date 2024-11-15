import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * 404 Not Found Component
 * Displays error message and automatically redirects to home page after countdown
 */
@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  /** Countdown timer in seconds before redirect */
  countdown: number = 6;

  constructor(private router: Router) {
    // Set up countdown interval
    const interval = setInterval(() => {
      this.countdown--;
      
      // When countdown reaches zero
      if (this.countdown === 0) {
        clearInterval(interval);  // Clean up interval
        this.router.navigate(['/']);  // Redirect to home page
      }
    }, 1000);  // Update every second
  }
}
