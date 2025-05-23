"use client";

import { Container } from "@/components";
import { useEffect, useState } from "react";

export default function TransformLoadingPage() {
  const [bgClass, setBgClass] = useState("bg-background-yellow");

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
        <p className="text-center whitespace-pre-line text-h2 text-blue-blueblack">{`다른 플랫폼에 맞게\n내용을 변환하고 있어요`}</p>
      </div>
    </Container>
  );
}
