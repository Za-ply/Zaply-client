"use client";

import { Button } from "@/components";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import PasswordForm from "./PasswordForm";
import {
  getPasswordValidationErrors,
  passwordCheckSchema,
  passwordCheckType,
} from "@/lib/zod/schema-password";
import { useSignUpStore } from "@/stores/useSignUpStore";

const PasswordCheckWrapper = () => {
  const router = useRouter();
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
