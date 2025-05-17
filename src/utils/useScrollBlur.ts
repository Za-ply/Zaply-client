import { useEffect } from "react";

export const useScrollBlur = (
  containerRef: React.RefObject<HTMLElement>,
  setIsBlur: React.Dispatch<React.SetStateAction<boolean>>
) => {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrolled = el.scrollTop > 0;
      setIsBlur(prev => (prev !== scrolled ? scrolled : prev));
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [containerRef, setIsBlur]);
};
