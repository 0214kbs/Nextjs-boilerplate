"use client";
import React from "react";
import Card from "@/components/card";
import { StyledList, StyledTitle, StyledCard } from "./responsedSurveysList.styled";
import useSurveyStore from "@/stores/useSurveyStore";
import useLoginStore from "@/stores/useLoginStore";

const ResponsedList = () => {
  const { surveys } = useSurveyStore();
  const { user } = useLoginStore();

  return (
    <>
      <StyledTitle> 응답한 설문 </StyledTitle>
      <StyledList>
        {surveys.map((survey) =>
          survey.userId !== user.id ? (
            <StyledCard>
              <Card
                remainTime={survey.remainTime === "00:00" ? "마감" : survey.remainTime}
                title={survey.title}
                probability={survey.probability}
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

export default ResponsedList;
