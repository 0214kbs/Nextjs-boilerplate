"use client";
import React from "react";
import Card from "@/components/card";
import { StyledList, StyledTitle, StyledCard } from "./CreatedList.styled";
import useSurveyStore from "@/stores/useSurveyStore";
import useLoginStore from "@/stores/useLoginStore";

const CreatedList = () => {
  const { surveys } = useSurveyStore();
  const { user } = useLoginStore();

  return (
    <>
      <StyledTitle> 만든 설문 </StyledTitle>
      <StyledList>
        {surveys.map((survey) =>
          survey.userId === user.id ? (
            <StyledCard>
              <Card
                remainTime={survey.remainTime === "00:00" ? "마감" : survey.remainTime}
                title={survey.title}
                bgcolor={survey.remainTime === "00:00" ? "gray" : undefined}
                id={survey.userId}
              />
            </StyledCard>
          ) : null,
        )}
      </StyledList>
    </>
  );
};

export default CreatedList;
