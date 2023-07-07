"use client";
import React from "react";
import { LoginLayout } from "./Login.layout";
import Button from "@/components/button/Button";
const Login = ({ onSubmit }: any) => {
  return (
    <>
      <LoginLayout onSubmit={onSubmit}>
        <h2>로그인</h2>
        <br />

        <input type="text" name="email" placeholder="이메일" />
        <input type="password" name="password" placeholder="비밀번호" />
        <div style={{ width: "100%", marginTop: "10px" }}>
          <Button label="login" type="submit"></Button>
        </div>
      </LoginLayout>
    </>
  );
};

export default Login;
