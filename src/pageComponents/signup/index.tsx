"use client";
import React from "react";
import { SignupLayout, StyledButtonList } from "./Signup.layout"
import Button from "@/components/button";
import Input from "@/components/input";

const Signup = () => {
    return (
        <>
            <SignupLayout>
                <h2>회원가입</h2>
                <br />
                <Input type="text" name="id" placeholder="아이디" />
                <Input type="password" name="password" placeholder="비밀번호" />
                <Input type="password" name="passwordConfirm" placeholder="비밀번호 확인" />
                <Input type="text" name="email" placeholder="이메일" />
                <Input type="text" name="name" placeholder="이름" />
                <Input type="text" name="birth" placeholder="생년월일" />
                <Input type="text" name="gender" placeholder="성별" />
                <Input type="text" name="phone" placeholder="휴대폰 번호" />

                <StyledButtonList>
                    <div style={{ margin: "10px" }}>
                        <Button label="취소" type="submit" bgcolor="gray"></Button>
                    </div>
                    <div style={{ margin: "10px" }}>
                        <Button label="완료" type="submit" bgcolor="#BB2649"></Button>
                    </div>
                </StyledButtonList>
            </SignupLayout >
        </>
    );
};

export default Signup;
