import { useEffect, useState } from "react";

interface UseProgressProps {
  isLoading: boolean;
  duration?: number;
  interval?: number;
}

export const useProgress = ({ isLoading, duration = 12000, interval = 100 }: UseProgressProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const steps = duration / interval;
      const increment = 100 / steps;

      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prev + increment;
        });
      }, interval);

      return () => {
        clearInterval(timer);
        setProgress(0);
      };
    }
  }, [isLoading, duration, interval]);

  return progress;
};
