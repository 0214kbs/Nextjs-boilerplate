import { create } from "zustand";
import { LoginStateType, User } from "./types/loginStore.type";

const useLoginStore = create<LoginStateType>((set) => ({
  isLogin: false,
  user: {
    id: "",
    email: "",
    name: "",
    birth: "",
    gender: "",
    phone: "",

    //
    responsedSurveys: 0,
    createdSurveys: 0,
    points: 0,
    prizes: 0,
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
        //
        responsedSurveys: 0,
        createdSurveys: 0,
        points: 0,
        prizes: 0,
      },
    }),

  changeResponsedSurveys: (value: number) =>
    set((state) => ({ user: { ...state.user, responsedSurveys: (state.user.responsedSurveys || 0) + value } })),
  changeCreatedSurveys: (value: number) => set((state) => ({ user: { ...state.user, createdSurveys: (state.user.createdSurveys || 0) + value } })),
  changePoints: (value: number) => set((state) => ({ user: { ...state.user, points: (state.user.points || 0) + value } })),
  changePrizes: (value: number) => set((state) => ({ user: { ...state.user, prizes: (state.user.prizes || 0) + value } })),
}));

export default useLoginStore;
