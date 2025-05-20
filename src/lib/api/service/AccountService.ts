import accountController from "../controller/AccountController";
import { SnsType } from "../model/account";

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
  unlink: async (snsType: SnsType): Promise<void> => {
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
