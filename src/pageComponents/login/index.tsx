"use client";
import React from "react";
import Login from "./Login";
import Link from "next/link";

const LoginPage = () => {
  const onSubmit = async (e: any) => {
    e.preventDefault();
    console.log("click");

    // const loginData = await loginPostAPI.loginPost(e);

    // if (loginData.data.success) {
    //   console.log(loginData.data.response);
    //   <Link href={"/"}></Link>;
    // }
  };

  return <Login onSubmit={onSubmit}></Login>;
};

export default LoginPage;
