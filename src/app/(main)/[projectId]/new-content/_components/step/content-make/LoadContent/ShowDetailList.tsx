import Image from "next/image";
import { mockPostList } from "../../../mocks";
import { useSearchParams } from "next/navigation";

const ShowDetailList = () => {
  const searchParams = useSearchParams();
  const postId = searchParams.get("postId");

  return (
    <div className="h-[528px] pb-[108px] px-5 overflow-y-auto scrollbar-thin scrollbar-thumb-grayscale-400 scrollbar-track-transparent">
      <div className="flex items-center justify-start w-full gap-2 mb-5 overflow-x-auto scrollbar-hide">
        {mockPostList[Number(postId) - 1]?.imageData.map((image, index) => (
          <Image key={index} src={image.imageUrl} alt="post-image" width={120} height={160} />
        ))}
      </div>
      <p className="text-b4R text-grayscale-800">{mockPostList[Number(postId) - 1]?.content}</p>
    </div>
  );
};

export default ShowDetailList;
