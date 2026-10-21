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
      id: 'pmegp-workshop',
      title: 'State Level PMEGP Workshop',
      description: 'Discover insights from the KVIC state-level workshop on generating self-employment through the PMEGP scheme in Gangtok.',
      badge: 'Workshop',
      route: '/events/latest/17-02-2026',
      icon: 'event'
    },
    {
      id: 'upcoming',
      title: 'National Flag Hosting',
      description: 'Celebrating the Har Ghar Tiranga campaign with a patriotic flag hoisting ceremony at Khadi Bhawan, showcasing unity and national pride.',
      badge: 'Patriotic Event',
      route: '/events/upcoming',
      icon: 'flag'
    },
  ];

  private readonly latestEvents: Event[] = [
    {
      id: '02-10-2026',
      title: '157th Gandhi Jayanti Celebration, MG Marg, Gangtok',
      date: '2nd October 2026',
      description: 'The Sikkim Khadi & Village Industries Board took part in the 157th Gandhi Jayanti Celebration at MG Marg, Gangtok, with a stall showcasing Khadi products, textiles, handicrafts and the work of local artisans.',
      imageUrl: 'assets/events/gandhi_jayanti_2026/thumbnail.jpg',
      category: 'latest',
      fullDescription: 'On 2nd October 2026, the Sikkim Khadi & Village Industries Board took part in the 157th Gandhi Jayanti Celebration at MG Marg, Gangtok, marking the birth anniversary of the Father of the Nation, Mahatma Gandhi. The programme was graced by the Hon\'ble Governor of Sikkim and the Hon\'ble Chief Minister of Sikkim, along with distinguished dignitaries, senior officials, delegates and members. The Board set up a stall showcasing Khadi products, traditional textiles, handicrafts and the work of Sikkim\'s local artisans.',
      location: 'MG Marg, Gangtok',
      organizer: 'Sikkim Khadi & Village Industries Board (SKVIB)',
      tags: ['Gandhi Jayanti', 'Khadi', 'Exhibition', 'Artisans', 'MG Marg']
    },
    {
      id: '01-08-2026',
      title: 'Farewell Programme for Ex-Principal Chief Executive Officer and Smt. Kabita Rai',
      date: '1st August 2026',
      description: 'A farewell programme was organized in honour of our Ex-Principal Chief Executive Officer and Smt. Kabita Rai, Ex-Jr. Instructor at Bustee Resort, Ranka, felicitating them with traditional khadas, mementos, and gifts.',
      imageUrl: 'assets/events/farewell_01-08-2026/thumbnail.jpg',
      category: 'latest',
      fullDescription: 'A farewell programme was organized in honour of our Ex-Principal Chief Executive Officer and Smt. Kabita Rai, Ex-Jr. Instructor. The event was held on 1st August 2026 at Bustee Resort, Ranka. During the ceremony, the retiring staff were felicitated with traditional khadas, mementos, and gifts in appreciation of their dedicated service and contributions to the Board.',
      location: 'Bustee Resort, Ranka',
      time: 'Day Time',
      organizer: 'Sikkim Khadi and Village Industries Board (SKVIB)',
      tags: ['Farewell', 'Retirement', 'Appreciation', 'SKVIB', 'Ranka']
    },
    {
      id: '29-05-2026',
      title: 'Honourable Union Minister of Culture & Tourism Visited Dodak Khadi Woollen Centre',
      date: '29th May 2026',
      description: 'Shri Gajendra Singh Shekhawat, Honourable Union Minister of Culture & Tourism, Government of India, visited the Dodak Khadi Woollen Centre in Soreng District.',
      imageUrl: 'assets/events/dodak_visit_29_05/thumbnail.jpg',
      category: 'latest',
      fullDescription: 'On 29th May 2026, Shri Gajendra Singh Shekhawat Ji, Honourable Union Minister of Culture & Tourism, Government of India, visited the Dodak Khadi Woollen Centre in Soreng District. The Sikkim Khadi & Village Industries Board (SKVIB) delegation, led by Chief Executive Officer Shri Dorjee Sherpa, along with Assistant Executive Officer Shri Chewang Topden Bhutia and Office Superintendent Shri Chewang Namgyal Bhutia, welcomed the Honourable Minister and represented the Board during the visit. The visit was attended by several distinguished guests, including local MLAs, government officials, chairpersons, and local panchayats.',
      location: 'Dodak Khadi Woollen Centre, Soreng District',
      time: 'Day Time',
      organizer: 'Sikkim Khadi & Village Industries Board (SKVIB)',
      tags: ['Visit', 'Union Minister', 'Dodak Centre', 'SKVIB', 'Soreng District']
    },
    {
      id: '17-02-2026',
      title: 'One Day State Level Workshop on PMEGP',
      date: '17th February 2026',
      description: 'A comprehensive state-level workshop organized by KVIC in Gangtok to guide prospective entrepreneurs through the Prime Minister\'s Employment Generation Programme (PMEGP).',
      imageUrl: 'assets/events/PMEGP_Workshop/thumbnail.jpg',
      category: 'latest',
      fullDescription: 'On 17th February 2026, the State Office of the Khadi and Village Industries Commission (KVIC), under the Ministry of Micro, Small and Medium Enterprises, Government of India, organized a comprehensive One Day State Level Workshop on the Prime Minister\'s Employment Generation Programme (PMEGP). The event was hosted at the Paryatan Bhawan, Tourism Department in Tadong, Gangtok. The workshop was designed to raise awareness and provide actionable guidance on the PMEGP scheme, bringing together officials and prospective entrepreneurs to discuss strategies for generating employment opportunities.',
      location: 'Paryatan Bhawan, Tourism Department, Tadong, Gangtok',
      time: '10:00 A.M. Onwards',
      organizer: 'State Office, Khadi and Village Industries Commission (Ministry of MSME, Govt. of India)',
      tags: ['PMEGP', 'workshop', 'entrepreneurship', 'KVIC', 'employment']
    },
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
   * Helper to parse dates with ordinal suffixes (e.g. 1st, 2nd, 29th)
   */
  private parseEventDate(dateStr: string): number {
    const cleanDate = dateStr.replace(/(\d+)(st|nd|rd|th)/i, '$1');
    const parsed = new Date(cleanDate).getTime();
    return isNaN(parsed) ? 0 : parsed;
  }

  /**
   * Get all event categories for navigation
   */
  getEventCategories(): Observable<EventCategory[]> {
    const sortedLatest = [...this.latestEvents].sort((a, b) => this.parseEventDate(b.date) - this.parseEventDate(a.date));
    const latest = sortedLatest[0];
    const secondLatest = sortedLatest[1];

    const categories: EventCategory[] = [
      {
        id: 'latest',
        title: 'Our Latest Events',
        description: 'Discover the newest happenings in Sikkim\'s traditional craft community and recent achievements.',
        badge: 'Latest',
        route: '/events/latest',
        icon: 'calendar'
      },
      {
        id: latest.id,
        title: latest.title,
        description: latest.description,
        badge: latest.tags && latest.tags.length > 0 ? latest.tags[0].toUpperCase() : 'LATEST EVENT',
        route: `/events/latest/${latest.id}`,
        icon: 'event'
      },
      {
        id: secondLatest.id,
        title: secondLatest.title,
        description: secondLatest.description,
        badge: secondLatest.tags && secondLatest.tags.length > 0 ? secondLatest.tags[0].toUpperCase() : 'EVENT',
        route: `/events/latest/${secondLatest.id}`,
        icon: 'event'
      }
    ];

    return of(categories);
  }

  /**
   * Get events by category
   */
  getEventsByCategory(category: 'latest' | 'upcoming' | 'annual'): Observable<Event[]> {
    switch (category) {
      case 'latest':
        return of([...this.latestEvents].sort((a, b) => this.parseEventDate(b.date) - this.parseEventDate(a.date)));
      case 'upcoming':
        return of([...this.upcomingEvents].sort((a, b) => this.parseEventDate(a.date) - this.parseEventDate(b.date)));
      case 'annual':
        return of([...this.annualEvents].sort((a, b) => this.parseEventDate(b.date) - this.parseEventDate(a.date)));
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
