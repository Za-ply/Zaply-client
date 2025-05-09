"use client";

import { Button } from "@/components/common/button";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useToast } from "@/utils/useToast";
import UserInfoForm from "./UserInfoForm";
import { userInfoType, userInfoSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

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
    formMethods.handleSubmit(data => {
      console.log(data);
      router.push("/sign-up-complete");
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
