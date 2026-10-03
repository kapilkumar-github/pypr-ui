import * as authService from "./auth.service";
import apiClient from "@/lib/api/api-client";

const authServiceInstance = new authService.AuthService(apiClient);
export { authServiceInstance, authService };
