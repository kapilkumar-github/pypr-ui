"use client";

import {
    createContext,
    useContext,
    useMemo,
    type ReactNode,
} from "react";

import { ResumeService } from "@/features/resume/services/resume-service";
import { useResumeRepository } from "./resume-repository-provider";

interface ResumeServiceProviderProps {
    children: ReactNode;
}

const ResumeServiceContext =
    createContext<ResumeService | null>(null);

export function ResumeServiceProvider({
    children,
}: ResumeServiceProviderProps) {
    const repository = useResumeRepository();

    const service = useMemo(
        () => new ResumeService(repository),
        [repository],
    );

    return (
        <ResumeServiceContext.Provider value={service}>
            {children}
        </ResumeServiceContext.Provider>
    );
}

export function useResumeService(): ResumeService {
    const service = useContext(ResumeServiceContext);

    if (!service) {
        throw new Error(
            "useResumeService must be used within ResumeServiceProvider",
        );
    }

    return service;
}