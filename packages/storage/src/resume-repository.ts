import type { Resume, ResumeRepository } from "@resume-builder/resume-core";

import { db } from "./database";

export class DexieResumeRepository implements ResumeRepository {
  async create(resume: Resume): Promise<void> {
    await db.resumes.add(resume);
  }

  async getById(id: string): Promise<Resume | undefined> {
    return db.resumes.get(id);
  }

  async getAll(): Promise<Resume[]> {
    return db.resumes.toArray();
  }

  async update(resume: Resume): Promise<void> {
    await db.resumes.put(resume);
  }

  async delete(id: string): Promise<void> {
    await db.resumes.delete(id);
  }
}
