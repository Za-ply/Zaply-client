"use client";

import { Button } from "@/components";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useToast } from "@/utils/useToast";
import UserInfoForm from "./UserInfoForm";
import { userInfoType, userInfoSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { authController } from "@/lib/api/controller";
import { useSignUpStore } from "@/stores/useSignUpStore";

const UserInfoWrapper = () => {
  const router = useRouter();
  const { toast } = useToast();

  const [checkVerifyCode, setCheckVerifyCode] = useState(false);

  const formMethods = useForm<userInfoType>({
    resolver: zodResolver(userInfoSchema),
    mode: "onChange",
  });

  const {
    formState: { isValid },
  } = formMethods;

  const handleSubmit = () => {
    formMethods.handleSubmit(async data => {
      try {
        const { email, password, termsOfServiceAgreed, privacyPolicyAgreed, marketingAgreed } =
          useSignUpStore.getState();

        const requestBody = {
          email,
          password,
          phoneNumber: data.phoneNumber,
          residentNumber: `${data.frontRRN}-${data.backRRN}`,
          termsOfServiceAgreed,
          privacyPolicyAgreed,
          marketingAgreed,
        };

        await authController.signUp(requestBody);
        useSignUpStore.getState().reset();
        router.push("/sign-up-complete");
      } catch (err) {
        toast({
          variant: "error",
          description: `회원가입에 실패했습니다. \n 다시 시도해주세요.`,
        });
        console.error("회원가입 에러:", err);
      }
    })();
  };

  return (
    <article className="flex flex-col justify-between min-h-real-screen pb-[56px]">
      <div className="pt-[139px] flex flex-col space-y-3">
        <UserInfoForm
          formMethods={formMethods}
          checkVerifyCode={checkVerifyCode}
          setCheckVerifyCode={setCheckVerifyCode}
        />
      </div>
      <Button
        variant={isValid && checkVerifyCode ? "active" : "deactive"}
        onClick={handleSubmit}
        disabled={!isValid || !checkVerifyCode}>
        다음
      </Button>
    </article>
  );
};

export default UserInfoWrapper;
