"use client";
import React from "react";
import Card from "@/components/card";
const ResponsesList = () => {
  return (
    <>
      <div style={{ width: "200px", height: "250px" }}>
        <Card remainTime="00:00" title="설문지 제목" probability="20%"></Card>
      </div>
    </>
  );
};

export default ResponsesList;
