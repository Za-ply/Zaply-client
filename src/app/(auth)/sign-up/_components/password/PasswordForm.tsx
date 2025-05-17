import { Input } from "@/components";
import { passwordCheckType } from "@/lib/zod/schema-password";
import { PasswordValidation } from "@/types";
import { UseFormReturn } from "react-hook-form";

const PasswordForm = ({
  formMethods,
  validation,
}: {
  formMethods: UseFormReturn<passwordCheckType>;
  validation: PasswordValidation;
}) => {
  return (
    <form onSubmit={() => null}>
      <div className="flex flex-col space-y-[18px]">
        <div className="flex flex-col space-y-3">
          <label className="text-t4 text-grayscale-800">비밀번호 입력</label>
          <Input
            type="password"
            placeholder="영문 대소문자, 특수문자 포함 8-20자"
            checkItems={[
              { label: "영문 포함", isChecked: !validation.errors.english },
              { label: "숫자 포함", isChecked: !validation.errors.number },
              { label: "8-20자 이내", isChecked: !validation.errors.length },
            ]}
            {...formMethods.register("password")}
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label className="text-t4 text-grayscale-800">비밀번호 확인</label>
          <Input
            type="password"
            placeholder="비밀번호를 확인해주세요"
            checkItems={[{ label: "비밀번호 일치", isChecked: formMethods.formState.isValid }]}
            {...formMethods.register("passwordConfirm")}
          />
        </div>
      </div>
    </form>
  );
};

export default PasswordForm;
