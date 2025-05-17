import Image, { StaticImageData } from "next/image";
import {
  facebookCircle,
  facebookCircleMono,
  instagramCircle,
  instagramCircleMono,
  threadCircle,
  threadCircleMono,
} from "@public/assets/images/sns";
import { cn } from "@/utils";
import { useSnsLinkStore } from "../../connect/_components/store/link-store";
import { useSelectedSocialStore } from "../../connect/_components/store/social-store";

export type SnsType = "instagram" | "thread" | "facebook";

const snsMap: Record<SnsType, { linked: StaticImageData; unlinked: StaticImageData }> = {
  instagram: {
    linked: instagramCircleMono,
    unlinked: instagramCircle,
  },
  thread: {
    linked: threadCircleMono,
    unlinked: threadCircle,
  },
  facebook: {
    linked: facebookCircleMono,
    unlinked: facebookCircle,
  },
};

export const SnsProfile = ({ type, className }: { type: SnsType; className?: string }) => {
  const isLinked = useSnsLinkStore(state => state.linkedStatus[type]);
  const { selected } = useSelectedSocialStore();
  const icon = snsMap[type];

  const shouldShowFullProfile = isLinked || selected?.toLowerCase() === type;

  return shouldShowFullProfile ? (
    <div className={cn("relative w-[48px] h-[48px] bg-grayscale-400 rounded-full", className)}>
      <Image
        src={icon.unlinked}
        width={20}
        height={20}
        alt={`${type} badge`}
        className="absolute bottom-[-1px] right-[-3px]"
      />
    </div>
  ) : (
    <Image src={icon.linked} width={48} height={48} alt={`${type} icon`} className="rounded-full" />
  );
};

export default SnsProfile;
