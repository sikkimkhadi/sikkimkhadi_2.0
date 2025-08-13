import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface PMEGPCarouselImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category?: string;
}

export interface PMEGPPerformanceData {
  year: string;
  projectsReceived: number;
  projectsSanctioned: number;
  totalValue: number;
  totalSubsidy: number;
}

export interface PMEGPObjective {
  id: number;
  title: string;
  description: string;
}

export interface PMEGPSection {
  id: string;
  title: string;
  content: Array<{
    type: 'paragraph' | 'list' | 'ordered-list' | 'table';
    text?: string;
    items?: string[];
    headers?: string[];
    rows?: string[][];
  }>;
}

export interface PMEGPData {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  desktopCarouselImages: PMEGPCarouselImage[];
  mobileCarouselImages: PMEGPCarouselImage[];
  performanceData: PMEGPPerformanceData[];
  objectives: PMEGPObjective[];
  sections: PMEGPSection[];
  statistics: {
    totalProjects: number;
    totalSanctioned: number;
    totalValue: number;
    totalSubsidy: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class PMEGPService {
  private pmegpData: PMEGPData = {
    title: "Prime Minister's Employment Generation Programme",
    subtitle: "Empowering Entrepreneurs, Creating Employment",
    description: "Government of India's credit linked subsidy programme for generating employment opportunities in rural and urban areas through micro enterprises.",
    heroImage: "assets/pmegp/amm.png",
    desktopCarouselImages: [
      {
        id: 'desk1',
        src: 'assets/pmegp/deskCl/img1.jpg',
        alt: 'PMEGP Training Session',
        caption: 'Entrepreneurship Development Programme',
        category: 'Training'
      },
      {
        id: 'desk2',
        src: 'assets/pmegp/deskCl/img2.jpg',
        alt: 'PMEGP Beneficiary Workshop',
        caption: 'Skill Development Workshop',
        category: 'Workshop'
      },
      {
        id: 'desk3',
        src: 'assets/pmegp/deskCl/img3.jpg',
        alt: 'PMEGP Unit Inauguration',
        caption: 'New Unit Inauguration',
        category: 'Inauguration'
      },
      {
        id: 'desk4',
        src: 'assets/pmegp/deskCl/img4.jpg',
        alt: 'PMEGP Success Story',
        caption: 'Successful Enterprise',
        category: 'Success'
      },
      {
        id: 'desk5',
        src: 'assets/pmegp/deskCl/img5.jpg',
        alt: 'PMEGP Documentation',
        caption: 'Application Process',
        category: 'Process'
      },
      {
        id: 'desk6',
        src: 'assets/pmegp/deskCl/img6.jpg',
        alt: 'PMEGP Meeting',
        caption: 'Stakeholder Meeting',
        category: 'Meeting'
      },
      {
        id: 'desk7',
        src: 'assets/pmegp/deskCl/img7.jpg',
        alt: 'PMEGP Verification',
        caption: 'Unit Verification',
        category: 'Verification'
      },
      {
        id: 'desk8',
        src: 'assets/pmegp/deskCl/img8.jpg',
        alt: 'PMEGP Beneficiary',
        caption: 'Beneficiary Interview',
        category: 'Interview'
      },
      {
        id: 'desk9',
        src: 'assets/pmegp/deskCl/img9.jpg',
        alt: 'PMEGP Training',
        caption: 'Technical Training',
        category: 'Training'
      },
      {
        id: 'desk10',
        src: 'assets/pmegp/deskCl/img10.jpg',
        alt: 'PMEGP Certificate',
        caption: 'Certificate Distribution',
        category: 'Certificate'
      },
      {
        id: 'desk11',
        src: 'assets/pmegp/deskCl/img11.jpg',
        alt: 'PMEGP Exhibition',
        caption: 'Product Exhibition',
        category: 'Exhibition'
      },
      {
        id: 'desk12',
        src: 'assets/pmegp/deskCl/img12.jpg',
        alt: 'PMEGP Awards',
        caption: 'Excellence Awards',
        category: 'Awards'
      },
      {
        id: 'desk13',
        src: 'assets/pmegp/deskCl/img13.jpg',
        alt: 'PMEGP Review',
        caption: 'Performance Review',
        category: 'Review'
      }
    ],
    mobileCarouselImages: [
      {
        id: 'mob1',
        src: 'assets/pmegp/mobCl/img1.jpg',
        alt: 'PMEGP Mobile Training',
        caption: 'Mobile Training Session',
        category: 'Training'
      },
      {
        id: 'mob2',
        src: 'assets/pmegp/mobCl/img2.jpg',
        alt: 'PMEGP Mobile Workshop',
        caption: 'Mobile Workshop',
        category: 'Workshop'
      },
      {
        id: 'mob3',
        src: 'assets/pmegp/mobCl/img3.jpg',
        alt: 'PMEGP Mobile Unit',
        caption: 'Mobile Unit Visit',
        category: 'Visit'
      },
      {
        id: 'mob4',
        src: 'assets/pmegp/mobCl/img4.jpg',
        alt: 'PMEGP Mobile Success',
        caption: 'Mobile Success Story',
        category: 'Success'
      },
      {
        id: 'mob5',
        src: 'assets/pmegp/mobCl/img5.jpg',
        alt: 'PMEGP Mobile Process',
        caption: 'Mobile Application Process',
        category: 'Process'
      },
      {
        id: 'mob6',
        src: 'assets/pmegp/mobCl/img6.jpg',
        alt: 'PMEGP Mobile Meeting',
        caption: 'Mobile Meeting',
        category: 'Meeting'
      }
    ],
    performanceData: [
      {
        year: '2019-20',
        projectsReceived: 37,
        projectsSanctioned: 20,
        totalValue: 135.77,
        totalSubsidy: 47.52
      },
      {
        year: '2020-21',
        projectsReceived: 86,
        projectsSanctioned: 32,
        totalValue: 275.92,
        totalSubsidy: 96.57
      },
      {
        year: '2021-22',
        projectsReceived: 83,
        projectsSanctioned: 49,
        totalValue: 381.97,
        totalSubsidy: 133.69
      },
      {
        year: '2022-23',
        projectsReceived: 319,
        projectsSanctioned: 142,
        totalValue: 992.71,
        totalSubsidy: 347.45
      },
      {
        year: '2023-24',
        projectsReceived: 856,
        projectsSanctioned: 476,
        totalValue: 4853.8,
        totalSubsidy: 1698.83
      }
    ],
    objectives: [
      {
        id: 1,
        title: 'Employment Generation',
        description: 'To generate employment opportunities in rural as well as urban areas through setting up of new self-employment ventures/projects/micro enterprises.',
        icon: 'employment'
      },
      {
        id: 2,
        title: 'Rural-Urban Integration',
        description: 'To bring together widely dispersed rural and urban unemployed youth and give them self-employment opportunities at their place.',
        icon: 'integration'
      },
      {
        id: 3,
        title: 'Wage Capacity Building',
        description: 'To increase the wage earning capacity of workers and contribute to increase in the growth rate of rural and urban employment.',
        icon: 'skills'
      }
    ],
    sections: [
      {
        id: 'introduction',
        title: '1. Introduction',
        content: [
          {
            type: 'paragraph',
            text: 'Government of India has introduced a credit linked subsidy programme called Prime Minister\'s Employment Generation Programme (PMEGP). The essence of the programme is generation of employment opportunities through support in establishment of micro enterprises, which will be tiny hubs of employment. These micro enterprises can be in the form of small factories, production units, trade, shops and service sectors in rural as well as urban areas.'
          },
          {
            type: 'paragraph',
            text: 'PMEGP is a central sector scheme and a flagship programme of the Government of India. In Sikkim, the scheme is being implemented through the Sikkim Khadi and Village Industries Board (SKVIB), Deorali, Khadi & Village Industries Commission (KVIC) State Office, and the District Industries Centres (DIC) under the Commerce & Industries Department.'
          },
          {
            type: 'paragraph',
            text: 'Government subsidy under the scheme will be routed to the identified banks for eventual distribution to the beneficiaries/entrepreneurs in their bank accounts.'
          }
          'The maximum cost of the project/unit admissible under Business/Service Sector is Rs. 20.00 lakhs.',
          'The balance amount of the total project cost (excluding beneficiary\'s own contribution) will be provided by Banks as term loan.',
          'Normal rate of interest will be charged on the loan component and the repayment period will range from 3 to 7 years.',
          'If the total project cost exceeds Rs. 50 lakhs or Rs. 20 lakhs for Manufacturing and Service/Business sector respectively, the balance amount may be provided by banks without any Government subsidy.'
        ]
      }
    ]
  },
  {
    id: 'eligibility',
    title: '5. Eligibility Conditions of Beneficiaries',
    content: [
      {
        type: 'ordered-list',
        items: [
          'Any individual, above 18 years of age.',
          'There will be no income ceiling for assistance for setting up projects under PMEGP.',
          'For setting up of project costing above Rs. 10 lakh in the manufacturing sector and above Rs. 5 lakh in the business/service sector, the beneficiaries should possess at least VIII standard pass educational qualification.',
          'Assistance under the Scheme is available only for new projects sanctioned specifically under the PMEGP.',
          'Self Help Groups (including those belonging to BPL provided that they have not availed benefits under any other scheme) are also eligible for assistance under PMEGP.',
          'Institutions registered under Societies Registration Act, 1860.',
          'Production Co-operative Societies.',
          'Charitable Trusts.'
        ]
      },
      {
        id: 'application_process',
        title: 'Application Process',
        type: 'ordered-list',
        content: 'The application process for PMEGP involves the following steps:',
        items: [
          'Online application through the official PMEGP portal.',
          'Submission of required documents including project report.',
          'Scrutiny and appraisal by SKVIB.',
          'Forwarding to concerned bank for credit decision.',
          'Bank sanction and loan disbursement.',
          'Mandatory Entrepreneurship Development Programme (EDP).',
          'Project implementation and monitoring.'
        ]
      }
    ],
    statistics: {
      totalProjects: 1381,
      totalSanctioned: 719,
      totalValue: 6639.17,
      totalSubsidy: 2324.06
    }
  };

  getPMEGPData(): Observable<PMEGPData> {
    return of(this.pmegpData);
  }

  getDesktopCarouselImages(): Observable<PMEGPCarouselImage[]> {
    return of(this.pmegpData.desktopCarouselImages);
  }

  getMobileCarouselImages(): Observable<PMEGPCarouselImage[]> {
    return of(this.pmegpData.mobileCarouselImages);
  }

  getPerformanceData(): Observable<PMEGPPerformanceData[]> {
    return of(this.pmegpData.performanceData);
  }

  getObjectives(): Observable<PMEGPObjective[]> {
    return of(this.pmegpData.objectives);
  }

  getSections(): Observable<PMEGPSection[]> {
    return of(this.pmegpData.sections);
  }

  getStatistics(): Observable<any> {
    return of(this.pmegpData.statistics);
  }
}
