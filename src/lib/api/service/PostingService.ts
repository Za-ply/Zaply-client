import postingController from "../controller/PostingController";
import { Posting } from "../model";

const postingService = {
  getPosting: async (projectId: number) => {
    const response = await postingController.getPosting(projectId);
    return response;
  },

  updateSinglePosting: async (postingId: number, snsType: string, data: Partial<Posting>) => {
    const response = await postingController.updateSinglePosting(postingId, snsType, data);
    return response;
  },

  updateCarouselPosting: async (postingId: number, snsType: string, data: Partial<Posting>) => {
    const response = await postingController.updateCarouselPosting(postingId, snsType, data);
    return response;
  },
};

export default postingService;
