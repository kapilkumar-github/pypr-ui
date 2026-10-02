import type { Basics } from "./basics";
import type { Resume } from "./resume";

export interface CreateResumeOptions {
  id: string;
  title: string;
  basics?: Basics;
}

export function createResume({
  id,
  title,
  basics = {
    name: "",
  },
}: CreateResumeOptions): Resume {
  const now = new Date().toISOString();

  return {
    id,
    title,
    basics,
    sections: [],
    createdAt: now,
    updatedAt: now,
  };
}
