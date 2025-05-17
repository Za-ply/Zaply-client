import accountController from "../controller/AccountController";

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
};

export default accountService;
