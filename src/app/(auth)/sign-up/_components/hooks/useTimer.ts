"use client";

import { useEffect, useState, useCallback } from "react";
import formatTime from "./useFormatTime";

const useTimer = ({
  defaultTime = 180,
  isActive,
  onComplete,
}: {
  defaultTime?: number;
  isActive: boolean;
  onComplete: () => void;
}) => {
  const [timer, setTimer] = useState(defaultTime);
  const [isRunning, setIsRunning] = useState(false);

  const resetTimer = useCallback(() => {
    setTimer(defaultTime);
    setIsRunning(true);
  }, [defaultTime]);

  const toggleTimer = useCallback(() => {
    setIsRunning(prev => !prev);
  }, []);

  useEffect(() => {
    if (!isActive) {
      setIsRunning(false);
      return;
    }

    if (timer <= 0 || !isRunning) return;

    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsRunning(false);
          onComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, isRunning, isActive, onComplete]);

  useEffect(() => {
    if (isActive) {
      resetTimer();
    }
  }, [isActive, resetTimer]);

  const formatTimer = formatTime(timer);

  return {
    formatTimer,
    timer,
    isRunning,
    resetTimer,
    toggleTimer,
  };
};

export default useTimer;
