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
      name: 'Smt. Chung Chung Bhutia',
      designation: 'Chairperson',
      department: 'Sikkim Khadi & Village Industries Board',
      contact: '6296542761'
    },
    {
      id: 2,
      name: 'Shri Gyurmie Yousal',
      designation: 'Pr. Chief Executive Officer',
      contact: '9434080499'
    },
    {
      id: 3,
      name: 'Smt. Meena Thapa',
      designation: 'Deputy Executive Officer',
      contact: '9800366557'
    },
    {
      id: 4,
      name: 'Smt. Babita Baraily',
      designation: 'Assistant Executive Officer',
      contact: '9434339096'
    },
    {
      id: 5,
      name: 'Smt. Dhaka Devi Sharma',
      designation: 'Accounts Officer',
      contact: '9647851861'
    },
    {
      id: 6,
      name: 'Shri Karma Samten Bhutia',
      designation: 'Officer',
      specialization: 'PMEGP Related Queries',
      contact: '9609585504'
    },
    {
      id: 7,
      name: 'Shri Gyalpo Tshering Bhutia',
      designation: 'Officer',
      specialization: 'Bee-Keeping Related Queries',
      contact: '7407387919'
    },
    {
      id: 8,
      name: 'Smt. Babita Baraily',
      designation: 'Assistant Executive Officer',
      specialization: 'Products Related Queries',
      contact: '9434339096'
    }
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