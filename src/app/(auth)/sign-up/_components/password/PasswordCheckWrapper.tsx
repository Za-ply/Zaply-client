"use client";

import { Button } from "@/components/common/button";
import { useRouter } from "next/navigation";
import { emailCheckSchema, emailCheckType } from "@/lib/zod/schema-email";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/utils/useToast";
import PasswordForm from "./PasswordForm";
import {
  getPasswordValidationErrors,
  passwordCheckSchema,
  passwordCheckType,
} from "@/lib/zod/schema-password";
import { useSignUpStore } from "@/stores/useSignUpStore";

const PasswordCheckWrapper = () => {
  const router = useRouter();
  const { toast } = useToast();
  const formMethods = useForm<passwordCheckType>({
    resolver: zodResolver(passwordCheckSchema),
    mode: "onChange",
  });

  const {
    watch,
    formState: { isValid },
  } = formMethods;

  const password = watch("password");
  const validation = getPasswordValidationErrors(password);

  const handleSubmit = () => {
    formMethods.handleSubmit(data => {
      useSignUpStore.getState().setPassword(data.password);
      // console.log(data.password);
      // console.log(data.passwordConfirm);

      // console.log("이메일" + data.email);

      /** api 호출 로직 추후 구현 */

      // toast({
      //   variant: "error",
      //   description: `이미 가입된 이메일입니다.\n 다른 이메일로 가입해주세요.`,
      // });
      router.push("/sign-up?state=USER_INFO");
    })();
  };

  return (
    <article className="flex flex-col justify-between min-h-real-screen pb-[56px]">
      <div className="pt-[139px] flex flex-col space-y-3">
        <PasswordForm formMethods={formMethods} validation={validation} />
      </div>
      <Button variant={isValid ? "active" : "deactive"} onClick={handleSubmit} disabled={!isValid}>
        다음
      </Button>
    </article>
  );
};

export default PasswordCheckWrapper;
