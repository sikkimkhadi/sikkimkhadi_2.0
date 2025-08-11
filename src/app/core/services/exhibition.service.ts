import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface ExhibitionImage {
  id: string;
  filename: string;
  title: string;
  tagline: string;
  description: string;
  category: 'banner' | 'certificate' | 'venue' | 'activity';
  alt: string;
}

export interface ExhibitionData {
  title: string;
  subtitle: string;
  officialText: string;
  images: ExhibitionImage[];
  stats: {
    duration: string;
    participants: number;
    locations: number;
    activities: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ExhibitionService {
  private exhibitionData: ExhibitionData = {
    title: 'Tiranga Weaves and Threads',
    subtitle: 'A Celebration of Unity in Colours',
    officialText: `The Har Ghar Tiranga campaign was launched in 2002 under the aegis of Azadi Ka Amrit Mahotsav to encourage citizen to hoist the National Flag in their homes and foster a personal and emotional connection with the Tiranga. In continuation of this spirit, the Government of India has decided to celebrate Har Ghar Tiranga- 2005 across the country from 02nd -15th of August 2025.
During this campaign, Sikkim Khadi & V.I Board (SKVIB) has organised a "Tiranga Weaves and Threads" activity wherein spinning of Tri-colour threads and weaving of Tri-colour carpet was publicly displayed to showcase traditionally weaves in Tiranga colour.`,
    stats: {
      duration: '2nd - 15th August 2025',
      participants: 150,
      locations: 6,
      activities: 12
    },
    images: [
      {
        id: '1',
        filename: 'tiranga_weaves.jpg',
        title: 'Tiranga Weaves & Threads – A Celebration of Unity in Colours',
        tagline: 'Spinning traditions, weaving patriotism',
        description: 'The official banner of the Tiranga Weaves & Threads event organized by the Sikkim Khadi & Village Industries Board and the Directorate of Handloom & Handicrafts. This public display, held from 2nd to 15th August 2025 under the Har Ghar Tiranga campaign, showcased the weaving of traditional tri-colour textiles, reflecting India\'s pride and heritage.',
        category: 'banner',
        alt: 'Tiranga Weaves & Threads event banner'
      },
      {
        id: '2',
        filename: 'chewang_t_bhutia_certificate.jpg',
        title: 'Honouring the Spirit of Participation',
        tagline: 'Proudly raising the Tricolour, proudly raising the nation',
        description: 'A Certificate of Appreciation presented by the Ministry of Culture, Government of India, to Chewang T Bhutia for actively participating in the Har Ghar Tiranga Campaign 2025. The award recognizes dedication towards fostering a personal connection with the National Flag.',
        category: 'certificate',
        alt: 'Certificate of Appreciation for Chewang T Bhutia'
      },
      {
        id: '3',
        filename: 'tiranga.jpg',
        title: 'The Tricolour Welcome',
        tagline: 'Every door opens to patriotism',
        description: 'A vibrant display of the Indian National Flag adorning the entrance, setting the tone for the Tiranga Weaves & Threads celebration. The arrangement of flags reflects the campaign\'s mission – to see the Tiranga in every home and heart.',
        category: 'venue',
        alt: 'Tricolour display at venue entrance'
      },
      {
        id: '4',
        filename: 'tiranga2.jpg',
        title: 'From Threads to Pride – Weaving the Tiranga',
        tagline: 'Where every thread tells a story of freedom',
        description: 'Skilled artisans in Sikkim weaving the Indian National Flag using traditional handloom methods. Part of the Tiranga Weaves & Threads showcase, this moment captures the blend of cultural heritage and national pride.',
        category: 'activity',
        alt: 'Traditional weaving of the Tiranga'
      },
      {
        id: '5',
        filename: 'tiranga_weaves2.jpg',
        title: 'Where Tradition Meets Patriotism',
        tagline: 'Crafting heritage, celebrating freedom',
        description: 'The venue of the Tiranga Weaves & Threads program, adorned with tricolour decor and traditional Sikkimese art. Visitors entered to witness live weaving demonstrations and displays, connecting local craft to the national spirit.',
        category: 'venue',
        alt: 'Event venue with tricolour decorations'
      },
      {
        id: '6',
        filename: 'tshering_dorjee_certificate.jpg',
        title: 'Recognition of Patriotism',
        tagline: 'Every citizen, a flag bearer of pride',
        description: 'The Ministry of Culture honours Tshering Dorjee Lama for successful participation in the Har Ghar Tiranga Campaign 2025, underlining the importance of every individual\'s role in keeping the Tiranga flying high.',
        category: 'certificate',
        alt: 'Certificate for Tshering Dorjee Lama'
      }
    ]
  };

  getExhibitionData(): Observable<ExhibitionData> {
    return of(this.exhibitionData);
  }

  getExhibitionImages(): Observable<ExhibitionImage[]> {
    return of(this.exhibitionData.images);
  }

  getImagesByCategory(category: string): Observable<ExhibitionImage[]> {
    const filteredImages = this.exhibitionData.images.filter(img => img.category === category);
    return of(filteredImages);
  }

  getFeaturedImage(): Observable<ExhibitionImage> {
    // Return the banner image for home page card
    const featuredImage = this.exhibitionData.images.find(img => img.category === 'banner') || this.exhibitionData.images[0];
    return of(featuredImage);
  }
}
