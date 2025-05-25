"use client";

import { Container } from "@/components";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function TransformLoadingPage() {
  const [bgClass, setBgClass] = useState("bg-background-yellow");
  const router = useRouter();
  const { projectId } = useParams();

  useEffect(() => {
    const backgrounds = ["bg-background-yellow", "bg-background-pink", "bg-background-green"];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % backgrounds.length;
      setBgClass(backgrounds[currentIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container className={`bg-center bg-cover ${bgClass} transition-all duration-1000 ease-in-out`}>
      <div className="flex items-center justify-center min-h-real-screen">
        <p
          className="text-center whitespace-pre-line text-h2 text-blue-blueblack"
          onClick={() =>
            /** 임시로 테스트 중 */
            router.push(`/${projectId}/new-content?step=3`)
          }>{`다른 플랫폼에 맞게\n내용을 변환하고 있어요`}</p>
      </div>
    </Container>
  );
}
