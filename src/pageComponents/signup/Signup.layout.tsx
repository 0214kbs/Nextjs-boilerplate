"use client";
import styled from "styled-components";

const SignupLayout = styled.form<any>`
  margin: 100px auto;
  width: 420px;
  padding: 50px;
  border: 2px solid #e7e7e7;
  border-radius: 5px;
`;

const StyledButtonList = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledGenderLabel = styled.label`
  margin: 0px 10px;
`;
export { SignupLayout, StyledButtonList, StyledGenderLabel };
