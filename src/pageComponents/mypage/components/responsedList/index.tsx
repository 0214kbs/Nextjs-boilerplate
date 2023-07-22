"use client";
import React, { useState, useEffect } from "react";
import Card from "@/components/card";
import { StyledList, StyledTitle, StyledCard } from "./responsedSurveysList.styled";
import useSurveyStore from "@/stores/useSurveyStore";
import useLoginStore from "@/stores/useLoginStore";
import moment from "moment";

const ResponsedList = () => {
  const { surveys } = useSurveyStore();
  const { user } = useLoginStore();

  const [sortType, setSortType] = useState("recommend");
  const [sortedSurveys, setSortedSurveys] = useState(surveys);

  const sortSurveys = (type: any) => {
    if (type === "deadLine") {
      const sorted = [...surveys].sort((a, b) => {
        const aDeadLine = moment(a.deadLine, "YYYY-MM-DD-HH-mm");
        const bDeadLine = moment(b.deadLine, "YYYY-MM-DD-HH-mm");
        return aDeadLine.isBefore(bDeadLine) ? 1 : -1;
      });
      setSortedSurveys(sorted);
    } else {
      setSortedSurveys(surveys);
    }
  };

  useEffect(() => {
    sortSurveys(sortType);
  }, [sortType, surveys]);

  return (
    <>
      <StyledTitle> 응답한 설문 </StyledTitle>
      <div>
        <button onClick={() => setSortType("recommend")}>추천순</button>
        <button onClick={() => setSortType("deadLine")}>마감순</button>
      </div>
      <StyledList>
        {sortedSurveys.map((survey, index) =>
          survey.userId !== user.id ? (
            <StyledCard key={index}>{/* <Card deadLine={survey.deadLine} title={survey.title} id={survey.userId} /> */}</StyledCard>
          ) : null,
        )}
      </StyledList>
    </>
  );
};

export default ResponsedList;
