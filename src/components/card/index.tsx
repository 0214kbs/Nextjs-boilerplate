import React from "react";
import Image from "next/image";
import { CardType } from "./Card.type";
import { StyledCard, StyledCardHeader, StyledRemainTime, StyledTitle, StyledImg, StyledProbability } from "./Card.styled";

const CardComponent = (props: CardType) => {
  return (
    <StyledCard>
      <StyledCardHeader>
        <StyledRemainTime bgcolor={props.bgcolor}>{props.remainTime}</StyledRemainTime>
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
