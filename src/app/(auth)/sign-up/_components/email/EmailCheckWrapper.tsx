"use client";

import { Button } from "@/components/common/button";
import { useRouter } from "next/navigation";
import { emailCheckSchema, emailCheckType } from "@/lib/zod/schema-email";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/utils/useToast";
import EmailForm from "./EmailForm";
import { useSignUpStore } from "@/stores/useSignUpStore";

const EmailCheckWrapper = () => {
  const router = useRouter();
  const { toast } = useToast();
  const formMethods = useForm<emailCheckType>({
    resolver: zodResolver(emailCheckSchema),
    mode: "onChange",
  });

  const {
    formState: { isValid },
  } = formMethods;

  const handleSubmit = () => {
    formMethods.handleSubmit(data => {
      useSignUpStore.getState().setEmail(data.email);
      // console.log("이메일" + data.email);

      /** api 호출 로직 추후 구현 */

      // toast({
      //   variant: "error",
      //   description: `이미 가입된 이메일입니다.\n 다른 이메일로 가입해주세요.`,
      // });
      router.push("/sign-up?state=PASSWORD");
    })();
  };

  return (
    <article className="flex flex-col justify-between min-h-real-screen pb-[56px]">
      <div className="pt-[139px] flex flex-col space-y-3">
        <p className="text-t4 text-grayscale-800">이메일 입력</p>
        <EmailForm formMethods={formMethods} />
      </div>
      <Button
        variant={isValid ? "active" : "deactive"}
        onClick={handleSubmit}
        disabled={!formMethods.formState.isValid}>
        다음
      </Button>
    </article>
  );
};

export default EmailCheckWrapper;
