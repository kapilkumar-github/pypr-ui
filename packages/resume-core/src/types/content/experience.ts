export interface Experience {
  id: string;
  company: string;
  position: string;

  location?: string;

  startDate: string;
  endDate?: string;
  current: boolean;

  description?: string;
  highlights: string[];

  technologies?: string[];
}
