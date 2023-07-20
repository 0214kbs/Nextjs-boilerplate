"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { StyledEditInfoForm, StyledButtonList, StyledGenderLabel } from "./Editinfo.styled";
import Button from "@/components/button";
import Input from "@/components/input";
import useLoginStore from "@/stores/useLoginStore";

const Signup = () => {
    const { setUser, user } = useLoginStore();
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

        setUser(values);
    };

    return (
        <>
            <StyledEditInfoForm onSubmit={onSubmit}>
                <h2>내 정보 수정</h2>
                <br />
                <div>
                    아이디
                    <Input type="text" name="id" defaultValue={user.id} />
                </div>
                <div>
                    비밀번호
                    <Input type="password" name="password" />
                </div>
                <div>
                    비밀번호 확인
                    <Input
                        type="password" name="passwordConfirm"
                        onBlur={(e) => {
                            setIsPasswordConfirm(e.target.form.password.value === e.target.value);
                        }}
                        color={isPasswordConfirm ? "green" : "red"}
                    />
                </div>
                <div>
                    이메일
                    <Input type="text" name="email" defaultValue={user.email} />
                </div>
                <div>
                    이름
                    <Input type="text" name="name" defaultValue={user.name} />
                </div>
                <div>
                    생년월일
                    <Input type="date" name="birth" defaultValue={user.birth} />
                </div>
                <div style={{ marginTop: "10px" }}>
                    성별
                    <div>

                        <StyledGenderLabel>
                            <input type="radio" name="gender" value="남" checked={user.gender === "남"} /> 남
                        </StyledGenderLabel>
                        <StyledGenderLabel>
                            <input type="radio" name="gender" value="여" checked={user.gender === "여"} /> 여
                        </StyledGenderLabel>
                    </div>
                </div>
                <div style={{ marginTop: "10px" }}>
                    휴대폰 번호
                    <Input type="text" name="phone" defaultValue={user.phone} />
                </div>

                <div style={{ marginTop: "10px" }}>
                    <Button label="수정" type="submit" bgcolor="#969696" ></Button>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <Button label="탈퇴" type="submit" bgcolor="#ff0000" ></Button>
                </div>
            </StyledEditInfoForm >
        </>
    );
};

export default Signup;
