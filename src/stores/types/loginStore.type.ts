export interface User {
  id?: string;
  //   password?: string;
  email?: string;
  name?: string;
  birth?: string;
  gender?: string;
  phone?: string;

  // survey info
  responsedSurveys?: number;
  createdSurveys?: number;
  points?: number;
  prizes?: number;
}

export interface LoginStateType {
  isLogin: boolean;
  user: User;

  // login : 원래라면 서버에서 받아와서 아래 setUSer 처럼
  userEmail: string | null;
  login: (email: string) => void;

  //register
  setUser: (userInfo: User) => void;
  logout: () => void;

  changeResponsedSurveys: (value: number) => void;
  changeCreatedSurveys: (value: number) => void;
  changePoints: (value: number) => void;
  changePrizes: (value: number) => void;
}
