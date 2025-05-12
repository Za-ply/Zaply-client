import { ChevronIcon, CircleCheckBoldIcon, CircleIcon } from "@/components";
import { cn } from "@/utils";

interface PolicyListProps {
  content: string;
  isAll?: boolean;
  isOptional?: boolean;
  isChecked: boolean;
  setIsChecked: (checked: boolean) => void;
}

const PolicyList = ({
  content,
  isAll = false,
  isOptional = false,
  isChecked,
  setIsChecked,
}: PolicyListProps) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => setIsChecked(!isChecked)}>
            {isChecked ? (
              <CircleCheckBoldIcon className="text-grayscale-700" />
            ) : (
              <CircleIcon className="text-grayscale-500" />
            )}
          </button>
          <p
            className={cn("text-grayscale-800", {
              "text-t4": isAll,
              "text-b2": !isAll,
            })}>
            {content}
            {isOptional && <span className="text-grayscale-500"> (선택)</span>}
          </p>
        </div>
        <ChevronIcon type="right" className="text-grayscale-500" />
      </div>
    </div>
  );
};

export default PolicyList;
