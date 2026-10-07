import ResumeEditor from "@/features/resume/editor/resume-editor";
import { createResume } from "@resume-builder/resume-core";

export default function CreateResumePage() {
    const resume = createResume({
        id: "new-resume",
        title: "New Resume",
    });

    return (
        <ResumeEditor
            mode="create"
            initialData={resume}
        />
    );
}