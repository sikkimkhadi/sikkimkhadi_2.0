import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface PMEGPCarouselImage {
  id: string;
  src: string;
  alt: string;
  title: string;
}

export interface PMEGPPerformanceData {
  year: string;
  projectsReceived: number;
  projectsSanctioned: number;
  totalValue: number;
  totalSubsidy: number;
}

export interface PMEGPStatistic {
  label: string;
  value: string;
  icon: string;
}

export interface PMEGPObjective {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface PMEGPTableRow {
  isHeaderRow?: boolean; // true if this is a sub-header
  category: string;
  beneficiaryContribution?: string;
  rateOfSubsidy?: {
    urban?: string;
    rural?: string;
  };
}

export interface ContentSection {
  type: 'paragraph' | 'list' | 'ordered-list' | 'table';
  text?: string;
  items?: string[];
  tableHeaders?: string[];
  subHeaders?: string[];
  tableRows?: PMEGPTableRow[];
}

export interface PMEGPSection {
  id: string;
  title: string;
  content: ContentSection[];
}

export interface PMEGPData {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  statistics: PMEGPStatistic[];
  objectives: PMEGPObjective[];
  sections: PMEGPSection[];
  performanceData: PMEGPPerformanceData[];
  desktopCarouselImages: PMEGPCarouselImage[];
  mobileCarouselImages: PMEGPCarouselImage[];
  totalProjects: number;
  totalSanctioned: number;
  totalValue: number;
  totalSubsidy: number;
}

@Injectable({
  providedIn: 'root'
})
export class PMEGPService {

