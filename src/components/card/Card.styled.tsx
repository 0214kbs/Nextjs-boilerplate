"use client";
import styled, { css } from "styled-components";
import { CardType } from "./Card.type";

const StyledCard = styled.div.attrs<CardType>((props) => ({}))`
  ${(props) => {
    // const gray = props.theme.colors.gray;
    const white = props.theme.colors.white;
    const bgcolor = props.remainTime !== "" ? white : "gray";

    return css`
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;

      border-radius: 16px;
      border: 1px solid #e4e7ec;
      background: ${bgcolor};

      padding: 40px;
    `;
  }};
`;


const StyledSurveyType = styled.div`
  display: flex;
  padding: 6px 8px 6px 6px;
  align-items: center;
  gap: 2px;
  border-radius: 8px;
  border: 1px solid rgba(168, 140, 255, 0.10);
  background: linear-gradient(0deg, rgba(168, 140, 255, 0.20) 0%, rgba(168, 140, 255, 0.20) 100%), #FFF;
`
const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

const StyledTypeText = styled.div`
  color: #6951FF;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`


const StyledTitle = styled.div.attrs<CardType>((props) => ({}))`
  ${(props) => {
    const highblack = props.theme.colors.highblack;
    const highwhite = props.theme.colors.highwhite;
    const color = props.remainTime !== "" ? highblack : highwhite;
    return css`
      width: 100%;
      color: ${color};
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    `;
  }};
`;


const StyledWriter = styled.div.attrs<CardType>((props) => ({}))`
  ${(props) => {
    const lowblack = props.theme.colors.lowblack;
    const lowwhite = props.theme.colors.lowwhite;
    const color = props.remainTime !== "" ? lowblack : lowwhite;
    return css`
      color: ${color};
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    `;
  }};
`;
const StyledRemainTime = styled.div.attrs<CardType>((props) => ({}))`
  ${(props) => {
    const gray = props.theme.colors.gray;
    const highwhite = props.theme.colors.highwhite;
    const color = props.remainTime !== "" ? gray : highwhite;
    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      color: ${color};
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    `;
  }};
`;

const StyledProbability = styled.div.attrs<CardType>((props) => ({}))`
  ${(props) => {
    const main = props.theme.colors.main;
    const highwhite = props.theme.colors.highwhite;
    const color = props.remainTime !== "" ? main : highwhite;
    return css`
      color: ${color};
      text-align: right;
      font-size: 40px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
    `;
  }};
`;

const StyledImg = styled.div.attrs<CardType>((props) => ({}))`
  ${(props) => {
    const main = props.theme.colors.main;
    const main2 = props.theme.colors.main2;
    const color = props.remainTime !== "" ? main : main2;
    return css`
      border: 2px dashed ${color};
      border-radius: 100px;
      width: 126px;
      padding-top: 2px;
      padding-left: 2px;
    `;
  }};
`;

export { StyledCard, StyledWriter, StyledTypeText, StyledSurveyType, StyledRemainTime, StyledTitle, StyledImg, StyledProbability, StyledCardHeader };
