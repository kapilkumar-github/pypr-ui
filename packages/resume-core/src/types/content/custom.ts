export interface CustomItem {
  id: string;
  title: string;

  subtitle?: string;
  description?: string;

  startDate?: string;
  endDate?: string;
  url?: string;
}

export interface CustomSection {
  id: string;
  title: string;
  items: CustomItem[];
}
