'use client'
import React from "react";
import Image from "next/image";
import useLoginStore from "@/stores/useLoginStore";
import { MiniprofileLayout, StyledProfileImg, StyledInfo, StyledInfoEmail, StyledInfoOthers, StyledSurveys } from "./Miniprofile.styled";
const Miniprofile = () => {
    const { user } = useLoginStore();
    return (
        <MiniprofileLayout>
            <StyledProfileImg>
                <Image src="/profileicon.png" priority={true} width={80} height={80} alt="Logo"></Image>
            </StyledProfileImg>

            <StyledInfo>
                <StyledInfoEmail>  {user.email} </StyledInfoEmail>
                <StyledInfoOthers>  {user.name} / {user.birth} / {user.gender} </StyledInfoOthers>
            </StyledInfo>
            <StyledSurveys> surveys </StyledSurveys>
        </MiniprofileLayout>
    );
};

export default Miniprofile;