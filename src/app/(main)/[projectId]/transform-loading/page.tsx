"use client";

import { Container } from "@/components";
import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useTransferSNSPosting } from "@/hooks/mutation/usePosting";
import { useContentMakeStore } from "../new-content/_components/store/content-make-store";
import { searchOptions } from "@/constants/search-options";
import Image from "next/image";
import { useBackgroundTransition } from "@/hooks/useBackgroundTransition";
import { useSNSTransferStore } from "../new-content/_components/store/sns-transfer-store";

export default function TransformLoadingPage() {
  const router = useRouter();
  const { projectId } = useParams();

  const { mutate: transferSNSPosting } = useTransferSNSPosting();

  const { postData } = useContentMakeStore();
  const { currentBackground, backgrounds } = useBackgroundTransition();
  const { setSnsTransferRequest } = useSNSTransferStore();

  useEffect(() => {
    const snsTypes = postData.uploadPlatforms.map(platform => {
      const matchedOption = searchOptions.find(option => option.label === platform);
      return matchedOption ? matchedOption.name : platform;
    });
    const userPrompt = postData.content;

    transferSNSPosting(
      {
        snsTypes,
        userPrompt,
      },
      {
        onSuccess: data => {
          setSnsTransferRequest(
            data.data.toneTransferResponseItems.map(item => ({
              snsTypes: [item.snsType],
              userPrompt: item.content,
            }))
          );
          router.push(`/${projectId}/new-content?step=3`);
        },
      }
    );
  }, []);

  return (
    <Container className="relative overflow-hidden">
      <div className="absolute inset-0">
        {backgrounds.map((bg, index) => (
          <Image
            key={bg.class}
            src={bg.image}
            alt={`background ${bg.class}`}
            fill
            className={`object-cover transition-opacity duration-1000 ${
              currentBackground.class === bg.class ? "opacity-100" : "opacity-0"
            }`}
            priority
          />
        ))}
      </div>
      <div className="relative flex items-center justify-center min-h-real-screen">
        <p className="text-center whitespace-pre-line text-h2 text-blue-blueblack">{`다른 플랫폼에 맞게\n내용을 변환하고 있어요`}</p>
      </div>
    </Container>
  );
}
