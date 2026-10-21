/**
 * Site content that the admin panel will edit.
 * Imported at build time, so every prerendered page already contains it.
 */
import galleryJson from '../../../content/home-gallery.json';
import contactsJson from '../../../content/contacts.json';

export type GalleryCategory = 'products' | 'outlets' | 'production';

export interface HomeGalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;
  link: string;
  alt: string;
  visible: boolean;
}

export interface PhoneLine { label: string; phone: string; }
export interface HelpDesk { id: string; topic: string; summary: string; link?: string; lines: PhoneLine[]; }
export interface Officer { name: string; designation: string; phone: string; }
export interface OfficeInfo {
  name: string; building: string; street: string; city: string; pin: string;
  phones: string[]; fax: string; email: string; mapQuery: string;
}
export interface ContactContent { office: OfficeInfo; helpDesks: HelpDesk[]; officers: Officer[]; }

export const homeGallery: HomeGalleryItem[] =
  (galleryJson.items as HomeGalleryItem[]).filter(i => i.visible);

export const contactContent: ContactContent = contactsJson as ContactContent;

/** 9733040950 -> 97330 40950 ; 03592281810 -> 03592 281810 */
export function formatPhone(raw: string): string {
  const d = raw.replace(/\D/g, '');
  if (d.length === 10 && !d.startsWith('0')) return `${d.slice(0, 5)} ${d.slice(5)}`;
  if (d.length === 11 && d.startsWith('0')) return `${d.slice(0, 5)} ${d.slice(5)}`;
  return raw;
}

/** tel: link in international form, so it also works from outside India */
export function telHref(raw: string): string {
  const d = raw.replace(/\D/g, '');
  return 'tel:+91' + (d.startsWith('0') ? d.slice(1) : d);
}
