import { Input } from "@/components";
import { emailCheckType } from "@/lib/zod/schema-email";
import { UseFormReturn } from "react-hook-form";

const EmailForm = ({ formMethods }: { formMethods: UseFormReturn<emailCheckType> }) => {
  return (
    <form onSubmit={() => null}>
      <Input
        type="check"
        placeholder="로그인에 사용할 이메일을 입력해주세요."
        checkItems={[{ label: "유효한 이메일", isChecked: formMethods.formState.isValid }]}
        {...formMethods.register("email")}
      />
    </form>
  );
};

export default EmailForm;
