"use client";

import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react";

import type { ResumeRepository } from "@resume-builder/resume-core";
import { DexieResumeRepository } from "@resume-builder/storage";
import { AxiosApiClient } from "@/lib/api/api-client";
import { ApiResumeRepository } from "@/features/resume/repositories/api-resume-repository";
import { axiosClient } from "@/lib/api/axios";

const ResumeRepositoryContext =
  createContext<ResumeRepository | null>(null);

interface ResumeRepositoryProviderProps {
  children: ReactNode;
}

export function ResumeRepositoryProvider({
  children,
}: ResumeRepositoryProviderProps) {
  const useIndexedDB = true; // Set to true to use IndexedDB, false to use API
  const repository = useMemo(
    () => {
      if (useIndexedDB) {
        return new DexieResumeRepository();
      }

      const apiClient = new AxiosApiClient(axiosClient);

      return new ApiResumeRepository(apiClient);
    },
    [],
  );

  return (
    <ResumeRepositoryContext.Provider value={repository}>
      {children}
    </ResumeRepositoryContext.Provider>
  );
}

export function useResumeRepository(): ResumeRepository {
  const repository = useContext(ResumeRepositoryContext);

  if (!repository) {
    throw new Error(
      "useResumeRepository must be used within ResumeRepositoryProvider",
    );
  }

  return repository;
}