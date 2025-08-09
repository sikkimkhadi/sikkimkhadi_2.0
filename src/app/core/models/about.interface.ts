export interface BoardMember {
  id: string;
  name: string;
  position?: string;
  category: 'non-official' | 'official';
}

export interface Objective {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface AboutSection {
  id: string;
  title: string;
  content: string;
  type: 'introduction' | 'objectives' | 'directors' | 'act';
}

export interface AboutData {
  introduction: AboutSection;
  objectives: Objective[];
  boardMembers: {
    nonOfficial: BoardMember[];
    official: BoardMember[];
  };
  skvibAct: {
    title: string;
    description: string;
    pdfUrl: string;
    downloadText: string;
  };
  establishedYear: number;
  actYear: number;
}
