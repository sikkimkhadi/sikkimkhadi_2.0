import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Event, EventCategory } from '../models/event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  
  private readonly eventCategories: EventCategory[] = [
    {
      id: 'latest',
      title: 'Our Latest Events',
      description: 'Discover the newest happenings in Sikkim\'s traditional craft community and recent achievements.',
      badge: 'Latest',
      route: '/events/latest',
      icon: 'calendar'
    },
    {
      id: 'upcoming',
      title: 'Upcoming Events',
      description: 'Join us for exciting upcoming workshops, exhibitions, and cultural celebrations.',
      badge: 'Coming Soon',
      route: '/events/upcoming',
      icon: 'clock'
    },
    {
      id: 'annual',
      title: 'Annual Exhibition',
      description: 'Experience our grand annual showcase of finest Khadi products and traditional craftsmanship.',
      badge: 'Annual',
      route: '/events/annual',
      icon: 'star'
    }
  ];

  private readonly latestEvents: Event[] = [
    {
      id: '27-09-2024',
      title: 'Empowering Farmers through Bee-Keeping and Entrepreneurship',
      date: '27th September 2024',
      description: 'A meeting in Duga, Rangpo discussed about bee-keeping and PMEGP, inspiring farmers towards self-entrepreneurship',
      imageUrl: 'assets/events/duga_27_10/thumbnail.jpg',
      category: 'latest',
      fullDescription: 'A comprehensive meeting was held in Duga, Rangpo to discuss the potential of bee-keeping as a sustainable livelihood option and the Prime Minister Employment Generation Programme (PMEGP). The session aimed to inspire local farmers towards self-entrepreneurship and sustainable agricultural practices.',
      location: 'Duga, Rangpo',
      time: '10:00 AM',
      organizer: 'Sikkim Khadi and Village Industries Board',
      tags: ['bee-keeping', 'entrepreneurship', 'PMEGP', 'farmers']
    },
    {
      id: '17-09-2024',
      title: 'Bishwakarma Puja',
      date: '17th September 2024',
      description: 'Bishwakarma Puja was celebrated at Khadi Bhawan, Deorali.',
      imageUrl: 'assets/events/bishwakarma_17_09/thumbnail.jpg',
      category: 'latest',
      fullDescription: 'Bishwakarma Puja, the festival dedicated to Lord Vishwakarma - the divine architect and craftsman, was celebrated with great devotion at Khadi Bhawan, Deorali. The celebration honored the tools and machinery that are essential for our craft and production work.',
      location: 'Khadi Bhawan, Deorali',
      time: '9:00 AM',
      organizer: 'Sikkim Khadi and Village Industries Board',
      tags: ['puja', 'celebration', 'tradition', 'craftsmanship']
    },
    {
      id: '12-09-2024',
      title: 'SLBC Steering Committee Meeting & 80th State Level Banker\'s Committee Meeting',
      date: '12th September 2024',
      description: 'Key stakeholders convened in Gangtok to discuss banking progress and initiatives for the June 2024 quarter',
      imageUrl: 'assets/events/slbc_12_09/thumbnail.jpg',
      category: 'latest',
      fullDescription: 'The SLBC Steering Committee Meeting and 80th State Level Banker\'s Committee Meeting brought together key financial stakeholders from across Sikkim. The meeting focused on reviewing banking progress, discussing new initiatives, and planning financial support for various development projects in the state.',
      location: 'Gangtok',
      time: '11:00 AM',
      organizer: 'State Level Bankers Committee',
      tags: ['banking', 'finance', 'development', 'committee']
    },
    {
      id: '14-08-2024',
      title: 'Farewell to Our Esteemed Retirees',
      date: '14th August 2024',
      description: 'A heartfelt farewell honoring six retiring staff members with mementos and gifts at Khadi Bhawan Deorali.',
      imageUrl: 'assets/events/farewell_14_08/thumbnail.jpg',
      category: 'latest',
      fullDescription: 'A touching farewell ceremony was organized to honor six dedicated staff members who have served the Sikkim Khadi and Village Industries Board with distinction. The ceremony included the presentation of mementos and gifts as a token of appreciation for their years of dedicated service.',
      location: 'Khadi Bhawan, Deorali',
      time: '3:00 PM',
      organizer: 'Sikkim Khadi and Village Industries Board',
      tags: ['farewell', 'retirement', 'appreciation', 'staff']
    }
  ];

  private readonly upcomingEvents: Event[] = [
    // No upcoming events currently - this will show the creative animated empty state
  ];

  private readonly annualEvents: Event[] = [
    // No annual events currently - this will show the creative animated empty state
  ];

  /**
   * Get all event categories for navigation
   */
  getEventCategories(): Observable<EventCategory[]> {
    return of(this.eventCategories);
  }

  /**
   * Get events by category
   */
  getEventsByCategory(category: 'latest' | 'upcoming' | 'annual'): Observable<Event[]> {
    switch (category) {
      case 'latest':
        return of(this.latestEvents.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
      case 'upcoming':
        return of(this.upcomingEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()));
      case 'annual':
        return of(this.annualEvents.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
      default:
        return of([]);
    }
  }

  /**
   * Get all latest events (for home page)
   */
  getLatestEvents(): Observable<Event[]> {
    return this.getEventsByCategory('latest');
  }

  /**
   * Get all upcoming events
   */
  getUpcomingEvents(): Observable<Event[]> {
    return this.getEventsByCategory('upcoming');
  }

  /**
   * Get all annual events
   */
  getAnnualEvents(): Observable<Event[]> {
    return this.getEventsByCategory('annual');
  }

  /**
   * Get a specific event by ID
   */
  getEventById(id: string): Observable<Event | null> {
    const allEvents = [...this.latestEvents, ...this.upcomingEvents, ...this.annualEvents];
    const event = allEvents.find(e => e.id === id);
    return of(event || null);
  }

  /**
   * Get featured events for home page (latest 3)
   */
  getFeaturedEvents(): Observable<Event[]> {
    return of(this.latestEvents.slice(0, 3));
  }

  /**
   * Search events by title or description
   */
  searchEvents(query: string): Observable<Event[]> {
    const allEvents = [...this.latestEvents, ...this.upcomingEvents, ...this.annualEvents];
    const filteredEvents = allEvents.filter(event => 
      event.title.toLowerCase().includes(query.toLowerCase()) ||
      event.description.toLowerCase().includes(query.toLowerCase()) ||
      event.tags?.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    return of(filteredEvents);
  }
}
