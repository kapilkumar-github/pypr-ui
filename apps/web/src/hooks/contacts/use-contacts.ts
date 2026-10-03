"use client";
import { useQuery } from "@tanstack/react-query";
import * as ContactService from "@/services/contact.service";

export const useContacts = () => {
  return useQuery({
    queryKey: ["contacts"],
    queryFn: ContactService.getContacts,
  });
};
