"use client";

import { Button, CheckIcon } from "@/components";
import { SelectUploadType } from "./SelectUploadType";
import { useParams, useRouter } from "next/navigation";
import { useReserveStore } from "../../store/reserve-store";
import { useState } from "react";
import LoadingModal from "./LoadingModal";
import { CreatePostingRequest } from "@/lib/api/model";
import postingService from "@/lib/api/service/PostingService";
import { useSNSTransferStore } from "../../store/sns-transfer-store";
import useFilePreviewStore from "../../store/preview-store";
import imageService from "@/lib/api/service/ImageService"; // presigned url 요청
import { format } from "date-fns";
import { Platforms } from "@/types/platform";
import { SocialPlatform } from "@/app/(mypage)/_components/types/platform";

const snsTypeToPlatform: Record<string, SocialPlatform> = {
  FACEBOOK: Platforms.FACEBOOK,
  INSTAGRAM: Platforms.INSTAGRAM,
  THREADS: Platforms.THREADS,
};

function convertTo24Hour(timeStr: string): string {
  const [period, time] = timeStr.split(" ");
  let [hour, minute] = time.split(":").map(Number);

  if (period === "PM" && hour < 12) hour += 12;
  if (period === "AM" && hour === 12) hour = 0;

  return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
}

const ReserveStep = () => {
  const router = useRouter();
  const { isReserve, clearReserve } = useReserveStore();
  const [isLoading, setIsLoading] = useState(false);
  const { projectId } = useParams();
  const { snsTransferRequest } = useSNSTransferStore.getState();
  const { files } = useFilePreviewStore();

  const handleImmediateUpload = async () => {
    const filtered = snsTransferRequest.filter(
      req => !req.snsTypes.includes("X") && !req.snsTypes.includes("LINKEDIN")
    );
    const media = useFilePreviewStore.getState().files.map(file => file.previewUrl);

    for (const item of filtered) {
      const snsType = item.snsTypes[0];
      const createRequest: CreatePostingRequest = {
        mediaType: "IMAGE",
        media: media,
        text: item.userPrompt,
        scheduledAt: "",
      };

      if (snsType === "INSTAGRAM") {
        await postingService.createInstagramCarouselPosting(Number(projectId), createRequest);
      } else if (snsType === "THREADS") {
        await postingService.createThreadCarouselPosting(Number(projectId), createRequest);
      } else if (snsType === "FACEBOOK") {
        await postingService.createFacebookCarouselPosting(Number(projectId), createRequest);
      }
    }
  };

  const handleUploadWithSchedule = async (projectId: number) => {
    const { snsTransferRequest } = useSNSTransferStore.getState();
    const { isAll, isReserve, selectedDate, selectedTime, platformReserves } =
      useReserveStore.getState();
    const media = useFilePreviewStore.getState().files.map(file => file.previewUrl);

    const filtered = snsTransferRequest.filter(
      req => !req.snsTypes.includes("X") && !req.snsTypes.includes("LINKEDIN")
    );

    for (const item of filtered) {
      const snsType = item.snsTypes[0];

      let scheduledAt = "";
      if (isReserve) {
        if (isAll && selectedDate && selectedTime) {
          const time =
            selectedTime.includes("AM") || selectedTime.includes("PM")
              ? convertTo24Hour(selectedTime)
              : selectedTime;

          const dateTime = new Date(`${format(selectedDate, "yyyy-MM-dd")}T${time}`);
          if (!isNaN(dateTime.getTime())) {
            scheduledAt = format(dateTime, "yyyy-MM-dd'T'HH:mm");
          } else {
            console.warn("유효하지 않은 시간 형식:", selectedTime);
          }
        } else {
          const reserve = platformReserves[snsTypeToPlatform[snsType]];
          if (reserve?.date && reserve?.time) {
            const time =
              reserve.time.includes("AM") || reserve.time.includes("PM")
                ? convertTo24Hour(reserve.time)
                : reserve.time;

            const dateTime = new Date(`${format(reserve.date, "yyyy-MM-dd")}T${time}`);
            if (!isNaN(dateTime.getTime())) {
              scheduledAt = format(dateTime, "yyyy-MM-dd'T'HH:mm");
            } else {
              console.warn("유효하지 않은 플랫폼 예약 시간:", reserve.time);
            }
          }
        }
      }

      const createRequest = {
        mediaType: "IMAGE",
        media: media,
        text: item.userPrompt,
        scheduledAt,
      };

      if (snsType === "THREADS") {
        await postingService.createThreadCarouselPosting(projectId, createRequest);
      } else if (snsType === "INSTAGRAM") {
        await postingService.createInstagramCarouselPosting(projectId, createRequest);
      } else if (snsType === "FACEBOOK") {
        await postingService.createFacebookCarouselPosting(projectId, createRequest);
      }
    }
  };

  const handleComplete = async () => {
    setIsLoading(true);
    try {
      const uploadedUrls: string[] = [];

      if (isReserve) {
        await handleUploadWithSchedule(Number(projectId));
      } else {
        await handleImmediateUpload();
      }

      clearReserve();
      router.push("/upload?success=true");
    } catch (error) {
      console.error("업로드 실패", error);
      alert("업로드 중 문제가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SelectUploadType />
      <div className="fixed bottom-[60px] left-1/2 -translate-x-1/2 w-full max-w-[440px] px-5 z-50">
        <Button
          className="w-full text-button1 text-grayscale-100"
          leftIcon={<CheckIcon />}
          onClick={handleComplete}>
          완료
        </Button>
      </div>

      <LoadingModal isOpen={isLoading} isReserve={isReserve ?? false} />
    </>
  );
};

export default ReserveStep;
