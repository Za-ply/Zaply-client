import accountController from "../controller/AccountController";
import { InstagramRequest, SnsType, UnlinkResponse } from "../model";

const accountService = {
  threads: async (): Promise<void> => {
    try {
      const response = await accountController.threads();

      return response;
    } catch (error) {
      console.error("Login Threads failed: ", error);
      throw new Error(error as string);
    }
  },

  facebook: async (): Promise<void> => {
    try {
      const response = await accountController.facebook();

      return response;
    } catch (error) {
      console.error("Login Facebook failed: ", error);
      throw new Error(error as string);
    }
  },

  instagram: async (): Promise<void> => {
    try {
      const response = await accountController.instagram();

      return response;
    } catch (error) {
      console.error("Login Instagram failed: ", error);
      throw new Error(error as string);
    }
  },

  instagramLink: async (data: InstagramRequest): Promise<void> => {
    try {
      const response = await accountController.instagramLink(data);
      return response;
    } catch (error) {
      console.error("Instagram Link failed: ", error);
      throw new Error(error as string);
    }
  },

  unlink: async (snsType: SnsType): Promise<UnlinkResponse> => {
    try {
      const response = await accountController.unlink(snsType);
      return response;
    } catch (error) {
      console.error("Unlink failed: ", error);
      throw new Error(error as string);
    }
  },
};

export default accountService;
