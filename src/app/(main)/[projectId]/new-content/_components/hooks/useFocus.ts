import { useState, useEffect, RefObject } from "react";

const useFocus = (ref: RefObject<HTMLElement>) => {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    element.addEventListener("focusin", handleFocus);
    element.addEventListener("focusout", handleBlur);

    return () => {
      element.removeEventListener("focusin", handleFocus);
      element.removeEventListener("focusout", handleBlur);
    };
  }, [ref]);

  return isFocused;
};

export default useFocus;
