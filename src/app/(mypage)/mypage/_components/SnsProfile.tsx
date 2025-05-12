import Image, { StaticImageData } from "next/image";
import {
  facebookCircle,
  facebookCircleMono,
  instagramCircle,
  instagramCircleMono,
  threadCircle,
  threadCircleMono,
} from "@public/assets/images/sns";

type SnsType = "instagram" | "thread" | "facebook";

type SnsProfileProps = {
  linkedStatus: Record<SnsType, boolean>;
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

export const SnsProfile = ({ linkedStatus }: SnsProfileProps) => {
  return (
    <div className="flex gap-3 items-center">
      {Object.entries(snsMap).map(([sns, icons]) => {
        const isLinked = linkedStatus[sns as SnsType];
        return isLinked ? (
          <div key={sns} className="relative w-[48px] h-[48px] bg-grayscale-400 rounded-full">
            <Image
              src={icons.unlinked}
              width={20}
              height={20}
              alt={`${sns} linked`}
              className="absolute bottom-0 right-0"
            />
          </div>
        ) : (
          <Image key={sns} src={icons.linked} width={48} height={48} alt={`${sns}`} />
        );
      })}
    </div>
  );
};

export default SnsProfile;
