import { describe, expect, it } from "vitest";
import { createResume } from "../src";

describe("createResume", () => {
  it("creates an empty resume", () => {
    const resume = createResume({
      id: "resume-1",
      title: "My Resume",
    });

    expect(resume.id).toBe("resume-1");
    expect(resume.title).toBe("My Resume");
    expect(resume.basics.name).toBe("");
    expect(resume.sections).toEqual([]);
    expect(resume.createdAt).toBeDefined();
    expect(resume.updatedAt).toBeDefined();
  });

  it("uses provided basics", () => {
    const resume = createResume({
      id: "resume-1",
      title: "My Resume",
      basics: {
        name: "Kapil Kumar",
        headline: "Software Engineer",
      },
    });

    expect(resume.basics.name).toBe("Kapil Kumar");
    expect(resume.basics.headline).toBe("Software Engineer");
  });
});
