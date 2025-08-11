import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface ContactPerson {
  id: number;
  name: string;
  designation: string;
  department?: string;
  contact: string;
  email?: string;
  specialization?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactData: ContactPerson[] = [
    {
      id: 1,
      name: 'Shri. Deepak Kumar Gurung',
      designation: 'Chairperson',
      department: 'Sikkim Khadi & Village Industries Board',
      contact: '9733040950',
    },
    {
      id: 2,
      name: 'Shri. Dal Bahadur Thatal',
      designation: 'Advisor',
      contact: '7076861594',
    },
    {
      id: 3,
      name: 'Shri Gyurmie Yousal',
      designation: 'Pr. Chief Executive Officer',
      contact: '9434080499',
    },
    {
      id: 4,
      name: 'Smt. Meena Thapa',
      designation: 'Deputy Executive Officer',
      contact: '9800366557',
    },
    {
      id: 6,
      name: 'Shri. Chewang Topden Bhutia',
      designation: 'Assistant Executive Officer',
      contact: '8918128518',
    },
    {
      id: 7,
      name: 'Shri Karma Samten Bhutia',
      designation: 'Officer',
      contact: '9609585504',
      specialization: 'PMEGP Related Queries',
    },
    {
      id: 8,
      name: 'Shri Gyalpo Tshering Bhutia',
      designation: 'Officer',
      contact: '7407387919',
      specialization: 'Bee-Keeping Related Queries',
    },
    {
      id: 9,
      name: 'Shri. Chewang Topden Bhutia',
      designation: 'Assistant Executive Officer',
      contact: '8918128518',
      specialization: 'Products Related Queries',
    },
  ];

  constructor() { }

  /**
   * Get all contact persons
   * @returns Observable of ContactPerson array
   */
  getContacts(): Observable<ContactPerson[]> {
    return of(this.contactData);
  }

  /**
   * Get contact by ID
   * @param id Contact person ID
   * @returns Observable of ContactPerson or undefined
   */
  getContactById(id: number): Observable<ContactPerson | undefined> {
    const contact = this.contactData.find(person => person.id === id);
    return of(contact);
  }

  /**
   * Get contacts by specialization
   * @param specialization Specialization area
   * @returns Observable of ContactPerson array
   */
  getContactsBySpecialization(specialization: string): Observable<ContactPerson[]> {
    const contacts = this.contactData.filter(person => 
      person.specialization?.toLowerCase().includes(specialization.toLowerCase())
    );
    return of(contacts);
  }

  /**
   * Future method to fetch contacts from API
   * @returns Observable of ContactPerson array
   */
  getContactsFromAPI(): Observable<ContactPerson[]> {
    // This method can be implemented later to fetch from actual API
    // For now, it returns the local data
    return this.getContacts();
  }
}