import {
  createResume,
  type Resume,
  type ResumeRepository,
} from "@resume-builder/resume-core";

export class ResumeService {
  constructor(private readonly repository: ResumeRepository) {}

  async create(title: string): Promise<Resume> {
    const resume = createResume({
      id: crypto.randomUUID(),
      title,
    });

    await this.repository.create(resume);

    return resume;
  }

  async getById(id: string): Promise<Resume | undefined> {
    return this.repository.getById(id);
  }

  async getAll(): Promise<Resume[]> {
    return this.repository.getAll();
  }

  async update(resume: Resume): Promise<void> {
    await this.repository.update({
      ...resume,
      updatedAt: new Date().toISOString(),
    });
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
