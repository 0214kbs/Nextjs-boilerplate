"use client";
import styled, { css } from "styled-components";
import { CardType } from "./Card.type";

const StyledCard = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  border-radius: 16px;
  border: 1px solid #e4e7ec;
  background: #fff;

  padding: 40px;
`;

const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

const StyledTitle = styled.div`
  width: 100%;
  color: #000;
  text-align: center;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const StyledWriter = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const StyledRemainTime = styled.div<CardType>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  color: #6e7177;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const StyledProbability = styled.div`
  color: #8e69ff;
  text-align: right;
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const StyledImg = styled.div`
  border: 2px dashed #8e69ff;
  border-radius: 100px;
  width: 125px;
`;

export { StyledCard, StyledWriter, StyledRemainTime, StyledTitle, StyledImg, StyledProbability, StyledCardHeader };
