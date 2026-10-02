import "fake-indexeddb/auto";

import { afterEach, describe, expect, it } from "vitest";

import { createResume, type Resume } from "@resume-builder/resume-core";

import { db } from "../src/database";
import { DexieResumeRepository } from "../src";

function createTestResume(id: string): Resume {
  return createResume({
    id,
    title: "Test Resume",
    basics: {
      name: "Kapil Kumar",
      headline: "Software Engineer",
    },
  });
}

afterEach(async () => {
  await db.resumes.clear();
});

describe("DexieResumeRepository", () => {
  it("creates and retrieves a resume", async () => {
    const repository = new DexieResumeRepository();
    const resume = createTestResume("resume-1");

    await repository.create(resume);

    const result = await repository.getById("resume-1");

    expect(result).toEqual(resume);
  });

  it("returns all resumes", async () => {
    const repository = new DexieResumeRepository();

    const resume1 = createTestResume("resume-1");
    const resume2 = createTestResume("resume-2");

    await repository.create(resume1);
    await repository.create(resume2);

    const results = await repository.getAll();

    expect(results).toHaveLength(2);
    expect(results).toContainEqual(resume1);
    expect(results).toContainEqual(resume2);
  });

  it("updates a resume", async () => {
    const repository = new DexieResumeRepository();

    const resume = createTestResume("resume-1");

    await repository.create(resume);

    const updatedResume: Resume = {
      ...resume,
      title: "Updated Resume",
    };

    await repository.update(updatedResume);

    const result = await repository.getById("resume-1");

    expect(result?.title).toBe("Updated Resume");
  });

  it("deletes a resume", async () => {
    const repository = new DexieResumeRepository();

    const resume = createTestResume("resume-1");

    await repository.create(resume);
    await repository.delete("resume-1");

    const result = await repository.getById("resume-1");

    expect(result).toBeUndefined();
  });
});
