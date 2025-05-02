"use client";

import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/utils/useToast";
import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";
import { UseFormSetError } from "react-hook-form";
import Link from "next/link";

const schema = z.object({
  email: z.string().email("아이디는 이메일 주소 형태로 입력해주세요."),
  password: z.string().min(1, "비밀번호를 입력해 주세요."),
});

type FormData = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const { register, handleSubmit, setError, watch } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const { toast } = useToast();
  const email = watch("email") ?? "";
  const password = watch("password") ?? "";
  const isInputFilled = email.trim() !== "" && password.trim() !== "";

  const handleSignInSubmit = async (data: FieldValues, setError: UseFormSetError<any>) => {
    try {
      const userExists = false;
      const passwordCorrect = false;

      if (!userExists) {
        const message = "가입되지 않은 이메일 주소예요.";
        setError("email", { type: "manual", message });
        toast({ variant: "error", description: message });
        return;
      }

      if (!passwordCorrect) {
        const message = "아이디 또는 비밀번호가 맞지 않아요.\n다시 확인해주세요.";
        setError("password", { type: "manual", message });
        toast({ variant: "error", description: message });
        return;
      }

      console.log("로그인 성공", data);
    } catch (err) {
      console.error("로그인 실패", err);
    }
  };

  const handleInvalidForm = (errors: Record<string, any>) => {
    const firstError = errors.email?.message || errors.password?.message;
    if (firstError) {
      toast({ variant: "error", description: firstError });
    }
  };

  return (
    <section className="w-full flex flex-col gap-3">
      <div className="w-full px-4 flex flex-col gap-2">
        <p className="text-t3 text-grayscale-800">로그인</p>
        <p className="text-b3R text-grayscale-800">이메일 주소와 비밀번호를 입력해 주세요.</p>
      </div>

      <form
        onSubmit={handleSubmit(
          data => handleSignInSubmit(data, setError),
          errors => handleInvalidForm(errors)
        )}
        className="flex flex-col gap-5 mt-2">
        <div className="flex flex-col gap-2">
          <Input placeholder="zaply@example.com" className="rounded-full" {...register("email")} />
          <Input
            placeholder="영문 대소문자, 특수문자 포함 8-20자"
            className="rounded-full"
            type="password"
            {...register("password")}
          />
        </div>
        <Button
          variant={isInputFilled ? "active" : "deactive"}
          type="submit"
          disabled={!isInputFilled}>
          로그인
        </Button>
      </form>

      <div className="flex gap-1 items-center justify-center">
        <Link href="/" className="px-[10px] py-1 text-b4M text-blue-blueblack cursor-pointer">
          이메일 찾기
        </Link>
        <div className="w-[1px] h-[14px] bg-grayscale-400" />
        <Link href="/" className="px-[10px] py-1 text-b4M text-blue-blueblack cursor-pointer">
          비밀번호 찾기
        </Link>
      </div>
    </section>
  );
};

export default SignInForm;
