import { useState, useEffect } from "react";

interface UseElementHeightReturn {
  height: number;
  ref: (node: HTMLDivElement | null) => void;
}

const useElementHeight = (dependencies: any[] = []): UseElementHeightReturn => {
  const [height, setHeight] = useState(0);
  const [element, setElement] = useState<HTMLDivElement | null>(null);

  const ref = (node: HTMLDivElement | null) => {
    setElement(node);
  };

  useEffect(() => {
    if (element) {
      setHeight(element.scrollHeight);
    }
  }, [element, ...dependencies]);

  return { height, ref };
};

export default useElementHeight;
