"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { LoginLayout } from "./Login.layout";
import Button from "@/components/button";
import Input from "@/components/input";
import useLoginStore from "@/stores/useLoginStore";
import { useInputHook } from "@/hooks/useInputHook";

const Login = () => {
  const router = useRouter();
  const loginState = useLoginStore((state: any) => state.login);

  const { email, password, handleEmailInput, handlePasswordInput } = useInputHook();

  const changeLoginState = () => {
    loginState();
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    changeLoginState();
    router.push("/");
    console.log("submit email : " + email + " / password: " + password);
  };

  return (
    <>
      <LoginLayout onSubmit={onSubmit}>
        <h2>로그인</h2>
        <br />

        <Input type="text" name="email" placeholder="이메일" onChange={handleEmailInput} />
        <Input type="password" name="password" placeholder="비밀번호" onChange={handlePasswordInput} />
        <div style={{ width: "100%", marginTop: "10px" }}>
          <Button label="login" type="submit"></Button>
        </div>
      </LoginLayout>
    </>
  );
};

export default Login;
