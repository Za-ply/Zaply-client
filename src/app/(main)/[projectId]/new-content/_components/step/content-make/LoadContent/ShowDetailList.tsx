import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useGetSNSPostingDetail } from "@/hooks/query/usePosting";
import { Skeleton } from "@/components";

const ShowDetailList = ({ selectedOption }: { selectedOption: string }) => {
  const searchParams = useSearchParams();
  const postId = searchParams.get("postId");

  const { data, isLoading } = useGetSNSPostingDetail({
    query: {
      snsType:
        selectedOption === "Instagram"
          ? "INSTAGRAM"
          : selectedOption === "Facebook"
            ? "FACEBOOK"
            : "THREADS",
      mediaId: postId!,
    },
    enabled: !!postId,
  });

  if (isLoading) {
    return (
      <div className="h-[528px] pb-[108px] px-5">
        <div className="flex items-center justify-start w-full gap-2 mb-5 ">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} className="w-[120px] h-[160px] rounded-[2px]" />
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} className="w-full h-4 rounded-[2px]" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="h-[528px] pb-[108px] px-5 overflow-y-auto scrollbar-thin scrollbar-thumb-grayscale-400 scrollbar-track-transparent">
      <div className="flex items-center justify-start w-full gap-2 mb-5 overflow-x-auto scrollbar-hide">
        {data?.data?.postingImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="post-image"
            width={120}
            height={160}
            placeholder="blur"
            blurDataURL="/assets/images/blur.png"
            className="min-w-[120px] h-[160px] object-cover"
          />
        ))}
      </div>
      <p className="text-b4R text-grayscale-800">{data?.data?.postingContent}</p>
    </div>
  );
};

export default ShowDetailList;
