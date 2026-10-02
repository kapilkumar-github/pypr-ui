export interface Education {
  id: string;
  institution: string;
  degree: string;

  field?: string;
  location?: string;

  startDate?: string;
  endDate?: string;

  description?: string;
}
