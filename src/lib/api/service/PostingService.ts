import postingController from "../controller/PostingController";

const postingService = {
  getPosting: async (projectId: number) => {
    const response = await postingController.getPosting(projectId);
    return response;
  },
};

export default postingService;
