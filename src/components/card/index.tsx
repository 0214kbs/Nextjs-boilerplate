"use client";
import React from "react";
import moment from "moment";
import Image from "next/image";
import { CardType } from "./Card.type";
import { StyledCard, StyledCardHeader, StyledWriter, StyledRemainTime, StyledTitle, StyledImg, StyledProbability } from "./Card.styled";
// import useTimerHook from "@/hooks/useTimerHook";

const CardComponent = (props: CardType) => {
  return (
    <StyledCard>
      <StyledCardHeader>
        <StyledTitle>{props.title}</StyledTitle>
        <StyledWriter style={{ margin: "0px 10px" }}>{props.id}</StyledWriter>
      </StyledCardHeader>
      <StyledImg>
        <Image src="/chicken.jpg" style={{ borderRadius: "100px" }} priority={true} width={120} height={120} alt="gift" />
      </StyledImg>
      <StyledProbability>{props.probability}</StyledProbability>
      <StyledRemainTime {...props}>
        <div style={{ display: "flex" }}>
          <Image src="/remaintime.svg" priority={true} width={22} height={22} alt="remaintime" />
          남은 시간
        </div>
        {props.remainTime || "마감"}
      </StyledRemainTime>
    </StyledCard>
  );
};

export default CardComponent;
