export interface LoginStateType {
    isLogin: boolean;
    userEmail: string | null;
    login: (email: string) => void;
    // login: () => void;
    logout: () => void;
}