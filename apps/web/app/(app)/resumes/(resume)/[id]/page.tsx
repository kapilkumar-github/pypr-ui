"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import type { Resume } from "@resume-builder/resume-core";

import { useResumeService } from "@/providers/resume-service-provider";

export default function ResumePage() {
    const { id } = useParams<{ id: string }>();
    console.log("Resume ID:", id);

    const resumeService = useResumeService();

    const [resumes, setResumes] = useState<Resume[]>([]);
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadResumes() {
            const result = await resumeService.getAll();

            setResumes(result);
            setLoading(false);
        }

        void loadResumes();
    }, [resumeService]);

    async function handleCreateResume() {
        const trimmedTitle = title.trim();

        if (!trimmedTitle) {
            return;
        }

        const resume = await resumeService.create(trimmedTitle);

        setResumes((current) => [...current, resume]);
        setTitle("");
    }

    return (
        <main className="mx-auto max-w-3xl p-8">
            <h1 className="text-3xl font-bold">
                Resume Builder
            </h1>

            <div className="mt-8 flex gap-2">
                <input
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="Resume title"
                    className="flex-1 rounded-md border px-3 py-2"
                />

                <button
                    type="button"
                    onClick={handleCreateResume}
                    className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
                >
                    Create Resume
                </button>
            </div>

            <section className="mt-8">
                <h2 className="text-xl font-semibold">
                    Your Resumes
                </h2>

                {loading ? (
                    <p className="mt-4 text-muted-foreground">
                        Loading...
                    </p>
                ) : resumes.length === 0 ? (
                    <p className="mt-4 text-muted-foreground">
                        No resumes yet.
                    </p>
                ) : (
                    <div className="mt-4 space-y-2">
                        {resumes.map((resume) => (
                            <div
                                key={resume.id}
                                className="rounded-md border p-4"
                            >
                                <p className="font-medium">
                                    {resume.title}
                                </p>

                                <p className="text-sm text-muted-foreground">
                                    {resume.basics.name || "Unnamed"}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}