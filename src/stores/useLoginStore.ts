import { create } from "zustand";
import { LoginStateType } from "./loginStore.type"
const useLoginStore = create<LoginStateType>((set) => ({
  // login 여부
  isLogin: false,

  login: () => set(() => ({ isLogin: true })),
  logout: () => set(() => ({ isLogin: false })),
}));

export default useLoginStore;
