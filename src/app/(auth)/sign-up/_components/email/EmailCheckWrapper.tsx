"use client";

import { Button } from "@/components/common/button";
import { useRouter } from "next/navigation";
import { emailCheckSchema, emailCheckType } from "@/lib/zod/schema-email";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/utils/useToast";
import EmailForm from "./EmailForm";
import { useSignUpStore } from "@/stores/useSignUpStore";
import { authService } from "@/lib/api/service";

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
    formMethods.handleSubmit(async data => {
      try {
        const isDuplicate = await authService.checkEmailDuplicate(data.email);
        if (isDuplicate) {
          toast({
            variant: "error",
            description: `이미 가입된 이메일입니다.\n다른 이메일로 가입해주세요.`,
          });
          return;
        }

        useSignUpStore.getState().setEmail(data.email);
        router.push("/sign-up?state=PASSWORD");
      } catch (err) {
        toast({
          variant: "error",
          description: `이메일 확인 중 문제가 발생했습니다.`,
        });
        console.error(err);
      }
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
