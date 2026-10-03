import api from "@/lib/axios";

export type Contact = {
  id: string;
  firstName: string;
  lastName?: string;
  email: string;
  companyName?: string;
  jobTitle?: string;
  status: string;
};

export const getContacts = async (): Promise<Contact[]> => {
  const response = await api.get("/contacts/all");

  return response.data.data;
};

export const createContact = async (): Promise<Contact> => {
  return {
    id: "1",
    firstName: "kapil",
    email: "kapil@pypr.com",
    status: "active",
  } as Contact;
};
