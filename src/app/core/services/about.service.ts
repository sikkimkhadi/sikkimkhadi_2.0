import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AboutData, BoardMember, Objective, AboutSection } from '../models/about.interface';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private readonly aboutData: AboutData = {
    introduction: {
      id: 'intro',
      title: 'Introduction',
      content: 'Sikkim Khadi & Village Industries Board (SKVIB) is an autonomous body of Government of Sikkim under the Commerce & Industries Department. While it was established in 1963, the Sikkim Khadi & Village Industries Board Act of 1996 covers its functions and objectives.',
      type: 'introduction'
    },
    objectives: [
      {
        id: 'obj-1',
        title: 'Social Objective',
        description: 'Generating employment to the rural artisans in the field of khadi and village industries',
        icon: '👥'
      },
      {
        id: 'obj-2',
        title: 'Economic Objective',
        description: 'Producing saleable Khadi & village industries goods',
        icon: '💰'
      },
      {
        id: 'obj-3',
        title: 'Community Development',
        description: 'Creating self reliance amongst the people and building up of a strong rural community spirit',
        icon: '🤝'
      },
      {
        id: 'obj-4',
        title: 'Government Schemes',
        description: 'Implementation of government schemes targeting rural employment generation',
        icon: '🏛️'
      },
      {
        id: 'obj-5',
        title: 'Training & Support',
        description: 'Impart training and support in establishment of khadi institutions, societies and village industries units',
        icon: '🎓'
      }
    ],
    boardMembers: {
      nonOfficial: [
        {
          id: 'no-1',
          name: 'Smt. Chung Chung Bhutia',
          position: 'Chairperson',
          category: 'non-official'
        },
        {
          id: 'no-2',
          name: 'Dr. Kalpana Pradhan',
          category: 'non-official'
        },
        {
          id: 'no-3',
          name: 'Smt. Diki Lhamu Lepcha',
          category: 'non-official'
        },
        {
          id: 'no-4',
          name: 'Smt. Sonam Doma Lepcha',
          category: 'non-official'
        },
        {
          id: 'no-5',
          name: 'Shri Yanten Dong',
          category: 'non-official'
        }
      ],
      official: [
        {
          id: 'of-1',
          name: 'Director, Commerce and Industries',
          position: 'Government of Sikkim',
          category: 'official'
        },
        {
          id: 'of-2',
          name: 'Joint Secretary, Planning and Development Department',
          position: 'Government of Sikkim',
          category: 'official'
        },
        {
          id: 'of-3',
          name: 'Joint Secretary, Finance Department',
          position: 'Government of Sikkim',
          category: 'official'
        },
        {
          id: 'of-4',
          name: 'One representative from Khadi and Village Industries Commission',
          position: 'State Office, Gangtok',
          category: 'official'
        },
        {
          id: 'of-5',
          name: 'Chief Executive Officer',
          position: 'Sikkim Khadi and Village Industries Board',
          category: 'official'
        }
      ]
    },
    skvibAct: {
      title: 'SKVIB ACT 1996',
      description: 'The Sikkim Khadi and Village Industries Board Act of 1996 defines the legal framework, functions, and objectives of SKVIB.',
      pdfUrl: 'assets/pdf/SKVIB_ACT_1996.pdf',
      downloadText: 'Download SKVIB Act 1996 PDF'
    },
    establishedYear: 1963,
    actYear: 1996
  };

  /**
   * Get complete about data
   */
  getAboutData(): Observable<AboutData> {
    return of(this.aboutData);
  }

  /**
   * Get introduction section
   */
  getIntroduction(): Observable<AboutSection> {
    return of(this.aboutData.introduction);
  }

  /**
   * Get objectives
   */
  getObjectives(): Observable<Objective[]> {
    return of(this.aboutData.objectives);
  }

  /**
   * Get board members by category
   */
  getBoardMembers(category?: 'non-official' | 'official'): Observable<BoardMember[]> {
    if (category === 'non-official') {
      return of(this.aboutData.boardMembers.nonOfficial);
    } else if (category === 'official') {
      return of(this.aboutData.boardMembers.official);
    }
    return of([...this.aboutData.boardMembers.nonOfficial, ...this.aboutData.boardMembers.official]);
  }

  /**
   * Get SKVIB Act information
   */
  getSkvibActInfo(): Observable<AboutData['skvibAct']> {
    return of(this.aboutData.skvibAct);
  }
}
