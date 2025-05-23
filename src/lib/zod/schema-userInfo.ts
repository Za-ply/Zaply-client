import { z } from "zod";

const PHONE_PATTERN = /^[0-9]{10,11}$/;

export const userInfoSchema = z.object({
  name: z.string().min(1, "이름을 입력해주세요."),
  frontRRN: z.string().min(1, "주민등록번호를 입력해주세요."),
  backRRN: z.string().min(1, "주민등록번호를 입력해주세요."),
  phoneNumber: z
    .string()
    .min(1, "휴대폰 번호를 입력해주세요.")
    .regex(PHONE_PATTERN, "올바른 전화번호 형식을 입력해주세요"),
  verifyCode: z.string().min(1, "인증번호를 입력해주세요"),
});

export type userInfoType = z.infer<typeof userInfoSchema>;
