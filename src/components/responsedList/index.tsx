"use client";
import React from "react";
import Card from "@/components/card";
const ResponsesList = () => {
  return (
    <>
      <h3> 응답한 설문 목록 </h3>
      <div style={{ width: "200px", height: "250px", cursor: "pointer" }}>
        <Card remainTime="00:00" title="설문지 제목" probability="20%"></Card>
      </div>
    </>
  );
};

export default ResponsesList;
