import React from "react";
import Image from "next/image";
import { CardType } from "./Card.type";
import { StyledCard, StyledRemainTime, StyledTitle, StyledImg } from "./Card.styled";

const CardComponent = (props: CardType) => {
  return (
    <StyledCard>
      <StyledRemainTime>{props.remainTime}</StyledRemainTime>
      <StyledImg>
        <Image src="/chicken.jpg" priority={true} width={150} height={150} alt="gift" />
      </StyledImg>
      <StyledTitle>{props.title}</StyledTitle>
    </StyledCard>
  );
};

export default CardComponent;
