"use client";
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
        <StyledInfoEmail> {user.email} </StyledInfoEmail>
        <StyledInfoOthers>
          {user.name} / {user.birth} / {user.gender}{" "}
        </StyledInfoOthers>
      </StyledInfo>
      <StyledSurveys>
        <div> 응답한 설문 : {user.responsedSurveys}</div>
        <div> 만든 설문 : {user.createdSurveys}</div>
        <div> 잔여 포인트 : {user.points}</div>
        <div> 당첨된 상품 : {user.prizes}</div>
      </StyledSurveys>
    </MiniprofileLayout>
  );
};

export default Miniprofile;
