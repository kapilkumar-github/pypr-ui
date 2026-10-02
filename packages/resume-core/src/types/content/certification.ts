export interface Certification {
  id: string;
  name: string;
  issuer: string;

  issueDate?: string;
  expirationDate?: string;

  credentialId?: string;
  credentialUrl?: string;
}
