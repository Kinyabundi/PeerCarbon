import { IUser } from "@/types/User";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface IAuthStore {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
}

export const useAuthStore = create(
  persist<IAuthStore>(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: "peercharge:user",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
