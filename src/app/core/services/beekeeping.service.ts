import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { 
  BeekeepingData, 
  BeekeepingSection, 
  BeekeepingObjective, 
  BeekeepingActivity,
  BeekeepingStatistic 
} from '../models/beekeeping.interface';

@Injectable({
  providedIn: 'root'
})
export class BeekeepingService {
  private beekeepingData: BeekeepingData = {
    heroTitle: 'Bee Keeping in Sikkim',
    heroSubtitle: 'Sustainable honey production and ecological conservation through traditional and modern beekeeping practices',
    sections: [
      {
        id: 'background',
        title: 'Background',
        type: 'text',
        content: 'Bee keeping is the rearing of bees for the purpose of obtaining honey. Honeybees live together in a highly organized group called a colony. When bees are managed in hives, each hive houses a single colony. Professionally it is taken up under management practices for obtaining not only honey but also for other hive products like bee wax, pollen, royal jelly and bee venom, which has many industrial uses with high market demand.',
        images: [
          { id: 'bg1', src: 'assets/beekeeping/6.jpg', alt: 'Beekeeping hives' },
          { id: 'bg2', src: 'assets/beekeeping/7.jpg', alt: 'Honey extraction process' }
        ]
      },
      {
        id: 'introduction',
        title: 'Introduction',
        type: 'list',
        content: 'Beekeeping is a significant sustainable and environmentally sound activity with multiple benefits:',
        listItems: [
          'Beekeeping is a significant sustainable, and environmental sound activity involving integration of forestry, social forestry and Agricultural supporting activity since it provides nutritional, economic, and ecological balance, while providing employment and income.',
          'Beekeeping is a rewarding occupation yet yields profits from the 1st year of operation. It is a skill industry having the potential to offer direct employment to lakhs of people especially hill dwellers, tribal and unemployed youth and farmers.',
          'Beekeeping has been carried out across many generations in India. It plays a vital role in the livelihoods of rural communities in five dynamic ways: Income generation, Food and medicine value, Agricultural support through pollination, Forest conservation, and Supplementary income.'
        ],
        images: [
          { id: 'intro1', src: 'assets/beekeeping/9.jpg', alt: 'Traditional beekeeping' },
          { id: 'intro2', src: 'assets/beekeeping/4.jpg', alt: 'Modern bee farm' }
        ]
      },
      {
        id: 'ecosystem-role',
        title: 'Role of Bee-Keeping in Agriculture and the Eco-System',
        type: 'text',
        content: 'Bees and beekeeping not only yield direct and tangible benefits but also play a paramount role as essential pollinators for agriculture and natural ecosystems. While gathering nectar and pollen for honey production, bees engage in cross-pollination, contributing to over 90% of the world\'s flowering plants. This positions them as nature\'s foremost agriculturists and invaluable allies to farmers. Beyond bolstering productivity, bee pollination supports forestry conservation, maintains biodiversity, and ensures ecosystem functionality.',
        images: [
          { id: 'eco1', src: 'assets/beekeeping/5.jpg', alt: 'Bee pollination' },
          { id: 'eco2', src: 'assets/beekeeping/8.jpg', alt: 'Ecosystem benefits' }
        ]
      },
      {
        id: 'honey-production',
        title: 'Present Scenario of Honey Production',
        type: 'mixed',
        content: 'India is among the major honey exporting countries with significant global presence.',
        listItems: [
          'India is among the major honey exporting countries. The major markets for Indian honey are Germany, USA, UK, Japan, France, Italy, Spain etc.',
          'India is at 8th position in the world for honey production.',
          'Honey production is estimated at 35,000 MTs for 2005-06 which has now increased to the estimated 95,000 MTs in 2017-18.'
        ],
        images: [
          { id: 'prod1', src: 'assets/beekeeping/2.jpg', alt: 'Honey processing plant' },
          { id: 'prod2', src: 'assets/beekeeping/3.jpg', alt: 'Packaged honey products' }
        ]
      },
      {
        id: 'sikkim-context',
        title: 'Bee Keeping in the Context of Sikkim',
        type: 'text',
        content: 'Sikkim, primarily an agricultural state, has a deeply rooted tradition of beekeeping, especially within rural households, where it has been practiced for generations as a supplementary occupation. The state\'s rich floral resources and large forest coverage area give ample scope for bee-farming to be taken up on a large scale. In recent times, there has been a notable resurgence of interest in beekeeping, driven by the growing recognition of honey as an organic product with a niche and premium market.'
      },
      {
        id: 'skvib-role',
        title: 'Role of SKVIB in Development of Bee-Keeping Program',
        type: 'text',
        content: 'SKVIB plays a pivotal role in the advancement of beekeeping programs aimed at enhancing the propagation of wild honey. The organization is actively involved in conducting awareness programs, providing beekeeping training, and manufacturing, sales and distribution of bee boxes across all districts, contributing to the widespread adoption of beekeeping practices.'
      }
    ],
    objectives: [
      { id: 'obj1', text: 'Utilization of available natural resources', icon: '🌿' },
      { id: 'obj2', text: 'Creating sustainable employments', icon: '💼' },
      { id: 'obj3', text: 'Providing supplementary income for farmers', icon: '💰' },
      { id: 'obj4', text: 'Adopting scientific Bee Management practices', icon: '🔬' },
      { id: 'obj5', text: 'Creating awareness about Honey and other Hive Products', icon: '🍯' },
      { id: 'obj6', text: 'Creating awareness about the benefits of beekeeping in cross pollination', icon: '🌸' },
      { id: 'obj7', text: 'Developing linkages with like minded organizations', icon: '🤝' }
    ],
    activities: [
      {
        id: 'act1',
        title: 'Awareness Programs',
        description: 'Officers of SKVIB engage in conducting awareness programs within rural communities to impart knowledge about the significance of beekeeping.',
        icon: '📢'
      },
      {
        id: 'act2',
        title: 'Training Programs',
        description: 'Strategic placement of applicants in various institutions with stipends, daily allowances, and comprehensive coverage of accommodation and training fees.',
        icon: '🎓'
      },
      {
        id: 'act3',
        title: 'Bee Farm Operations',
        description: 'Opening of a bee farm in Aho-Yangtam Centre to implement best practices and provide practical training to farmers.',
        icon: '🏭'
      },
      {
        id: 'act4',
        title: 'Equipment Manufacturing',
        description: 'Manufacture of modern Bee-boxes using suitable local timbers and extractors for distribution.',
        icon: '🔧'
      },
      {
        id: 'act5',
        title: 'Sales & Distribution',
        description: 'Sales of Beekeeping equipment like Bee-boxes, extractors and other key tools to support beekeepers.',
        icon: '🛒'
      },
      {
        id: 'act6',
        title: 'Knowledge Resources',
        description: 'Providing handbook on beekeeping in Nepali language with modern and scientific techniques during seminars.',
        icon: '📚'
      }
    ],
    statistics: [
      { id: 'stat1', value: '8th', label: 'Global Ranking', description: 'India\'s position in world honey production' },
      { id: 'stat2', value: '95,000', label: 'MTs Production', description: 'Estimated honey production in 2017-18' },
      { id: 'stat3', value: '90%', label: 'Pollination Impact', description: 'Flowering plants benefiting from bee pollination' },
      { id: 'stat4', value: '100+', label: 'Farmers Trained', description: 'Beekeepers trained through SKVIB programs' }
    ]
  };

  constructor() { }

  /**
   * Get all beekeeping data
   */
  getBeekeepingData(): Observable<BeekeepingData> {
    return of(this.beekeepingData);
  }

  /**
   * Get beekeeping sections
   */
  getSections(): Observable<BeekeepingSection[]> {
    return of(this.beekeepingData.sections);
  }

  /**
   * Get beekeeping objectives
   */
  getObjectives(): Observable<BeekeepingObjective[]> {
    return of(this.beekeepingData.objectives);
  }

  /**
   * Get beekeeping activities
   */
  getActivities(): Observable<BeekeepingActivity[]> {
    return of(this.beekeepingData.activities);
  }

  /**
   * Get beekeeping statistics
   */
  getStatistics(): Observable<BeekeepingStatistic[]> {
    return of(this.beekeepingData.statistics);
  }

  /**
   * Get section by ID
   */
  getSectionById(id: string): Observable<BeekeepingSection | undefined> {
    const section = this.beekeepingData.sections.find(s => s.id === id);
    return of(section);
  }
}
