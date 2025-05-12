"use client";

import { TopBar, ArrowIcon } from "@/components";
import { useRouter } from "next/navigation";

const SignInHeader = () => {
  const router = useRouter();

  return (
    <header className="mt-[66px] w-full flex flex-col items-center justify-center">
      <TopBar
        left={
          <ArrowIcon
            type="left"
            onClick={() => router.push("/onboarding")}
            className="cursor-pointer"
          />
        }
      />
      <p className="italic text-center text-blue-700 font-creato700 text-h2">
        Create Once,
        <br />
        Spread with Zaply
      </p>
    </header>
  );
};

export default SignInHeader;
