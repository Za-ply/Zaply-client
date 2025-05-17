"use client";

import PolicyList from "./PolicyList";
import { usePolicyStore } from "./store/policy-store";
import { Button, ZaplyColorLogoIcon } from "@/components";
import { useRouter } from "next/navigation";
import { POLICY_LIST } from "./constants";
import { useSignUpStore } from "@/stores/useSignUpStore";

const PolicyContainer = () => {
  const router = useRouter();
  const {
    isAllChecked,
    requiredChecks,
    optionalChecked,
    setAllChecked,
    setRequiredCheck,
    setOptionalChecked,
  } = usePolicyStore();

  const setAgreements = useSignUpStore(state => state.setAgreements);

  const handleNext = () => {
    setAgreements({
      termsOfServiceAgreed: requiredChecks[0],
      privacyPolicyAgreed: requiredChecks[1],
      marketingAgreed: optionalChecked,
    });

    router.push("/sign-up?state=EMAIL");
  };

  return (
    <article className="flex flex-col justify-between min-h-real-screen pb-[56px]">
      <div className="space-y-[35px] pt-[139px]">
        <ZaplyColorLogoIcon />
        <p className="text-t1 text-grayscale-800">서비스 약관 동의</p>
        <div className="flex flex-col gap-5 mb-[193px]">
          <PolicyList
            content="약관 전체 동의"
            isAll={true}
            isChecked={isAllChecked}
            setIsChecked={setAllChecked}
          />
          <span className="border-b border-grayscale-300" />
          {POLICY_LIST.map((policy, index) => (
            <PolicyList
              key={index}
              content={policy}
              isAll={false}
              isOptional={index === 2}
              isChecked={index === 2 ? optionalChecked : requiredChecks[index]}
              setIsChecked={checked =>
                index === 2 ? setOptionalChecked(checked) : setRequiredCheck(index, checked)
              }
            />
          ))}
        </div>
      </div>

      <Button
        variant={requiredChecks.every(check => check) ? "active" : "deactive"}
        disabled={!requiredChecks.every(check => check)}
        onClick={handleNext}>
        다음
      </Button>
    </article>
  );
};

export default PolicyContainer;
