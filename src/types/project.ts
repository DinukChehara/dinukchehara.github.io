export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  links?: {
    url: string;
    icon?: string;
  }[];
  featured?: boolean;
  thumbnail?: string;
  banner?: {
    link?: string;
    image?: string;
  }
  content: string;
}
