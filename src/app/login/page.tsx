"use client"
import React from "react";
import Login from "./Login";

const LoginPage = () => {
    
  const onSubmit = async (e: any) => {
    e.preventDefault();
    console.log("click");
  };

  return <Login onSubmit={onSubmit}></Login>;
};

export default LoginPage;