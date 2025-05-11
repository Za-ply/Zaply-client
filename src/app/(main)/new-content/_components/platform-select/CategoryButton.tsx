import { Button } from "@/components/common/button";
import { Category } from "@/types/platform";
import { cn } from "@/utils";

interface CategoryButtonProps {
  type: Category;
  isSelected: boolean;
  onClick: () => void;
}

const CategoryButton = ({ type, isSelected, onClick }: CategoryButtonProps) => {
  return (
    <Button
      className={cn("col-span-1 py-2 px-[6px] rounded-[4px] border  bg-grayscale-100 h-[33px]", {
        "border-blue-700 text-blue-700": isSelected,
        "border-grayscale-300 text-grayscale-600": !isSelected,
      })}
      onClick={e => {
        e.stopPropagation();
        onClick();
      }}>
      <p className="text-b3M">
        {type === Category.POST ? "게시글" : type === Category.REELS ? "릴스" : "스토리"}
      </p>
    </Button>
  );
};

export default CategoryButton;
