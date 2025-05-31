import { PasswordValidation } from "@/types";
import { z } from "zod";

const HAS_ENGLISH = /[a-zA-Z]/;
const HAS_NUMBER = /\d/;
const LENGTH_VALID = /^.{8,20}$/;

export const passwordLengthSchema = z.string().regex(LENGTH_VALID, "8-20자 이내로 입력해주세요");
export const passwordEnglishSchema = z.string().regex(HAS_ENGLISH, "영문을 포함해야 합니다");
export const passwordNumberSchema = z.string().regex(HAS_NUMBER, "숫자를 포함해야 합니다");

export const getPasswordValidationErrors = (password: string): PasswordValidation => {
  const validations = {
    length: passwordLengthSchema.safeParse(password),
    english: passwordEnglishSchema.safeParse(password),
    number: passwordNumberSchema.safeParse(password),
  };

  return {
    isValid: Object.values(validations).every(result => result.success),
    errors: {
      length: !validations.length.success,
      english: !validations.english.success,
      number: !validations.number.success,
    },
    messages: {
      length: !validations.length.success ? "8-20자 이내로 입력해주세요" : null,
      english: !validations.english.success ? "영문을 포함해야 합니다" : null,
      number: !validations.number.success ? "숫자를 포함해야 합니다" : null,
    },
  };
};

export const passwordCheckSchema = z
  .object({
    password: z
      .string()
      .min(1, "비밀번호를 입력해주세요")
      .regex(HAS_ENGLISH, "영문을 포함해야 합니다")
      .regex(HAS_NUMBER, "숫자를 포함해야 합니다")
      .regex(LENGTH_VALID, "8-20자 이내로 입력해주세요"),
    passwordConfirm: z.string().min(1, "비밀번호 확인을 입력해주세요"),
  })
  .superRefine((data, ctx) => {
    if (
      data.password !== undefined &&
      data.passwordConfirm !== undefined &&
      data.password !== data.passwordConfirm
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["passwordConfirm"],
        message: "비밀번호가 일치하지 않습니다.",
      });
    }
  });

export type passwordCheckType = z.infer<typeof passwordCheckSchema>;
