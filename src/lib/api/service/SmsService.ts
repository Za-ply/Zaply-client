import smsController from "../controller/SmsController";
import { ApiResponse } from "../model";
import { CertificationSmsRequest, SendSmsRequest } from "../model/sms";

const smsService = {
  sendSms: async (data: SendSmsRequest): Promise<ApiResponse<null>> => {
    try {
      const response = await smsController.sendSms(data);
      return response;
    } catch (error) {
      console.error("SMS 전송 실패:", error);
      throw new Error("인증번호 전송에 실패했습니다.");
    }
  },

  certifySms: async (data: CertificationSmsRequest): Promise<ApiResponse<string>> => {
    try {
      const response = await smsController.certifySms(data);
      return response;
    } catch (error) {
      console.error("SMS 인증 실패:", error);
      throw new Error("인증번호 확인에 실패했습니다.");
    }
  },
};

export default smsService;
