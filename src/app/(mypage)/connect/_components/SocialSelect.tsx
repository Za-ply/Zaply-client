import Image from "next/image";
import { instagram, thread, facebook } from "@public/assets/images/sns";
import { useState } from "react";
import { cn } from "@/utils";
import { CheckIcon } from "@/components/icons";

const snsList = [
  {
    name: "Instagram",
    icon: instagram,
    description: "베타 테스트에서는 '비즈니스' 계정만 연결 가능해요.",
  },
  {
    name: "Thread",
    icon: thread,
  },
  {
    name: "Facebook",
    icon: facebook,
    description: "베타 테스트에서는 '페이지' 계정만 연결 가능해요.",
  },
];

export const SocialSelect = () => {
  const [social, setSocial] = useState<String | null>(null);

  return (
    <div className="w-full flex flex-col gap-4">
      {snsList.map(({ name, icon, description }) => (
        <div
          key={name}
          className={cn(
            "w-full px-4 py-3 rounded-[12px] border border-grayscale-300 cursor-pointer",
            name === social && "border-blue-700"
          )}
          onClick={() => setSocial(name)}>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <Image src={icon} width={24} height={24} alt={name} />
                <p className="text-b2M text-grayscale-900">{name}</p>
              </div>
              {name === social && <CheckIcon className="text-blue-700" />}
            </div>
            {description && <p className="text-b4R text-grayscale-600">{description}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialSelect;
