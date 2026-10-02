import type { Resume } from "./types/resume";

export interface ResumeRepository {
  create(resume: Resume): Promise<void>;

  getById(id: string): Promise<Resume | undefined>;

  getAll(): Promise<Resume[]>;

  update(resume: Resume): Promise<void>;

  delete(id: string): Promise<void>;
}
