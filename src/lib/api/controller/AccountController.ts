import { apiClient } from "../axios/instance";

const accountController = {
  threads: async (): Promise<void> => {
    const response = await apiClient.post("/account/threads/login");
    return response.data;
  },

  facebook: async (): Promise<void> => {
    const response = await apiClient.post("/account/facebook/login");
    return response.data;
  },
};

export default accountController;
