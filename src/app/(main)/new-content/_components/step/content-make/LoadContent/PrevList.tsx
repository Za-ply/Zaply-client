import { ChevronIcon } from "@/components";
import { usePostStore } from "../../../store";
import { useRouter } from "next/navigation";

const PrevList = () => {
  const { setIsShowDetail } = usePostStore();
  const router = useRouter();
  return (
    <div
      className="w-[95px] flex items-center justify-center gap-1"
      onClick={e => {
        e.stopPropagation();
        router.back();
        setIsShowDetail(false);
      }}>
      <ChevronIcon type="left" />
      <p className="text-t4 text-blue-blueblack">목록 보기</p>
    </div>
  );
};

export default PrevList;
