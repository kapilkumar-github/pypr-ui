import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";

import { ApiError } from "./api-error";

export interface ApiClient {
  get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;

  post<TRequest, TResponse>(
    url: string,
    data: TRequest,
    config?: AxiosRequestConfig,
  ): Promise<TResponse>;

  put<TRequest, TResponse>(
    url: string,
    data: TRequest,
    config?: AxiosRequestConfig,
  ): Promise<TResponse>;

  delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
}

export class AxiosApiClient implements ApiClient {
  constructor(private readonly client: AxiosInstance) {}

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.client.get<T>(url, config);

      return response.data;
    } catch (error) {
      throw this.toApiError(error);
    }
  }

  async post<TRequest, TResponse>(
    url: string,
    data: TRequest,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> {
    try {
      const response = await this.client.post<TResponse>(url, data, config);

      return response.data;
    } catch (error) {
      throw this.toApiError(error);
    }
  }

  async put<TRequest, TResponse>(
    url: string,
    data: TRequest,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> {
    try {
      const response = await this.client.put<TResponse>(url, data, config);

      return response.data;
    } catch (error) {
      throw this.toApiError(error);
    }
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.client.delete<T>(url, config);

      return response.data;
    } catch (error) {
      throw this.toApiError(error);
    }
  }

  private toApiError(error: unknown): ApiError {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status ?? 0;

      const message =
        error.response?.data?.message ?? error.message ?? "API request failed";

      return new ApiError(message, status);
    }

    if (error instanceof Error) {
      return new ApiError(error.message, 0);
    }

    return new ApiError("An unexpected API error occurred", 0);
  }
}

export default new AxiosApiClient(
  axios.create({ baseURL: "http://localhost:8080/api" }),
);
