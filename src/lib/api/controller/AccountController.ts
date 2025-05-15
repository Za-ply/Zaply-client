import { apiClient } from "../axios/instance";

const accountController = {
  threads: async (): Promise<void> => {
    const response = await apiClient.get("/account/threads/login");
    return response.data;
  },

  facebook: async (): Promise<void> => {
    const response = await apiClient.get("/account/facebook/login");
    return response.data;
  },
};

export default accountController;
