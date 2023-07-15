import React, { useState, useEffect } from "react";

export const useInputHook = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("email : " + email);
    console.log("password : " + password);
  });

  const handleEmailInput = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e: any) => {
    setPassword(e.target.value);
  };

  return { email, password, handleEmailInput, handlePasswordInput };
};
