export interface BeekeepingSection {
  id: string;
  title: string;
  content: string;
  subsections?: BeekeepingSubsection[];
  images?: BeekeepingImage[];
  listItems?: string[];
  type: 'text' | 'list' | 'mixed';
}

export interface BeekeepingSubsection {
  id: string;
  title: string;
  content: string;
  listItems?: string[];
}

export interface BeekeepingImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

export interface BeekeepingObjective {
  id: string;
  text: string;
  icon: string;
}

export interface BeekeepingActivity {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BeekeepingData {
  heroTitle: string;
  heroSubtitle: string;
  sections: BeekeepingSection[];
  objectives: BeekeepingObjective[];
  activities: BeekeepingActivity[];
  statistics: BeekeepingStatistic[];
}

export interface BeekeepingStatistic {
  id: string;
  value: string;
  label: string;
  description: string;
}
