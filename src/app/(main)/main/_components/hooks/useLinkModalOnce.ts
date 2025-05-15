import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const useLinkModalOnce = () => {
  const router = useRouter();

  useEffect(() => {
    const shown = localStorage.getItem("link-modal-shown");
    if (!shown) {
      router.replace("/link");
      localStorage.setItem("link-modal-shown", "true");
    }
  }, []);
};
