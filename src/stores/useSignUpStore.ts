import { create } from "zustand";

interface SignUpState {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  residentNumber: string;
  termsOfServiceAgreed: boolean;
  privacyPolicyAgreed: boolean;
  marketingAgreed: boolean;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setAgreements: (options: {
    termsOfServiceAgreed: boolean;
    privacyPolicyAgreed: boolean;
    marketingAgreed: boolean;
  }) => void;
  reset: () => void;
}

export const useSignUpStore = create<SignUpState>(set => ({
  name: "",
  email: "",
  password: "",
  phoneNumber: "",
  residentNumber: "",
  termsOfServiceAgreed: false,
  privacyPolicyAgreed: false,
  marketingAgreed: false,
  setEmail: email => set({ email }),
  setPassword: password => set({ password }),
  setAgreements: ({ termsOfServiceAgreed, privacyPolicyAgreed, marketingAgreed }) =>
    set({ termsOfServiceAgreed, privacyPolicyAgreed, marketingAgreed }),
  reset: () =>
    set({
      name: "",
      email: "",
      password: "",
      phoneNumber: "",
      residentNumber: "",
      termsOfServiceAgreed: false,
      privacyPolicyAgreed: false,
      marketingAgreed: false,
    }),
}));
