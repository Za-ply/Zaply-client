import { apiClient } from "../axios/instance";

const postingController = {
  getPosting: async (projectId: number) => {
    const response = await apiClient.get(`/posting/${projectId}`);
    return response.data;
  },
};

export default postingController;
