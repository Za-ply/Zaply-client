"use client";

import { Container } from "@/components";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useTransferSNSPosting } from "@/hooks/mutation/usePosting";
import { useContentMakeStore } from "../new-content/_components/store/content-make-store";
import { searchOptions } from "@/constants/search-options";
import Image from "next/image";

export default function TransformLoadingPage() {
  const [bgClass, setBgClass] = useState("bg-background-yellow");
  const router = useRouter();
  const { projectId } = useParams();
  const { mutate: transferSNSPosting } = useTransferSNSPosting();

  const { postData } = useContentMakeStore();

  useEffect(() => {
    const preloadImages = () => {
      const backgrounds = [
        "/assets/images/background_yellow.webp",
        "/assets/images/background_pink.webp",
        "/assets/images/background_green.webp",
      ];
      backgrounds.forEach(src => {
        const img = new window.Image();
        img.src = src;
      });
    };
    preloadImages();
  }, []);

  useEffect(() => {
    const backgrounds = ["bg-background-yellow", "bg-background-pink", "bg-background-green"];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % backgrounds.length;
      setBgClass(backgrounds[currentIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

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
        onSuccess: () => {
          router.push(`/${projectId}/new-content?step=3`);
        },
      }
    );
  }, []);

  return (
    <Container className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/assets/images/background_yellow.webp"
          alt="background yellow"
          fill
          className={`object-cover transition-opacity duration-1000 ${
            bgClass === "bg-background-yellow" ? "opacity-100" : "opacity-0"
          }`}
          priority
        />
        <Image
          src="/assets/images/background_pink.webp"
          alt="background pink"
          fill
          className={`object-cover transition-opacity duration-1000 ${
            bgClass === "bg-background-pink" ? "opacity-100" : "opacity-0"
          }`}
          priority
        />
        <Image
          src="/assets/images/background_green.webp"
          alt="background green"
          fill
          className={`object-cover transition-opacity duration-1000 ${
            bgClass === "bg-background-green" ? "opacity-100" : "opacity-0"
          }`}
          priority
        />
      </div>
      <div className="relative flex items-center justify-center min-h-real-screen">
        <p className="text-center whitespace-pre-line text-h2 text-blue-blueblack">{`다른 플랫폼에 맞게\n내용을 변환하고 있어요`}</p>
      </div>
    </Container>
  );
}
