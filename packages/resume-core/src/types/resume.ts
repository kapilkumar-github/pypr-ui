import type { Basics } from "./basics";
import type { ResumeSection } from "./section";

export interface Resume {
  id: string;

  title: string;

  basics: Basics;

  sections: ResumeSection[];

  createdAt: string;
  updatedAt: string;
}
