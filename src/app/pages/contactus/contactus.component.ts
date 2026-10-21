import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { contactContent, formatPhone, telHref } from '../../core/content/content';

/**
 * Contact page. Data comes from src/content/contacts.json (edited by the admin panel).
 */
@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  readonly c = contactContent;
  readonly formatPhone = formatPhone;
  readonly telHref = telHref;

  private readonly query = encodeURIComponent(this.c.office.mapQuery);
  /** Fixed Google Maps embed origin; only the encoded address varies. */
  readonly mapUrl: SafeResourceUrl = inject(DomSanitizer)
    .bypassSecurityTrustResourceUrl(`https://maps.google.com/maps?q=${this.query}&z=16&output=embed`);
  readonly directionsUrl = `https://www.google.com/maps/search/?api=1&query=${this.query}`;
}
