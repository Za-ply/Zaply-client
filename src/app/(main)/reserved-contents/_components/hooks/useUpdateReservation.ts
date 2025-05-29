import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useToast } from "@/utils/useToast";
import { POSTING_INFO_QUERY_KEY } from "./usePostingInfo";
import postingService from "@/lib/api/service/PostingService";
import { formatDateTimeForAPI } from "../utils/date";
import { Posting } from "../types/posting";
import { Platforms } from "@/types/platform";

const platformToSnsType = {
  [Platforms.INSTAGRAM]: "INSTAGRAM",
  [Platforms.THREADS]: "THREADS",
  [Platforms.FACEBOOK]: "FACEBOOK",
} as const;

interface UpdateReservationParams {
  postingInfo: Posting[];
  isAll: boolean;
  selectedDate: Date | null;
  selectedTime: string | null;
  platformReserves: Record<string, { date: Date | null; time: string | null }>;
}

export const useUpdateReservation = (projectId: number) => {
  const router = useRouter();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { mutate: updateReservationTime } = useMutation({
    mutationFn: async (params: UpdateReservationParams) => {
      const { postingInfo, isAll, selectedDate, selectedTime, platformReserves } = params;

      if (isAll && selectedDate && selectedTime) {
        const formattedDate = formatDateTimeForAPI(selectedDate, selectedTime);

        // 모든 플랫폼에 대해 동일한 시간으로 업데이트
        for (const posting of postingInfo) {
          const data = {
            mediaType: "IMAGE",
            media: [""],
            text: posting.postingContent,
            scheduledAt: formattedDate,
          };

          if (data.media.length > 1) {
            await postingService.updateCarouselPosting(
              posting.postingId,
              posting.postingType,
              data
            );
          } else {
            await postingService.updateSinglePosting(posting.postingId, posting.postingType, data);
          }
        }
      } else {
        // 개별 플랫폼 예약
        for (const [platform, reserve] of Object.entries(platformReserves)) {
          if (!reserve.date || !reserve.time) continue;

          const posting = postingInfo.find(
            (p: Posting) =>
              platformToSnsType[platform as keyof typeof platformToSnsType] === p.postingType
          );
          if (!posting) continue;

          const formattedDate = formatDateTimeForAPI(reserve.date, reserve.time);

          const data = {
            mediaType: "IMAGE",
            media: [""],
            text: posting.postingContent,
            scheduledAt: formattedDate,
          };

          if (data.media.length > 1) {
            await postingService.updateCarouselPosting(
              posting.postingId,
              posting.postingType,
              data
            );
          } else {
            await postingService.updateSinglePosting(posting.postingId, posting.postingType, data);
          }
        }
      }
    },
    onSuccess: () => {
      toast({
        variant: "check",
        description: "예약 시간이 수정되었어요.",
      });

      queryClient.refetchQueries({
        queryKey: [POSTING_INFO_QUERY_KEY, projectId],
      });

      router.push(`/reserved-contents/${projectId}`);
    },
    onError: error => {
      console.error("Failed to update posting time:", error);
      toast({
        variant: "error",
        description: "예약 시간 수정에 실패했어요.",
      });
    },
  });

  return {
    updateReservationTime,
  };
};
