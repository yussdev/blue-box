import { apiClient } from ".";

export const appApi = {
  getSettings() {
    return apiClient.get("/app/settings").then((res) => res.data);
  },
  getTableData() {
    return fetch("https://paul.blueboxonline.com/api/v1/app/tabledata", {
      method: "GET",
      credentials: "include",
    });
    // return apiClient
    //   .get("/app/tabledata", {
    //     withCredentials: true,
    //   })
    //   .then((res) => res.data);
  },
  postReport(formData) {
    return apiClient.get("/app/tabledata", formData).then((res) => res.data);
  },
};
