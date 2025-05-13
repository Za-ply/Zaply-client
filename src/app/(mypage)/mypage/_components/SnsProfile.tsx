import Image, { StaticImageData } from "next/image";
import {
  facebookCircle,
  facebookCircleMono,
  instagramCircle,
  instagramCircleMono,
  threadCircle,
  threadCircleMono,
} from "@public/assets/images/sns";

export type SnsType = "instagram" | "thread" | "facebook";

type SnsProfileProps = {
  type: SnsType;
  isLinked: boolean;
};

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

export const SnsProfile = ({ type, isLinked }: SnsProfileProps) => {
  const icon = snsMap[type];

  return isLinked ? (
    <div className="relative w-[48px] h-[48px] bg-grayscale-400 rounded-full">
      <Image
        src={icon.unlinked}
        width={20}
        height={20}
        alt={`${type} linked`}
        className="absolute bottom-0 right-0"
      />
    </div>
  ) : (
    <Image src={icon.linked} width={48} height={48} alt={`${type}`} className="rounded-full" />
  );
};

export default SnsProfile;
