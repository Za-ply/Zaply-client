"use client";

import { TopBar } from "@/components/common/topBar";
import { ArrowIcon } from "@/components/icons";
import { useRouter } from "next/navigation";

const SignInHeader = () => {
  const router = useRouter();

  return (
    <header className="mt-[60px] w-full flex flex-col items-center justify-center">
      <TopBar
        left={
          <ArrowIcon
            type="left"
            onClick={() => router.push("/onboarding")}
            className="cursor-pointer"
          />
        }
      />
      <p className="font-creato700 italic text-h2 text-blue-700 text-center">
        Create Once,
        <br />
        Spread with Zaply
      </p>
    </header>
  );
};

export default SignInHeader;
