import { create } from "zustand";

const useLoginStore = create((set) => ({
  isLogin: false,
  login: () => set(() => ({ isLogin: true })),
  logout: () => set(() => ({ isLogin: false })),
}));

export default useLoginStore;
