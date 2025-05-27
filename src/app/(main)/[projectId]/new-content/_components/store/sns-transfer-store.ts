import { TransferSNSPostingRequest } from "@/lib/api/model/posting";
import { create } from "zustand";

interface SNSTransferStore {
  snsTransferRequest: TransferSNSPostingRequest[];
  setSnsTransferRequest: (snsTransferRequest: TransferSNSPostingRequest[]) => void;
  resetSnsTransferRequest: () => void;
}

export const useSNSTransferStore = create<SNSTransferStore>(set => ({
  snsTransferRequest: [],
  setSnsTransferRequest: snsTransferRequest => set({ snsTransferRequest }),
  resetSnsTransferRequest: () => set({ snsTransferRequest: [] }),
}));
