import { Project } from "@/types/project";

export interface ProjectConfig {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  link?: string;
  demo?: string;
  thumbnail?: string;
  featured?: boolean;
  banner?: {
    link?: string;
    image?: string;
  }
}

// Convert config to Project
export const configToProject = (config: ProjectConfig, readme?: string): Project => ({
  id: config.id,
  title: config.title,
  description: config.description,
  tags: config.tags || [],
  link: config.link,
  demo: config.demo,
  thumbnail: config.thumbnail,
  featured: config.featured,
  banner: config.banner,
  content: readme || config.description,
});