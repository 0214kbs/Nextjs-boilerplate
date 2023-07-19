import { create } from "zustand";
import { LoginStateType, User } from "./loginStore.type";

const useLoginStore = create<LoginStateType>((set) => ({
  isLogin: false,
  user: {
    id: "",
    email: "",
    name: "",
    birth: "",
    gender: "",
    phone: "",
  },

  // login
  userEmail: null,
  login: (email: string) => set({ isLogin: true, userEmail: email }),

  // register
  setUser: (userInfo: User) => {
    set({ user: userInfo, isLogin: true });
  },
  logout: () =>
    set({
      isLogin: false,
      user: {
        id: "",
        email: "",
        name: "",
        birth: "",
        gender: "",
        phone: "",
      },
    }),
}));

export default useLoginStore;
