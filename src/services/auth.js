import { apiClient } from ".";

export const authApi = {
  getUserSession() {
    return apiClient.get("/users/session").then((res) => res.data);
  },
  login(payload) {
    return fetch("https://paul.blueboxonline.com/api/v1/users/login", {
      method: "POST",
      body: JSON.stringify(payload),
      mode: "navigate",
      credentials: "include",
    });
    // return apiClient.post("/users/login", payload).then((res) => res.data);
  },
  logout() {
    return apiClient.get("/users/logout").then((res) => res.data);
  },
};
