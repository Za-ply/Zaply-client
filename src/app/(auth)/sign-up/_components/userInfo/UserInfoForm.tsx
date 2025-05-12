import { Button, Input } from "@/components";
import { userInfoType } from "@/lib/zod";
import { UseFormReturn } from "react-hook-form";
import { useCallback, useEffect, useRef, useState } from "react";
import useAutoFocus from "../hooks/useAutoFocus";
import { useToast } from "@/utils/useToast";
import { cn } from "@/utils";
import useTimer from "../hooks/useTimer";
import smsService from "@/lib/api/service/SmsService";

const UserInfoForm = ({
  formMethods,
  checkVerifyCode,
  setCheckVerifyCode,
}: {
  formMethods: UseFormReturn<userInfoType>;
  checkVerifyCode: boolean;
  setCheckVerifyCode: (value: boolean) => void;
}) => {
  const { toast } = useToast();
  const { register, setValue, watch, formState } = formMethods;

  const frontRRN = watch("frontRRN");
  const backRRN = watch("backRRN");

  const backInputRef = useRef<HTMLInputElement>(null);
  const phoneNumberInputRef = useRef<HTMLInputElement>(null);

  const [isSendVerifyCode, setIsSendVerifyCode] = useState(false);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);

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

  const handleSendVerifyCode = async () => {
    const phoneNumber = watch("phoneNumber");

    try {
      await smsService.sendSms({ phoneNum: phoneNumber });

      toast({
        variant: "default",
        description: `인증번호가 전송되었습니다.\n 문자를 확인하고 인증번호를 입력해주세요.`,
      });
      setIsSendVerifyCode(true);
    } catch (err) {
      toast({
        variant: "error",
        description: `인증번호 전송에 실패했습니다.`,
      });
      console.error("인증번호 전송 실패:", err);
    }
  };

  const handleCheckVerifyCode = async () => {
    const phoneNumber = watch("phoneNumber");
    const verifyCode = watch("verifyCode");

    try {
      const res = await smsService.certifySms({ phoneNum: phoneNumber, authNum: verifyCode });

      if (res.result === "SUCCESS") {
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
    } catch (err) {
      toast({
        variant: "error",
        description: `인증번호 검증에 실패했습니다.`,
      });
      console.error("인증번호 검증 실패:", err);
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
