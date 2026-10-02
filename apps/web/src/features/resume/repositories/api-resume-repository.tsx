// Demo file for the ApiResumeRepository implementation.
// Make Changes to API Endpoints in this file as needed.

import type {
  Resume,
  ResumeRepository,
} from "@resume-builder/resume-core";

import { ApiError } from "@/lib/api/api-error";
import type { ApiClient } from "@/lib/api/api-client";

export class ApiResumeRepository
  implements ResumeRepository {
  constructor(
    private readonly apiClient: ApiClient,
  ) { }

  async create(resume: Resume): Promise<void> {
    await this.apiClient.post<Resume, Resume>(
      "/api/resumes",
      resume,
    );
  }

  async getById(
    id: string,
  ): Promise<Resume | undefined> {
    try {
      return await this.apiClient.get<Resume>(
        `/api/resumes/${id}`,
      );
    } catch (error) {
      if (
        error instanceof ApiError &&
        error.status === 404
      ) {
        return undefined;
      }

      throw error;
    }
  }

  async getAll(): Promise<Resume[]> {
    return this.apiClient.get<Resume[]>(
      "/api/resumes",
    );
  }

  async update(resume: Resume): Promise<void> {
    await this.apiClient.put<Resume, Resume>(
      `/api/resumes/${resume.id}`,
      resume,
    );
  }

  async delete(id: string): Promise<void> {
    await this.apiClient.delete(
      `/api/resumes/${id}`,
    );
  }
}