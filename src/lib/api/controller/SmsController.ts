import { apiClient } from "../axios/instance";
import { ApiResponse } from "../model/response";
import { CertificationSmsRequest, SendSmsRequest } from "../model/sms";

const smsController = {
  sendSms: async (data: SendSmsRequest): Promise<ApiResponse<null>> => {
    const response = await apiClient.post<ApiResponse<null>>("/sms/send", data);
    return response.data;
  },

  certifySms: async (data: CertificationSmsRequest): Promise<ApiResponse<string>> => {
    const response = await apiClient.post<ApiResponse<string>>("/sms/certification", data);
    return response.data;
  },
};

export default smsController;
