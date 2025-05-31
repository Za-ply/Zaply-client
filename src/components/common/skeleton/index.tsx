import { cn } from "@/utils";

const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("animate-pulse rounded-md bg-grayscale-500/30", className)} {...props} />
  );
};

export default Skeleton;
