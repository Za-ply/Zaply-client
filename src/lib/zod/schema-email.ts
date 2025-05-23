import { z } from "zod";

export const emailCheckSchema = z.object({
  email: z.string().email("이메일 형식이 올바르지 않습니다."),
});

export type emailCheckType = z.infer<typeof emailCheckSchema>;
