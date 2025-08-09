export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  category: 'latest' | 'upcoming' | 'annual';
  fullDescription?: string;
  location?: string;
  time?: string;
  organizer?: string;
  tags?: string[];
}

export interface EventImage {
  id: string;
  url: string;
  alt: string;
  caption?: string;
}

export interface EventCategory {
  id: string;
  title: string;
  description: string;
  badge: string;
  route: string;
  icon?: string;
}
