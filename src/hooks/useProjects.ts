import { useState } from "react";
import { Project } from "@/types/project";
import projectsData from "@/data/projects.json";

export const useProjects = () => {
  const [projects] = useState<Project[]>(projectsData as Project[]);
  return { projects, loading: false };
};
