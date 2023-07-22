"use client";
import React, { useState, useEffect } from "react";
import moment from "moment";
import Image from "next/image";
import { CardType } from "./Card.type";
import { StyledCard, StyledCardHeader, StyledRemainTime, StyledTitle, StyledImg, StyledProbability } from "./Card.styled";
import useTimerHook from "@/hooks/useTimerHook";

const CardComponent = (props: CardType) => {
  const remainTime = useTimerHook(props.deadLine);
  return (
    <StyledCard>
      <StyledCardHeader>
        <StyledRemainTime bgcolor={remainTime === "마감" ? "gray" : props.bgcolor}>{remainTime}</StyledRemainTime>
        <StyledProbability>{props.probability}</StyledProbability>
      </StyledCardHeader>
      <StyledImg>
        <Image src="/chicken.jpg" priority={true} width={150} height={150} alt="gift" />
      </StyledImg>
      <div style={{ margin: "0px 10px" }}>작성자 : {props.id}</div>
      <StyledTitle>{props.title}</StyledTitle>
    </StyledCard>
  );
};

export default CardComponent;