  private pmegpData: PMEGPData = {
    title: 'Prime Minister\'s Employment Generation Programme',
    subtitle: 'Empowering entrepreneurs across Sikkim',
    description: 'Government of India has introduced a credit linked subsidy programme called Prime Minister\'s Employment Generation Programme (PMEGP). The essence of the programme is generation of employment opportunities through support in establishment of micro enterprises, which will be tiny hubs of employment.',
    heroImage: '/assets/pmegp/hero-bg.jpg',
    
    totalProjects: 1381,
    totalSanctioned: 719,
    totalValue: 6639.17,
    totalSubsidy: 2323.06,
    
    statistics: [
      { label: 'Total Projects Sanctioned', value: '719', icon: 'projects' },
      { label: 'Total Investment', value: '₹66.4 Cr', icon: 'investment' },
      { label: 'Employment Generated', value: '5,752', icon: 'employment' },
      { label: 'Success Rate', value: '52.1%', icon: 'success' }
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

    performanceData: [
      { year: '2019-20', projectsReceived: 37, projectsSanctioned: 20, totalValue: 135.77, totalSubsidy: 47.52 },
      { year: '2020-21', projectsReceived: 86, projectsSanctioned: 32, totalValue: 275.92, totalSubsidy: 96.57 },
      { year: '2021-22', projectsReceived: 83, projectsSanctioned: 49, totalValue: 381.97, totalSubsidy: 133.69 },
      { year: '2022-23', projectsReceived: 319, projectsSanctioned: 142, totalValue: 992.71, totalSubsidy: 347.45 },
      { year: '2023-24', projectsReceived: 856, projectsSanctioned: 476, totalValue: 4853.8, totalSubsidy: 1698.83 }
    ],

    desktopCarouselImages: [
      { id: 'desk-1', src: '/assets/pmegp/carousel/desktop/1.jpg', alt: 'PMEGP Success Story 1', title: 'Micro Enterprise Development' },
      { id: 'desk-2', src: '/assets/pmegp/carousel/desktop/2.jpg', alt: 'PMEGP Success Story 2', title: 'Rural Employment Generation' },
      { id: 'desk-3', src: '/assets/pmegp/carousel/desktop/3.jpg', alt: 'PMEGP Success Story 3', title: 'Skill Development Program' },
      { id: 'desk-4', src: '/assets/pmegp/carousel/desktop/4.jpg', alt: 'PMEGP Success Story 4', title: 'Women Entrepreneurship' },
      { id: 'desk-5', src: '/assets/pmegp/carousel/desktop/5.jpg', alt: 'PMEGP Success Story 5', title: 'Traditional Crafts Revival' },
      { id: 'desk-6', src: '/assets/pmegp/carousel/desktop/6.jpg', alt: 'PMEGP Success Story 6', title: 'Technology Integration' },
      { id: 'desk-7', src: '/assets/pmegp/carousel/desktop/7.jpg', alt: 'PMEGP Success Story 7', title: 'Market Linkage Support' },
      { id: 'desk-8', src: '/assets/pmegp/carousel/desktop/8.jpg', alt: 'PMEGP Success Story 8', title: 'Financial Inclusion' },
      { id: 'desk-9', src: '/assets/pmegp/carousel/desktop/9.jpg', alt: 'PMEGP Success Story 9', title: 'Youth Empowerment' },
      { id: 'desk-10', src: '/assets/pmegp/carousel/desktop/10.jpg', alt: 'PMEGP Success Story 10', title: 'Sustainable Development' },
      { id: 'desk-11', src: '/assets/pmegp/carousel/desktop/11.jpg', alt: 'PMEGP Success Story 11', title: 'Innovation Hub' },
      { id: 'desk-12', src: '/assets/pmegp/carousel/desktop/12.jpg', alt: 'PMEGP Success Story 12', title: 'Community Development' },
      { id: 'desk-13', src: '/assets/pmegp/carousel/desktop/13.jpg', alt: 'PMEGP Success Story 13', title: 'Economic Growth' }
    ],

    mobileCarouselImages: [
      { id: 'mob-1', src: '/assets/pmegp/carousel/mobile/1.jpg', alt: 'PMEGP Mobile 1', title: 'Enterprise Success' },
      { id: 'mob-2', src: '/assets/pmegp/carousel/mobile/2.jpg', alt: 'PMEGP Mobile 2', title: 'Rural Development' },
      { id: 'mob-3', src: '/assets/pmegp/carousel/mobile/3.jpg', alt: 'PMEGP Mobile 3', title: 'Skill Training' },
      { id: 'mob-4', src: '/assets/pmegp/carousel/mobile/4.jpg', alt: 'PMEGP Mobile 4', title: 'Women Empowerment' },
      { id: 'mob-5', src: '/assets/pmegp/carousel/mobile/5.jpg', alt: 'PMEGP Mobile 5', title: 'Traditional Arts' },
      { id: 'mob-6', src: '/assets/pmegp/carousel/mobile/6.jpg', alt: 'PMEGP Mobile 6', title: 'Modern Technology' }
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
        ]
      },
      {
        id: 'objectives',
        title: '2. Objectives of the Scheme',
        content: [
          {
            type: 'ordered-list',
            items: [
              'To generate employment opportunities in rural as well as urban areas of the country through setting up of new self-employment ventures/projects/micro enterprises. By providing support to one unemployed youth to become an entrepreneur, he/she will turn into an employer, providing jobs to many.',
              'To bring together widely dispersed rural and urban unemployed youth and give them self-employment opportunities to the extent possible at their place, so as to help arrest migration of rural youth to urban areas.',
              'To increase the wage earning capacity of workers and contribute to increase in the growth rate of rural and urban employment.'
            ]
          }
        ]
      },
      {
        id: 'assistance',
        title: '3. Nature of Assistance',
        content: [
          {
            type: 'paragraph',
            text: 'Assistance in the form of subsidy on the total project cost is given at the following rates:'
          },
          {
            type: 'table',
            tableHeaders: [
              'Categories of beneficiaries under PMEGP',
              "Beneficiary's contribution",
              'Rate of Subsidy (of project cost)'
            ],
            subHeaders: ['URBAN', 'RURAL'],
            tableRows: [
              {
                isHeaderRow: true,
                category: 'Area (location of project/unit)',
                beneficiaryContribution: '',
                rateOfSubsidy: { urban: 'URBAN', rural: 'RURAL' }
              },
              {
                category: 'All Categories including SC/ST, OBC, General, Women etc.',
                beneficiaryContribution: '05%',
                rateOfSubsidy: {
                  urban: '25%',
                  rural: '35%'
                }
              }
            ]
          }
        ]
      },
      {
        id: 'ceiling',
        title: '4. Ceiling Limit of Project Cost',
        content: [
          {
            type: 'ordered-list',
            items: [
              'The maximum cost of the project/unit admissible under Manufacturing Sector is Rs. 50.00 lakhs.',
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
          }
        ]
      },
      {
        id: 'other-eligibility',
        title: '6. Other Eligibility Conditions',
        content: [
          {
            type: 'ordered-list',
            items: [
              'Cost of the land should not be included in the Project cost. The cost of the ready built as well as long lease or rental Work-shed/Workshop can be included in the project cost subject to restricting such cost to a maximum period of 3 years only.',
              'PMEGP is applicable to all new viable micro enterprises, including Village Industries projects except activities indicated in the negative list of Village Industries. Existing/old units are not eligible.',
              'Only one person from one family is eligible for obtaining financial assistance for setting up of projects under PMEGP. The "family" includes self and spouse.'
            ]
          }
        ]
      },
      {
        id: 'documents',
        title: '7. List of Documents Required',
        content: [
          {
            type: 'ordered-list',
            items: [
              'Detailed Project Report in duplicate',
              'Copy of Aadhar Card',
              'Copy of Certificate of Identification',
              'Copy of SC/ST/OBC/Special Category certificate',
              'Educational certificate and Training certificates (if any)',
              'Copy of Trade License (if required)',
              'Population/Rural Area Certificate',
              'NOC from landlord/house owner (if applicable)',
              '2 copies of Passport-size photos',
              'PAN card'
            ]
          }
        ]
      },
      {
        id: 'application',
        title: '8. How to Apply',
        content: [
          {
            type: 'paragraph',
            text: 'The applicants are to submit their application online at <a href="https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp" target="_blank" rel="noopener noreferrer" class="external-link">https://www.kviconline.gov.in/pmegpeportal/</a> and take a printout of the application to submit to the Sikkim Khadi & Village Industries Board (SKVIB), Deorali along with the Detailed Project Report and other required documents.'
          },
          {
            type: 'paragraph',
            text: 'Applicants who have difficulty in filling up the form online may visit the SKVIB office at Deorali for assistance.'
          },
          {
            type: 'paragraph',
            text: 'There will be two separate online application forms for individuals and institutional applicants available on the portal.'
          },
          {
            type: 'list',
            items: [
              'Applicants will be provided with User ID and Password at the time of initial registration for tracking their application.',
              'Applicant will be provided with application ID on final submission.',
              'Applicant\'s Aadhaar number would be preferred.',
              'The one-page online application form allows data saving at any stage.',
              'Guidelines for filling each column are provided within the application form.',
              'A list of FAQs about the scheme and online application is provided. A short video tutorial is also available.'
            ]
          }
        ]
      },
      {
        id: 'identification',
        title: '9. Identification of Beneficiaries',
        content: [
          {
            type: 'list',
            items: [
              'SKVIB will scrutinize the application, DPR, and other required documents.',
              'An interaction with the applicant (in person or telephonic) will be conducted to carry out corrections if needed.',
              'The application will then be forwarded online to the concerned bank for credit decision.'
            ]
          }
        ]
      },
      {
        id: 'edp',
        title: '10. Entrepreneurship Development Programme (EDP)',
        content: [
          {
            type: 'paragraph',
            text: 'Applicants whose loan applications are sanctioned by the bank must undergo Entrepreneurship Development Programme (EDP), which is a short training spanning 5 to 10 days. The objective is to provide orientation in managerial and operational functions such as finance, production, marketing, enterprise management, banking formalities, bookkeeping, etc.'
          },
          {
            type: 'paragraph',
            text: 'EDP is mandatory for all PMEGP beneficiaries, unless they have already completed a similar programme earlier (minimum two weeks). It can be conducted offline or online.'
          }
        ]
      },
      {
        id: 'verification',
        title: '11. Physical Verification of PMEGP Units',
        content: [
          {
            type: 'paragraph',
            text: 'A 100% physical verification of each unit set up under PMEGP will be carried out after 3 years of project implementation, either through State Government agencies or outsourced professional institutes. If a unit is found non-functional/closed during inspection, the subsidy will be recovered from the bank.'
          }
        ]
      },
      {
        id: 'negative-list',
        title: '12. Negative List of Activities',
        content: [
          {
            type: 'paragraph',
            text: 'These activities are not permitted under PMEGP:'
          },
          {
            type: 'ordered-list',
            items: [
              'Any industry/business connected with meat (slaughtering), processing, canning, or serving it as food; production or sale of intoxicants (beedi, pan, cigar, cigarette, etc.); hotels or dhabas serving liquor; production of tobacco products.',
              'Any business connected with cultivation of crops/plantations like tea, coffee, rubber; sericulture; horticulture; floriculture. (Value addition is allowed).',
              'Manufacturing of polythene carry bags less than 70 microns or containers made of recycled plastic for food storage, or any other environmentally harmful item.'
            ]
          }
        ]
      }
    ]
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

  getStatistics(): Observable<PMEGPStatistic[]> {
    return of(this.pmegpData.statistics);
  }
}
