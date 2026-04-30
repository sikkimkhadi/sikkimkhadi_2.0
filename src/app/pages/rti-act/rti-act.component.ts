import { Component, OnInit, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

export interface RtiEmployee {
  sl: number;
  name: string;
  designation: string;
  duties: string;
  power: string;
  basicPay: string;
  contactNo: string;
}

export interface RtiManual {
  id: number;
  title: string;
  shortTitle: string;
  content: string;
  type: 'static' | 'employee-duties' | 'employee-pay' | 'employee-contact' | 'pio';
}

@Component({
  selector: 'app-rti-act',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './rti-act.component.html',
  styleUrl: './rti-act.component.css'
})
export class RTIActComponent implements OnInit {

  employees = signal<RtiEmployee[]>([]);
  activeManuals = signal<Set<number>>(new Set([1]));
  searchQuery = signal<string>('');

  readonly manuals: RtiManual[] = [
    {
      id: 1,
      shortTitle: 'Organisation & Function',
      title: 'Manual 1 — Organisation, Functions & Duties',
      type: 'static',
      content: `
        <h4>About Sikkim Khadi &amp; Village Industries Board (SKVIB)</h4>
        <p>SKVIB is an autonomous body of the Government of Sikkim under the Commerce &amp; Industries Department. Established in 1963, its functions and objectives are governed by the Sikkim Khadi &amp; Village Industries Board Act of 1966.</p>

        <h4>Objectives</h4>
        <ol>
          <li>Social objective of generation of employment to rural artisans in the field of Khadi and Village Industries.</li>
          <li>Economic objective of producing saleable Khadi &amp; Village Industries goods.</li>
          <li>The wider objective of creating self-reliance amongst the people and building up a strong rural community spirit.</li>
          <li>Implementation of government schemes targeting rural employment generation.</li>
          <li>Impart training and support in the establishment of Khadi institutions, societies and Village Industries units.</li>
        </ol>

        <h4>Mission</h4>
        <p>Creating self-reliance and building rural community spirit through sustainable Khadi and Village Industries development.</p>

        <h4>Decision-Making Process</h4>
        <p>Work items flow through the following hierarchy for approval and decision-making:</p>
        <div class="decision-chain">
          <span class="chain-node">Office Assistant</span>
          <span class="chain-arrow">→</span>
          <span class="chain-node">OS (Office Superintendent)</span>
          <span class="chain-arrow">→</span>
          <span class="chain-node">AEO (Asstt. Executive Officer)</span>
          <span class="chain-arrow">→</span>
          <span class="chain-node">DEO (Dy. Executive Officer)</span>
          <span class="chain-arrow">→</span>
          <span class="chain-node highlight">CEO (Chief Executive Officer)</span>
        </div>

        <h4>Contact Details</h4>
        <p>Sikkim Khadi &amp; Village Industries Board<br>
        Khadi Bhavan, Deorali – 737102, Gangtok, Sikkim<br>
        Phone: 03592-281810, 281221 | Fax: 03592-281221<br>
        Email: <a href="mailto:sikkimkhadi@gmail.com">sikkimkhadi@gmail.com</a></p>
      `
    },
    {
      id: 2,
      shortTitle: 'Powers & Duties of Officers',
      title: 'Manual 2 — Powers & Duties of Officers & Employees',
      type: 'employee-duties',
      content: 'Details of powers and duties of all officers and employees of SKVIB as per Annexure II.'
    },
    {
      id: 3,
      shortTitle: 'Decision-Making Procedure',
      title: 'Manual 3 — Procedure Followed in Decision-Making Process',
      type: 'static',
      content: `
        <p>All administrative decisions at SKVIB follow a structured approval chain from the initiating staff member up through the Chief Executive Officer. The decision-making process is transparent and documented at each stage:</p>
        <ul>
          <li>Proposals are initiated at the staff/officer level and put up in file form.</li>
          <li>Files move through the hierarchy: Office Assistant → OS → AEO → DEO → CEO.</li>
          <li>Financial decisions require the approval of the Chief Executive Officer.</li>
          <li>Decisions are communicated via official orders/letters.</li>
          <li>All decisions are recorded and maintained in official registers at the Head Office.</li>
        </ul>
      `
    },
    {
      id: 4,
      shortTitle: 'Norms for Discharge of Functions',
      title: 'Manual 4 — Norms Set for Discharge of Functions',
      type: 'static',
      content: `
        <p>The Board follows norms established under the Sikkim Khadi &amp; Village Industries Board Act of 1966 and circulars issued by the Government of Sikkim from time to time. Key norms include:</p>
        <ul>
          <li>Timely processing of PMEGP loan applications within prescribed time limits.</li>
          <li>Regular inspection of all Khadi production centres and outlets.</li>
          <li>Annual audit of accounts by an approved Chartered Accountant.</li>
          <li>Submission of performance reports to the Commerce &amp; Industries Department quarterly.</li>
          <li>Adherence to Government of Sikkim Service Rules for personnel matters.</li>
        </ul>
      `
    },
    {
      id: 5,
      shortTitle: 'Rules & Manuals',
      title: 'Manual 5 — Rules, Regulations, Instructions, Manuals & Records',
      type: 'static',
      content: `
        <p>The following rules, regulations and manuals govern the functioning of SKVIB:</p>
        <ul>
          <li><strong>Sikkim Khadi &amp; Village Industries Board Act of 1966</strong> — the primary legislation establishing and defining the Board's powers, functions, and objectives.</li>
          <li><strong>Service Rules of the Board</strong> — govern the conditions of service, recruitment, promotion, leave, and conduct of all employees.</li>
          <li>PMEGP (Prime Minister's Employment Generation Programme) Guidelines issued by KVIC, Government of India.</li>
          <li>Financial Rules of the Government of Sikkim.</li>
          <li>General Financial Rules (GFR) applicable to autonomous bodies.</li>
          <li>Circulars and orders issued by the Commerce &amp; Industries Department, Government of Sikkim.</li>
          <li>RTI Act, 2005 and rules made thereunder.</li>
        </ul>
        <p>Copies of these documents are available for inspection at the Head Office, Deorali, Gangtok, during office hours.</p>
      `
    },
    {
      id: 6,
      shortTitle: 'Categories of Documents',
      title: 'Manual 6 — Categories of Documents Held',
      type: 'static',
      content: `
        <p>The following categories of documents are held by SKVIB under its control and available for access per RTI Act provisions:</p>
        <ul>
          <li><strong>Personal files of employees</strong> — service books, appointment orders, promotion/transfer orders, leave records.</li>
          <li><strong>Cash books</strong> — daily cash registers and receipts.</li>
          <li><strong>Ledger books</strong> — general ledger, subsidiary ledgers for individual accounts.</li>
          <li><strong>PMEGP application records</strong> — applications received, sanctioned, disbursed, and rejected under the scheme.</li>
          <li>Production registers for each Khadi production centre.</li>
          <li>Sales registers for all Khadi outlets/Bhandars.</li>
          <li>GPF and CPF registers of employees.</li>
          <li>NOC records for loanees and applicants.</li>
          <li>Stock and inventory registers.</li>
          <li>Meeting minutes of the Board.</li>
        </ul>
      `
    },
    {
      id: 7,
      shortTitle: 'Consultation with Public',
      title: 'Manual 7 — Particulars of Arrangement for Consultation with Public',
      type: 'static',
      content: `
        <p>The Board is an autonomous body under the Government of Sikkim; public participation is sought through various industry awareness programs and PMEGP exhibitions.</p>
        <ul>
          <li>Annual Khadi &amp; Village Industries exhibitions open to the public.</li>
          <li>PMEGP entrepreneur awareness camps held across all four districts of Sikkim.</li>
          <li>Artisan training programs where community members can enroll.</li>
          <li>Feedback from customers and stakeholders at Khadi Bhandars (outlets).</li>
          <li>Grievances and suggestions may be submitted at the Head Office or via email at <a href="mailto:sikkimkhadi@gmail.com">sikkimkhadi@gmail.com</a>.</li>
        </ul>
      `
    },
    {
      id: 8,
      shortTitle: 'Boards, Councils & Committees',
      title: 'Manual 8 — Boards, Councils, Committees & Other Bodies',
      type: 'static',
      content: `
        <p>Information regarding the Boards, Councils, and Committees constituted for the purpose of SKVIB is maintained at the Head Office and updated annually. Details are available for inspection during office hours at Khadi Bhavan, Deorali, Gangtok.</p>
      `
    },
    {
      id: 9,
      shortTitle: 'Directory of Officers',
      title: 'Manual 9 — Directory of Officers & Employees',
      type: 'employee-contact',
      content: 'Contact directory for all officers and employees of SKVIB as per Annexure III.'
    },
    {
      id: 10,
      shortTitle: 'Monthly Remuneration',
      title: 'Manual 10 — Monthly Remuneration Received by Officers & Employees',
      type: 'employee-pay',
      content: 'Monthly basic pay for all officers and employees of SKVIB as per Annexure IV.'
    },
    {
      id: 11,
      shortTitle: 'Budget & Annual Programs',
      title: 'Manual 11 — Budget Allocated & Programs Being Implemented',
      type: 'static',
      content: `
        <h4>Financial Performance — FY 2024-25</h4>
        <div class="budget-stats">
          <div class="budget-card">
            <span class="budget-label">Total Sales</span>
            <span class="budget-value">₹30.71 Lakhs</span>
          </div>
          <div class="budget-card">
            <span class="budget-label">Total Production</span>
            <span class="budget-value">₹14.91 Lakhs</span>
          </div>
        </div>
        <h4>Programs Being Implemented</h4>
        <ul>
          <li><strong>PMEGP (Prime Minister's Employment Generation Programme)</strong> — facilitating loans for micro-enterprises in Sikkim.</li>
          <li><strong>Khadi Production Scheme</strong> — support to artisans across production centres in Gom, Mendogaon, Tarku, Dodak, Samdong, Turuk, Raley, and Pune.</li>
          <li><strong>Bee-Keeping Training</strong> — training rural community members in apiculture at Raley Khesey Centre.</li>
          <li>Artisan skill development and capacity-building programs.</li>
        </ul>
        <p><em>Detailed budget allocations are maintained at the Head Office and updated annually as per Government of Sikkim financial guidelines.</em></p>
      `
    },
    {
      id: 12,
      shortTitle: 'Subsidy Programs',
      title: 'Manual 12 — Manner of Execution of Subsidy Programs',
      type: 'static',
      content: `
        <p>Information on the manner of execution of subsidy programs, including PMEGP and Khadi production subsidies, is maintained at the Head Office and updated annually. Applications and eligibility criteria are available from the SPIO at the Head Office, Deorali, Gangtok.</p>
      `
    },
    {
      id: 13,
      shortTitle: 'Concessions & Permits',
      title: 'Manual 13 — Particulars of Recipients of Concessions, Permits & Authorizations',
      type: 'static',
      content: `
        <p>Information on recipients of concessions, permits, and authorizations granted by SKVIB is maintained at the Head Office and updated annually. This includes PMEGP beneficiary lists and Khadi institution certifications.</p>
      `
    },
    {
      id: 14,
      shortTitle: 'Electronic Information',
      title: 'Manual 14 — Information Available in Electronic Form',
      type: 'static',
      content: `
        <p>The following information is available in electronic form and accessible through SKVIB:</p>
        <ul>
          <li>Organization profile and product catalogue on the official website.</li>
          <li>Employee data and administrative records maintained in digital formats at the Head Office.</li>
          <li>PMEGP application data submitted via the KVIC online portal.</li>
        </ul>
        <p>Additional electronic records are maintained at the Head Office and updated annually.</p>
      `
    },
    {
      id: 15,
      shortTitle: 'Facilities for Citizens',
      title: 'Manual 15 — Particulars of Facilities Available to Citizens',
      type: 'static',
      content: `
        <p>The following facilities are available to citizens seeking information from or services of SKVIB:</p>
        <ul>
          <li><strong>Head Office Help Desk</strong> — Khadi Bhavan, Deorali, Gangtok (Mon–Sat, 10:00 AM – 4:00 PM).</li>
          <li><strong>PMEGP Facilitation</strong> — assistance with application forms and documentation for loan applicants.</li>
          <li><strong>RTI Facilitation</strong> — RTI applications received at the Head Office; acknowledgement issued within 2 working days.</li>
          <li><strong>Khadi Bhandars</strong> — six retail outlets across Gangtok (Deorali Supermarket), Namchi, Jorethang, Gyalshing, Singtam, and other locations.</li>
          <li><strong>Email Contact</strong> — <a href="mailto:sikkimkhadi@gmail.com">sikkimkhadi@gmail.com</a> for general queries.</li>
        </ul>
      `
    },
    {
      id: 16,
      shortTitle: 'Public Information Officers',
      title: 'Manual 16 — Names & Designations of PIOs',
      type: 'pio',
      content: 'Details of designated Public Information Officers under the RTI Act, 2005.'
    },
    {
      id: 17,
      shortTitle: 'Other Information',
      title: 'Manual 17 — Other Information as Prescribed',
      type: 'static',
      content: `
        <h4>Grievance Redressal Mechanism</h4>
        <p>SKVIB has a structured grievance redressal mechanism to ensure accountability and transparency:</p>
        <ul>
          <li>Grievances may be submitted in writing to the SPIO at the Head Office, Deorali, Gangtok.</li>
          <li>Email grievances may be sent to <a href="mailto:sikkimkhadi@gmail.com">sikkimkhadi@gmail.com</a>.</li>
          <li>All grievances are acknowledged within 2 working days and resolved within 30 days.</li>
          <li>Appeals against SPIO decisions lie with the Appellate Authority (CEO) within 90 days of the original order.</li>
          <li>Second appeals lie before the State Information Commission, Sikkim.</li>
        </ul>
        <h4>RTI Application Procedure</h4>
        <p>RTI applications under the Right to Information Act, 2005 are received at the <strong>Head Office, Khadi Bhavan, Deorali – 737102, Gangtok, Sikkim</strong>. Applications must be accompanied by the prescribed fee as per RTI rules. The SPIO will provide information within 30 days of receipt of application.</p>
        <h4>Annual Proactive Disclosure Update</h4>
        <p>This disclosure document is reviewed and updated annually. The current version covers the financial year 2024-25.</p>
      `
    }
  ];

  filteredEmployees = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    if (!q) return this.employees();
    return this.employees().filter(e =>
      e.name.toLowerCase().includes(q) ||
      e.designation.toLowerCase().includes(q) ||
      e.duties.toLowerCase().includes(q) ||
      e.power.toLowerCase().includes(q)
    );
  });

  filteredManuals = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    if (!q) return this.manuals;
    const employeeTypes = new Set(['employee-duties', 'employee-pay', 'employee-contact']);
    const hasEmployeeMatch = this.filteredEmployees().length > 0;
    return this.manuals.filter(m => {
      // Always include employee-data manuals when employees match the search
      if (employeeTypes.has(m.type) && hasEmployeeMatch) return true;
      return (
        m.title.toLowerCase().includes(q) ||
        m.shortTitle.toLowerCase().includes(q) ||
        m.content.toLowerCase().includes(q)
      );
    });
  });

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<RtiEmployee[]>('assets/data/rti-employees.json').subscribe({
      next: (data) => this.employees.set(data),
      error: (err) => console.error('Failed to load RTI employee data:', err)
    });
  }

  toggleManual(id: number): void {
    const current = new Set(this.activeManuals());
    if (current.has(id)) {
      current.delete(id);
    } else {
      current.add(id);
    }
    this.activeManuals.set(current);
  }

  isActive(id: number): boolean {
    return this.activeManuals().has(id);
  }

  onSearch(query: string): void {
    this.searchQuery.set(query);
    // Auto-expand all manuals when searching
    if (query.trim()) {
      const allIds = new Set(this.manuals.map(m => m.id));
      this.activeManuals.set(allIds);
    }
  }

  expandAll(): void {
    const allIds = new Set(this.manuals.map(m => m.id));
    this.activeManuals.set(allIds);
  }

  collapseAll(): void {
    this.activeManuals.set(new Set());
  }
}
