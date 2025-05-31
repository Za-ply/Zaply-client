import { create } from "zustand";

interface PolicyState {
  isAllChecked: boolean;
  requiredChecks: boolean[];
  optionalChecked: boolean;
  setAllChecked: (checked: boolean) => void;
  setRequiredCheck: (index: number, checked: boolean) => void;
  setOptionalChecked: (checked: boolean) => void;
}

export const usePolicyStore = create<PolicyState>(set => ({
  isAllChecked: false,
  requiredChecks: [false, false],
  optionalChecked: false,

  setAllChecked: checked =>
    set(state => ({
      isAllChecked: checked,
      requiredChecks: [checked, checked],
      optionalChecked: checked,
    })),

  setRequiredCheck: (index, checked) =>
    set(state => {
      const newRequiredChecks = [...state.requiredChecks];
      newRequiredChecks[index] = checked;
      const allRequiredChecked = newRequiredChecks.every(check => check);

      return {
        requiredChecks: newRequiredChecks,
        isAllChecked: allRequiredChecked && state.optionalChecked,
      };
    }),

  setOptionalChecked: checked =>
    set(state => ({
      optionalChecked: checked,
      isAllChecked: checked && state.requiredChecks.every(check => check),
    })),
}));
