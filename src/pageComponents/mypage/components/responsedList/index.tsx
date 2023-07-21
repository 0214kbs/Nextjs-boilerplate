"use client";
import React from "react";
import Card from "@/components/card";
import { StyledList, StyledTitle } from "./responsedSurveysList.styled"
const ResponsesList = () => {
  return (
    <>
      <StyledTitle> 응답한 설문 </StyledTitle>
      <StyledList>

        <div style={{ width: "200px", height: "230px", cursor: "pointer" }}>
          <Card remainTime="00:00" title="설문지 제목" probability="20%"></Card>
        </div>
        <div style={{ width: "200px", height: "230px", cursor: "pointer" }}>
          <Card remainTime="00:00" title="설문지 제목" probability="20%"></Card>
        </div>
        <div style={{ width: "200px", height: "230px", cursor: "pointer" }}>
          <Card remainTime="00:00" title="설문지 제목" probability="20%"></Card>
        </div>
        <div style={{ width: "200px", height: "230px", cursor: "pointer" }}>
          <Card remainTime="00:00" title="설문지 제목" probability="20%"></Card>
        </div>
        <div style={{ width: "200px", height: "230px", cursor: "pointer" }}>
          <Card remainTime="00:00" title="설문지 제목" probability="20%"></Card>
        </div>
        <div style={{ width: "200px", height: "230px", cursor: "pointer" }}>
          <Card remainTime="마감" title="설문지 제목" probability="20%" bgcolor="gray"></Card>
        </div>
        <div style={{ width: "200px", height: "230px", cursor: "pointer" }}>
          <Card remainTime="마감" title="설문지 제목" probability="20%" bgcolor="gray"></Card>
        </div>
      </StyledList>
    </>
  );
};

export default ResponsesList;
