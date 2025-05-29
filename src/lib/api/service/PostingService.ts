import postingController from "../controller/PostingController";
import { CreatePostingRequest, Posting } from "../model";

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

  createFacebookSinglePosting: async (projectId: number, data: CreatePostingRequest) => {
    const response = await postingController.createFacebookSinglePosting(projectId, data);
    return response;
  },

  createFacebookCarouselPosting: async (projectId: number, data: CreatePostingRequest) => {
    const response = await postingController.createFacebookCarouselPosting(projectId, data);
    return response;
  },

  createThreadSinglePosting: async (projectId: number, data: CreatePostingRequest) => {
    const response = await postingController.createThreadSinglePosting(projectId, data);
    return response;
  },

  createThreadCarouselPosting: async (projectId: number, data: CreatePostingRequest) => {
    const response = await postingController.createThreadCarouselPosting(projectId, data);
    return response;
  },

  createInstagramCarouselPosting: async (projectId: number, data: CreatePostingRequest) => {
    const response = await postingController.createInstagramCarouselPosting(projectId, data);
    return response;
  },
};

export default postingService;
