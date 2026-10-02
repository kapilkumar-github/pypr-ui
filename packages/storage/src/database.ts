import Dexie, { type Table } from "dexie";
import type { Resume } from "@resume-builder/resume-core";

export class ResumeDatabase extends Dexie {
  resumes!: Table<Resume, string>;

  constructor() {
    super("resume-builder");

    this.version(1).stores({
      resumes: "id",
    });
  }
}

export const db = new ResumeDatabase();
