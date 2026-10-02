import { describe, expect, it } from "vitest";
import { createSection, SECTION_TYPES } from "../src";

describe("createSection", () => {
  it("creates an experience section", () => {
    const section = createSection({
      id: "section-1",
      type: SECTION_TYPES.EXPERIENCE,
      title: "Work Experience",
    });

    expect(section.type).toBe(SECTION_TYPES.EXPERIENCE);
    expect(section.title).toBe("Work Experience");
    expect(section.items).toEqual([]);
    expect(section.order).toBe(0);
    expect(section.visible).toBe(true);
  });
});
