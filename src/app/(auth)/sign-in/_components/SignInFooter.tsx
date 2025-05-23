import { EmailIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";

const SignInFooter = () => {
  return (
    <footer className="w-full flex flex-col gap-4 items-center justify-between mt-[64px]">
      <div className="flex items-center justify-center w-full gap-5">
        <div className="basis-[28%] h-[1px] bg-grayscale-400" />
        <p className="basis-[44%] text-b3R text-grayscale-800 text-center">
          회원가입 / 소셜 로그인
        </p>
        <div className="basis-[28%] h-[1px] bg-grayscale-400" />
      </div>
      <div className="flex items-center justify-center gap-3">
        <Link
          href="/policy"
          className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-blue-700 cursor-pointer">
          <EmailIcon stroke="#fefefe" className="w-[24px] h-[24px]" />
        </Link>
        <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-grayscale-100 border border-1-grayscale-300 cursor-pointer">
          <Image src={"/assets/svgs/google-logo.svg"} alt="google-logo" width={24} height={24} />
        </div>
      </div>
      <p className="text-grayscale-600 text-b4R">
        로그인 오류 시 <span className="underline">zaply.official@gmail.com</span>
      </p>
    </footer>
  );
};

export default SignInFooter;
