import CreateResumeCard from "@/features/resume/create-resume-card";
import ResumeCard from "@/features/resume/resume-card";

export default function Page() {
    return (
        <section>
            <div className="flex items-center gap-4 mb-6">
                <h1 className="text-xl tracking-wider">resumes</h1>
            </div>

            <div className="grid grid-cols-[1fr_1fr] gap-6 grid-flow-dense">
                {/* // Create new resume card */}
                <CreateResumeCard />

                {/* // Resume cards */}
                <ResumeCard />
                <ResumeCard />
                <ResumeCard />
            </div>
        </section>
    );
}