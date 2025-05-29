import { useState, useEffect } from "react";

const BACKGROUNDS = [
  {
    class: "bg-background-yellow",
    image: "/assets/images/background_yellow.webp",
  },
  {
    class: "bg-background-pink",
    image: "/assets/images/background_pink.webp",
  },
  {
    class: "bg-background-green",
    image: "/assets/images/background_green.webp",
  },
];

export const useBackgroundTransition = (intervalTime = 2000) => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const preloadImages = () => {
      BACKGROUNDS.forEach(({ image }) => {
        const img = new window.Image();
        img.src = image;
      });
    };
    preloadImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex(prev => (prev + 1) % BACKGROUNDS.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [intervalTime]);

  return {
    currentBackground: BACKGROUNDS[currentBgIndex],
    backgrounds: BACKGROUNDS,
  };
};
