import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface FlagHostingData {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  organizedBy: string;
  description: string;
  stats: {
    date: string;
    participants: string;
    location: string;
  };
}

export interface FlagHostingImage {
  id: string;
  url: string;
  title: string;
  caption: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class FlagHostingService {
  private flagHostingData: FlagHostingData = {
    title: 'National Flag Hoisting Ceremony at Khadi Bhawan - Har Ghar Tiranga 2025',
    subtitle: 'Celebrating Unity, Pride, and Patriotism under the Har Ghar Tiranga Campaign',
    date: '13th August 2025',
    location: 'Khadi Bhawan, Deorali, Gangtok',
    organizedBy: 'Sikkim Khadi & Village Industries Board (SKVIB)',
    description: 'As part of the nationwide Har Ghar Tiranga program being observed across the country, the Sikkim Khadi & Village Industries Board conducted a National Flag hoisting ceremony at Khadi Bhawan on 13th August 2025. The Tiranga was unfurled by Shri D.B Thatal, Hon\'ble Advisor, SKVIB, in the presence of officers and staff of SKVIB. Following the hoisting, the National Anthem was sung, filling the atmosphere with pride and unity. The event reflected the true spirit of patriotism, with participants proudly holding and displaying the Indian National Flag.',
    stats: {
      date: '13th August',
      participants: '50',
      location: 'Khadi Bhawan'
    }
  };

  private flagHostingImages: FlagHostingImage[] = [
    {
      id: 'img1',
      url: 'assets/events/flag_hosting/img1.jpg',
      title: 'Gathering with the Tiranga',
      caption: 'Staff and officers of SKVIB proudly hold the Indian National Flag outside Khadi Bhawan, Deorali, Gangtok, as part of the Har Ghar Tiranga program. The spirit of patriotism is visible in the vibrant display of the Tricolour.',
      category: 'Ceremony'
    },
    {
      id: 'img2',
      url: 'assets/events/flag_hosting/img2.jpg',
      title: 'Unity in Patriotism',
      caption: 'Participants stand shoulder-to-shoulder with the Tiranga, led by Shri D.B. Thatal, Hon\'ble Advisor, SKVIB, ready to mark the ceremonial unfurling of the National Flag.',
      category: 'Leadership'
    },
    {
      id: 'img3',
      url: 'assets/events/flag_hosting/img3.jpg',
      title: 'Salute to the Nation',
      caption: 'Following the flag hoisting, the attendees stand in reverence, singing the National Anthem in unison, creating an atmosphere of pride and unity.',
      category: 'Ceremony'
    },
    {
      id: 'img4',
      url: 'assets/events/flag_hosting/img4.jpg',
      title: 'Khadi Bhawan in Celebration',
      caption: 'A wider view of Khadi Bhawan adorned with the Indian Tricolour, capturing the full assembly of SKVIB staff and officials during the flag hoisting ceremony.',
      category: 'Venue'
    },
    {
      id: 'img5',
      url: 'assets/events/flag_hosting/img5.jpg',
      title: 'Proud Moments at Khadi Bhawan',
      caption: 'The Tricolour flutters high as participants cherish the moment, symbolising India\'s unity, sovereignty, and heritage under the Har Ghar Tiranga campaign.',
      category: 'Celebration'
    },
    {
      id: 'img6',
      url: 'assets/events/flag_hosting/img6.jpg',
      title: 'Respect and Reflection',
      caption: 'The group stands attentively facing the fluttering National Flag, their expressions reflecting honour and deep respect for the nation.',
      category: 'Ceremony'
    },
    {
      id: 'img7',
      url: 'assets/events/flag_hosting/img7.jpg',
      title: 'Smiles of Patriotism',
      caption: 'A closer shot of SKVIB staff holding the Tiranga, radiating pride and joy as part of the nationwide celebration of Har Ghar Tiranga.',
      category: 'Celebration'
    }
  ];

  getFlagHostingData(): Observable<FlagHostingData> {
    return of(this.flagHostingData);
  }

  getFlagHostingImages(): Observable<FlagHostingImage[]> {
    return of(this.flagHostingImages);
  }
}
