import type { ApiClient } from "@/lib/api/api-client";

const AUTH_ENDPOINTS = {
  LOGIN: "/auth/login",
  SIGNUP: "/auth/register",
} as const;

export type LoginRequest = {
  emailId: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
};

export type RegisterUserRequest = {
  firstName: string;
  emailId: string;
  password: string;
  invitationToken: null | string;
  timezone: string;
};

export type RegisterUserResponse = Record<string, never>;

export class AuthService {
  constructor(private readonly apiClient: ApiClient) {}

  async login(data: LoginRequest): Promise<LoginResponse> {
    const response = await this.apiClient.post<LoginRequest, LoginResponse>(
      AUTH_ENDPOINTS.LOGIN,
      data,
    );

    return response;
  }

  async signup(data: RegisterUserRequest): Promise<RegisterUserResponse> {
    const response = await this.apiClient.post<
      RegisterUserRequest,
      RegisterUserResponse
    >(AUTH_ENDPOINTS.SIGNUP, data);

    return response;
  }
}
