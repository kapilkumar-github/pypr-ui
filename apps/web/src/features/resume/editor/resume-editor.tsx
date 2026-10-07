"use client";

import CollapsibleSection from "@/components/app-ui/collapsible-section";
import type { Resume } from "@resume-builder/resume-core";
import PersonalDetailsEditor from "./sections/personal-details-editor";

type ResumeEditorProps =
    | {
        mode: "create";
        initialData?: Resume;
    }
    | {
        mode: "edit";
        initialData: Resume;
    };

export default function ResumeEditor({
    mode,
    initialData,
}: ResumeEditorProps) {
    const resume = initialData;

    return (
        <div className="flex h-[calc(100vh-3.5rem)] min-h-0 overflow-hidden bg-muted/30">
            {/* Editor */}
            <section className="min-w-[40%] overflow-y-auto border-r border-border">

                {/* Resume sections/editors go here */}
                <CollapsibleSection
                    title="Personal information"
                >
                    <PersonalDetailsEditor />
                </CollapsibleSection>

                <CollapsibleSection
                    title="Work experience"
                >
                    <PersonalDetailsEditor />
                </CollapsibleSection>
            </section>

            {/* Preview */}
            <section className="flex min-w-[60%] flex-col">
                <div className="flex h-12 shrink-0 items-center border-b border-border px-5">
                    <span className="text-sm font-medium">Preview</span>
                </div>

                <div className="min-h-0 flex-1 overflow-auto p-8">
                    <div className="mx-auto w-full max-w-[794px]">
                        {/* Resume preview using the same Resume model */}
                    </div>
                </div>
            </section>
        </div>
    );
}