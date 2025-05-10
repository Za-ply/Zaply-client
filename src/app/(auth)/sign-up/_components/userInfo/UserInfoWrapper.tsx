"use client";

import { Button } from "@/components/common/button";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useToast } from "@/utils/useToast";
import UserInfoForm from "./UserInfoForm";
import { userInfoType, userInfoSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";

const UserInfoWrapper = () => {
  const router = useRouter();
  const { toast } = useToast();
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
      /** api 호출 로직 추후 구현 */
      router.push("/sign-up-complete");
    })();
  };

  return (
    <article className="flex flex-col justify-between min-h-real-screen pb-[56px]">
      <div className="pt-[139px] flex flex-col space-y-3">
        <UserInfoForm formMethods={formMethods} />
      </div>
      <Button variant={isValid ? "active" : "deactive"} onClick={handleSubmit} disabled={!isValid}>
        다음
      </Button>
    </article>
  );
};

export default UserInfoWrapper;
