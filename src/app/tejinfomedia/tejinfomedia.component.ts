import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tej-infomedia',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tejinfomedia.component.html',
  styleUrl: './tejinfomedia.component.css'
})
export class TejInfomediaComponent {

  /** Form field bindings */
  reportName = '';
  reportEmail = '';
  reportSite = '';
  reportType = '';
  reportDesc = '';

  /** Priority chip state */
  activeChip = signal<number>(1); // 0 = Low, 1 = Medium, 2 = High

  /** Form submission state */
  submitted = signal<boolean>(false);
  submitting = signal<boolean>(false);

  readonly priorityChips = [
    { label: '🟢 Low — minor issue', index: 0 },
    { label: '🟡 Medium — affects usage', index: 1 },
    { label: '🔴 High — site is broken', index: 2 },
  ];

  setChip(index: number): void {
    this.activeChip.set(index);
  }

  submitReport(): void {
    if (!this.reportName.trim() || !this.reportEmail.trim() ||
        !this.reportType || !this.reportDesc.trim()) {
      alert('Please fill in your name, email, issue type, and description.');
      return;
    }

    this.submitting.set(true);

    // TODO: Connect to backend API or Formspree/EmailJS
    // Option A: Formspree  → fetch('https://formspree.io/f/YOUR_ID', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({name,email,type,desc}) })
    // Option B: EmailJS    → emailjs.send('service_id','template_id',{name,email,type,desc})
    // Option C: Your own Angular/Node API endpoint

    // Simulate success (placeholder)
    setTimeout(() => {
      this.submitting.set(false);
      this.submitted.set(true);
    }, 400);
  }
}
