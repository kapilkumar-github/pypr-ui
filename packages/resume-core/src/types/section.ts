import type {
  Award,
  Certification,
  CustomItem,
  Education,
  Experience,
  Language,
  Project,
  Skill,
} from "./content";
import { SECTION_TYPES } from "./section-types";

export interface SectionMetadata {
  id: string;
  title: string;
  order: number;
  visible: boolean;
}
export interface SectionItemsMap {
  [SECTION_TYPES.EXPERIENCE]: Experience[];
  [SECTION_TYPES.EDUCATION]: Education[];
  [SECTION_TYPES.SKILLS]: Skill[];
  [SECTION_TYPES.PROJECTS]: Project[];
  [SECTION_TYPES.CERTIFICATIONS]: Certification[];
  [SECTION_TYPES.AWARDS]: Award[];
  [SECTION_TYPES.LANGUAGES]: Language[];
  [SECTION_TYPES.CUSTOM]: CustomItem[];
}
export type ResumeSection =
  | (SectionMetadata & {
      type: typeof SECTION_TYPES.EXPERIENCE;
      items: Experience[];
    })
  | (SectionMetadata & {
      type: typeof SECTION_TYPES.EDUCATION;
      items: Education[];
    })
  | (SectionMetadata & {
      type: typeof SECTION_TYPES.SKILLS;
      items: Skill[];
    })
  | (SectionMetadata & {
      type: typeof SECTION_TYPES.PROJECTS;
      items: Project[];
    })
  | (SectionMetadata & {
      type: typeof SECTION_TYPES.CERTIFICATIONS;
      items: Certification[];
    })
  | (SectionMetadata & {
      type: typeof SECTION_TYPES.AWARDS;
      items: Award[];
    })
  | (SectionMetadata & {
      type: typeof SECTION_TYPES.LANGUAGES;
      items: Language[];
    })
  | (SectionMetadata & {
      type: typeof SECTION_TYPES.CUSTOM;
      items: CustomItem[];
    });
