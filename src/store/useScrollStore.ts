import { create } from "zustand";

type ScrollStateProps = {
  activeSection: string;
  setActiveSection: (id: string) => void;
};

export const useScrollStore = create<ScrollStateProps>((set) => ({
  activeSection: "home",
  setActiveSection: (id: string) => set({ activeSection: id }),
}));
