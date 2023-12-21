import { Subscription } from "@/types/Susbscription";
import { create } from "zustand";

export type LanguageSupported =
  | "en"
  | "ny"
  | "sn"
  | "zu"
  | "ko"
  | "he"
  | "fr"
  | "zh"
  | "ig";

export const LanguageSupportedMap: Record<LanguageSupported, string> = {
  en: "English",
  ny: "Chichewa",
  sn: "Shona",
  zu: "Zulu",
  ko: "Korena",
  he: "Hebrew",
  fr: "French",
  zh: "Chinese",
  ig: "Igbo",
};

interface SubscriptionState {
  subscription: Subscription | null | undefined;
  setSubscription: (subscription: Subscription | null) => void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  subscription: undefined,
  setSubscription: (subscription: Subscription | null) => set({ subscription }),
}));
