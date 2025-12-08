"use client";

import { create } from "zustand";

type AppFlowState = {
  splashDone: boolean;
  setSplashDone: (val: boolean) => void;

  hasSeenCover: boolean;
  setHasSeenCover: (val: boolean) => void;
};

export const useAppFlowStore = create<AppFlowState>((set) => ({
  splashDone: false,
  setSplashDone: (val) => set({ splashDone: val }),

  hasSeenCover:
    typeof window !== "undefined"
      ? sessionStorage.getItem("hasSeenCover") === "true"
      : false,
  setHasSeenCover: (val) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("hasSeenCover", String(val));
    }
    set({ hasSeenCover: val });
  },
}));
