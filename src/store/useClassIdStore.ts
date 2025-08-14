import { create } from "zustand";

type ClassIdState = {
  classId: number | null;
  setClassId: (id: number | null) => void;
};

export const useClassIdStore = create<ClassIdState>((set) => ({
  classId: null,
  setClassId: (id) => set({ classId: id }),
}));
