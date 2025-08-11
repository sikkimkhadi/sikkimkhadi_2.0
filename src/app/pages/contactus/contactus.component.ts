import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService, ContactPerson } from '../../core/services/contact.service';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent implements OnInit {
  contacts: ContactPerson[] = [];
  loading = true;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.loadContacts();
  }

  private loadContacts(): void {
    this.contactService.getContacts().subscribe({
      next: (contacts) => {
        this.contacts = contacts;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading contacts:', error);
        this.loading = false;
      }
    });
  }

  makeCall(phoneNumber: string): void {
    window.open(`tel:${phoneNumber}`, '_self');
  }

  trackByContactId(index: number, contact: ContactPerson): number {
    return contact.id;
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .substring(0, 2)
      .toUpperCase();
  }
}
