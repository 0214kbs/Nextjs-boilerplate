import { create } from "zustand";
import { LoginStateType } from "./loginStore.type"
const useLoginStore = create<LoginStateType>((set) => ({
  isLogin: false,
  userEmail: null,
  login: (email: string) => set({ isLogin: true, userEmail: email }),
  logout: () => set({ isLogin: false, userEmail: null }),

}));

export default useLoginStore;
