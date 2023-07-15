import React, { useState } from "react";

export const useLogin = () => {
  const [isLogin, setIsLogin] = useState(false);

  const onLogout = () => {
    console.log("logout");
    setIsLogin(false);
  };

  const onLogin = () => {
    console.log("login");
    setIsLogin(true);
  };

  return {
    isLogin,
    onLogout,
    onLogin,
  };
};
