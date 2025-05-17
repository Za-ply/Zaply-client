import Image from "next/image";
import { instagram, thread, facebook } from "@public/assets/images/sns";
import { cn } from "@/utils";
import { CheckIcon } from "@/components/icons";
import { useSelectedSocialStore } from "./store/social-store";
import { useSnsLinkStore } from "./store/link-store";
import { useToast } from "@/utils/useToast";

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
  const { selected, setSelected } = useSelectedSocialStore();
  const { linkedStatus } = useSnsLinkStore();
  const { toast } = useToast();

  return (
    <div className="w-full flex flex-col gap-4">
      {snsList.map(({ name, icon, description }) => {
        const key = name.toLowerCase() as keyof typeof linkedStatus;
        const isLinked = linkedStatus[key];

        return isLinked ? (
          <div
            key={name}
            className="w-full flex items-center justify-between px-4 py-3 bg-grayscale-300 rounded-[12px] border border-grayscale-300"
            onClick={() =>
              toast({
                variant: "error",
                description: `이미 연결된 계정이 있는 플랫폼이에요.\n베타 테스트에서는 1개 계정까지만 연결할 수 있어요.`,
              })
            }>
            <div className="flex gap-2 items-center">
              <Image src={icon} width={24} height={24} alt={name} />
              <p className="text-b2M text-grayscale-900">{name}</p>
            </div>
            <p className="text-b4R text-grayscale-600">연동 완료</p>
          </div>
        ) : (
          <div
            key={name}
            className={cn(
              "w-full px-4 py-3 rounded-[12px] border border-grayscale-300 cursor-pointer transition-all duration-300 ease-in-out",
              name === selected && "border-blue-700"
            )}
            onClick={() => setSelected(name as any)}>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <Image src={icon} width={24} height={24} alt={name} />
                  <p className="text-b2M text-grayscale-900">{name}</p>
                </div>
                <div className="flex items-center gap-2">
                  {name === selected && <CheckIcon className="text-blue-700" />}
                </div>
              </div>
              {description && <p className="text-b4R text-grayscale-600">{description}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SocialSelect;
