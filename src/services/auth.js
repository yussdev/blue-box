import { apiClient } from ".";

export const authApi = {
  getUserSession() {
    return apiClient.get("/users/session").then((res) => res.data);
  },
  login(payload) {
    return apiClient
      .post("/users/login", payload, { withCredentials: true })
      .then((res) => res.data);
  },
  logout() {
    return apiClient.get("/users/logout").then((res) => res.data);
  },
};
