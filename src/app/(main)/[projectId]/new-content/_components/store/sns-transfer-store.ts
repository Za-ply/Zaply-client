import { TransferSNSPostingRequest } from "@/lib/api/model/posting";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SNSTransferStore {
  recommendContentTitle: string;
  snsTransferRequest: TransferSNSPostingRequest[];
  setRecommendContentTitle: (recommendContentTitle: string) => void;
  setSnsTransferRequest: (snsTransferRequest: TransferSNSPostingRequest[]) => void;
  resetSnsTransferRequest: () => void;
}

export const useSNSTransferStore = create<SNSTransferStore>()(
  persist(
    set => ({
      recommendContentTitle: "",
      snsTransferRequest: [],
      setRecommendContentTitle: recommendContentTitle => set({ recommendContentTitle }),
      setSnsTransferRequest: snsTransferRequest => set({ snsTransferRequest }),
      resetSnsTransferRequest: () => set({ snsTransferRequest: [] }),
    }),
    {
      name: "sns-transfer-storage",
    }
  )
);
