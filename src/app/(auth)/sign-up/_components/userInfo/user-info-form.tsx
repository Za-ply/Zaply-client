import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";
import { userInfoType } from "@/lib/zod";
import { UseFormReturn } from "react-hook-form";
import { useCallback, useEffect, useRef, useState } from "react";
import useAutoFocus from "../hooks/useAutoFocus";
import { useToast } from "@/utils/useToast";
import { cn } from "@/utils";
import useTimer from "../hooks/useTimer";

const UserInfoForm = ({ formMethods }: { formMethods: UseFormReturn<userInfoType> }) => {
  const { toast } = useToast();
  const { register, setValue, watch, formState } = formMethods;

  const frontRRN = watch("frontRRN");
  const backRRN = watch("backRRN");

  const backInputRef = useRef<HTMLInputElement>(null);
  const phoneNumberInputRef = useRef<HTMLInputElement>(null);

  const [isSendVerifyCode, setIsSendVerifyCode] = useState(false);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const [checkVerifyCode, setCheckVerifyCode] = useState(false);

  const { formatTimer } = useTimer({
    defaultTime: 180,
    isActive: isSendVerifyCode && !checkVerifyCode,
    onComplete: () => {
      toast({
        variant: "error",
        description: `인증번호가 만료되었습니다.\n 인증번호를 다시 전송해주세요.`,
      });
    },
  });

  useAutoFocus(frontRRN, 6, backInputRef);
  useAutoFocus(backRRN, 1, phoneNumberInputRef);

  const handleFrontRRNChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/[^0-9]/g, "");
      if (value.length <= 6) {
        setValue("frontRRN", value, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const handleBackRRNChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/[^0-9]/g, "");
      if (value.length <= 1) {
        setValue("backRRN", value, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const handlePhoneNumberChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/[^0-9]/g, "");
      setValue("phoneNumber", value, { shouldValidate: true });
    },
    [setValue]
  );

  const handleSendVerifyCode = () => {
    /** 인증번호 호출 api 로직 구현 */
    const phoneNumber = watch("phoneNumber");

    toast({
      variant: "default",
      description: `인증번호가 전송되었습니다.\n 문자를 확인하고 인증번호를 입력해주세요.`,
    });
    setIsSendVerifyCode(true);
  };

  const handleCheckVerifyCode = () => {
    /** 인증번호 검증 api 로직 구현 */
    const verifyCode = watch("verifyCode");

    /** 테스트 용 로직 */
    if (verifyCode === "123456") {
      toast({
        variant: "check",
        description: `인증이 완료되었습니다.`,
      });
      setCheckVerifyCode(true);
    } else {
      toast({
        variant: "error",
        description: `인증번호가 잘못되었습니다.`,
      });
    }
  };

  useEffect(() => {
    const phoneNumber = watch("phoneNumber");
    if (phoneNumber && !formState.errors.phoneNumber) {
      setIsPhoneNumberValid(true);
    }
  }, [watch, formState.errors.phoneNumber]);

  return (
    <form onSubmit={e => e.preventDefault()}>
      <div className="flex flex-col space-y-[18px]">
        {/* 이름 입력 필드 */}
        <div className="flex flex-col space-y-3">
          <label className="text-t4 text-grayscale-800">이름</label>
          <Input type="text" placeholder="이름을 입력해주세요" {...register("name")} />
        </div>

        {/* 주민등록번호 입력 필드 */}
        <div className="flex flex-col space-y-3">
          <label className="text-t4 text-grayscale-800">주민등록번호</label>
          <div className="flex flex-row items-center gap-2">
            <Input
              type="text"
              placeholder="생년월일"
              value={frontRRN || ""}
              maxLength={6}
              onChange={handleFrontRRNChange}
            />
            <span className="border-b border-grayscale-500 w-[12.5px]" />
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="0"
                value={backRRN || ""}
                maxLength={1}
                onChange={handleBackRRNChange}
                ref={backInputRef}
              />
              <span className="absolute top-[15px] left-8 h-[21px]">******</span>
            </div>
          </div>
        </div>

        {/* 휴대폰 번호 입력 필드 */}
        <div className="flex flex-col space-y-3">
          <label className="text-t4 text-grayscale-800">휴대폰 번호</label>
          <div className="flex gap-[10px]">
            <Input
              type="text"
              placeholder="-없이 번호만 입력해주세요"
              {...register("phoneNumber")}
              onChange={handlePhoneNumberChange}
              ref={phoneNumberInputRef}
            />
            <Button
              type="button"
              variant={isPhoneNumberValid ? "active" : "deactive"}
              size="sm"
              className={cn("w-[120px] whitespace-nowrap text-grayscale-100", {
                "text-blue-700 border border-grayscale-300 bg-grayscale-100": isSendVerifyCode,
              })}
              onClick={handleSendVerifyCode}
              disabled={!isPhoneNumberValid}>
              {isSendVerifyCode ? "인증번호 재전송" : "인증번호 전송"}
            </Button>
          </div>
        </div>

        {/* 인증번호 검증 필드 */}
        {isSendVerifyCode && (
          <div className="flex flex-col space-y-3">
            <label className="text-t4 text-grayscale-800">인증 번호</label>
            <div className="flex gap-[10px]">
              <Input
                type="timer"
                timerText={formatTimer}
                placeholder="인증번호 입력"
                {...register("verifyCode")}
              />
              <Button
                type="button"
                variant="active"
                size="sm"
                className="px-8 whitespace-nowrap text-grayscale-100"
                onClick={handleCheckVerifyCode}>
                인증하기
              </Button>
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

export default UserInfoForm;
