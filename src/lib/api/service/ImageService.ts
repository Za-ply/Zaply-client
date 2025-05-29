import imageController from "../controller/ImageController";

const imageService = {
  getPresignedUrl: async ({ projectId, fileName }: { projectId: number; fileName: string }) => {
    const response = await imageController.getPresignedUrl({ projectId, fileName });
    return response;
  },
};

export default imageService;
