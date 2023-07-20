"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { SignupLayout, StyledButtonList, StyledGenderLabel } from "./Signup.layout";
import Button from "@/components/button";
import Input from "@/components/input";
import useLoginStore from "@/stores/useLoginStore";

const Signup = () => {
  const { setUser, changeResponsedSurveys, changeCreatedSurveys, changePoints, changePrizes } = useLoginStore();
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(true);

  const router = useRouter();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    console.log("click");

    const inputPassword = e.target.password.value;
    const passwordConfirm = e.target.passwordConfirm.value;
    setIsPasswordConfirm(inputPassword === passwordConfirm);

    const values = {
      id: e.target.id.value,
      //   password: e.target.password.value,
      email: e.target.email.value,
      name: e.target.name.value,
      birth: e.target.birth.value,
      gender: e.target.gender.value,
      phone: e.target.phone.value,
    };

    if (inputPassword === passwordConfirm) {
      setUser(values);

      // 임의 작동
      changeResponsedSurveys(100);
      changeCreatedSurveys(5);
      changePoints(1000);
      changePrizes(10);

      console.log("success");
      router.push("/");
    } else {
      console.log("check password");
    }
  };

  return (
    <>
      <SignupLayout onSubmit={onSubmit}>
        <h2>회원가입</h2>
        <br />
        <Input type="text" name="id" placeholder="아이디" />
        <Input type="password" name="password" placeholder="비밀번호" />
        <Input
          type="password"
          name="passwordConfirm"
          placeholder="비밀번호 확인"
          onBlur={(e) => {
            setIsPasswordConfirm(e.target.form.password.value === e.target.value);
          }}
          color={isPasswordConfirm ? "green" : "red"}
        />
        <Input type="text" name="email" placeholder="이메일" />
        <Input type="text" name="name" placeholder="이름" />
        <Input type="date" name="birth" placeholder="생년월일" />
        <StyledGenderLabel>
          <input type="radio" name="gender" value="남" /> 남
        </StyledGenderLabel>
        <StyledGenderLabel>
          <input type="radio" name="gender" value="여" /> 여
        </StyledGenderLabel>
        <Input type="text" name="phone" placeholder="휴대폰 번호" />

        <div style={{ width: "100%", marginTop: "10px" }}>
          <Button label="완료" type="submit"></Button>
        </div>
      </SignupLayout>
    </>
  );
};

export default Signup;
