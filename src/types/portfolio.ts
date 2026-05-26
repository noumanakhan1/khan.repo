export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  category: "fullstack" | "frontend" | "backend" | "saas";
  liveUrl?: string;
  githubUrl: string;
  features: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  achievements: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  image?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  items: string[];
}
