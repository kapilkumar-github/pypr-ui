export interface Project {
  id: string;
  name: string;

  description?: string;

  url?: string;
  repository?: string;

  technologies: string[];

  startDate?: string;
  endDate?: string;
}
