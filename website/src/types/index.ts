export interface ContactLink {
  link: string;
  name: string;
  icon?: string;
}

export interface Skill {
  heading: string;
  value: string;
}

export interface JobExperience {
  company: string;
  role?: string;
  period: string;
  location?: string;
  subtitle?: string;
  roleLine?: string;
  highlights?: string[];
}

export interface HobbyProject {
  name: string;
  description: string;
  repo?: string;
  link?: string;
}

export interface Education {
  degree: string;
  school: string;
  period?: string;
}

export interface PersonalData {
  name: string;
  title?: string;
  tagline?: string;
  location?: string;
  email?: string;
  phone?: string;
  resume?: string;
  image?: string;
  introduction?: string;
  contactLinks?: ContactLink[];
  skills?: Skill[];
  experience?: JobExperience[];
  hobby?: HobbyProject[];
  education?: Education;
}

export interface PortfolioProject {
  name: string;
  icon?: string;
  description: string;
  tech?: string;
  role?: string;
  contribution?: string;
  url?: string;
  android?: string;
  ios?: string;
}

export interface SiteInfo {
  personalData: PersonalData;
  projectData: PortfolioProject[];
}

export type Theme = "light" | "dark";
