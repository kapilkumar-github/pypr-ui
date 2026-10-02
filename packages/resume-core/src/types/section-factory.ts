import type {
  CustomItem,
  Experience,
  Education,
  Skill,
  Project,
  Certification,
  Award,
  Language,
} from "./content";
import type { ResumeSection, SectionItemsMap } from "./section";
import { type SectionType } from "./section-types";

export interface CreateSectionOptions<K extends SectionType> {
  id: string;
  type: K;
  title: string;
  order?: number;
  visible?: boolean;
  items?: SectionItemsMap[K];
}

export function createSection<K extends SectionType>({
  id,
  type,
  title,
  order = 0,
  visible = true,
  items = [],
}: CreateSectionOptions<K>): ResumeSection {
  return {
    id,
    type,
    title,
    order,
    visible,
    items,
  } as ResumeSection;
}
