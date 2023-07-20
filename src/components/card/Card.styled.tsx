"use client";
import styled from "styled-components";

const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid black;
`;

const StyledRemainTime = styled.div`
  width: 35%;
  color: white;
  font-weight: bold;
  padding: 0px 10px;
  border-radius: 20px;
  background-color: #44c944;
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
  background-color: #e4e4e4;
`;

export { StyledCard, StyledRemainTime, StyledTitle, StyledImg };
