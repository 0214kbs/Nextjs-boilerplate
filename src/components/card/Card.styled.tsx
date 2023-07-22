"use client";
import styled, { css } from "styled-components";

const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid black;
  position: relative;
`;
const StyledCardHeader = styled.div`
  margin: 1px 3px;
  display: flex;
  justify-content: space-between;
`;
const StyledRemainTime = styled.div<{ bgcolor?: string }>`
  width: 50%;
  color: white;
  font-weight: bold;
  text-align: center;
  padding: 0px 10px;
  border-radius: 30px;
  background-color: ${(props) => props.bgcolor || "#44c944"};
  /* position: fixed; */
`;

const StyledProbability = styled.div`
  width: 40%;
  color: white;
  font-weight: bold;
  padding: 0px 10px;

  text-align: center;
  background-color: #c94444;

  position: absolute;
  top: 5px;
  right: -20px;
  transform: rotate(45deg);
`;

const StyledImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.div`
  width: 100%;
  text-align: center;
  color: black;
  font-weight: bold;
  font-size: 20px;
  background-color: #e4e4e4;
`;

export { StyledCard, StyledRemainTime, StyledTitle, StyledImg, StyledProbability, StyledCardHeader };
