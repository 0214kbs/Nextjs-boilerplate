"use client"
import React from "react";
import { Form } from "./Login.layout";

const Login = ({onSubmit}:any) => {

  return (
    <>
      <Form onSubmit={onSubmit}>
        <h2>로그인</h2>
        <br />

        <input type="text" name="email" placeholder="이메일" />
        <input type="password" name="password" placeholder="비밀번호" />
        <div style={{ width: "100%", marginTop: "10px" }}>
          <button type="submit">로그인</button>
        </div>
      </Form>
    </>
  );
};

export default Login;