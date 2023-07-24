"use client";
import React, { useState, useEffect } from "react";
import Card from "@/components/card";
import { StyledList, StyledTitle, StyledCard } from "./responsedSurveysList.styled";
import useSurveyStore from "@/stores/useSurveyStore";
import useLoginStore from "@/stores/useLoginStore";
import moment from "moment";
import useTimerHook from "@/hooks/useTimerHook";

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

        const aRemainTime = aDeadLine.diff(moment(), "seconds");
        const bRemainTime = bDeadLine.diff(moment(), "seconds");

        if (aRemainTime < 0 && bRemainTime >= 0) {
          return 1;
        } else if (bRemainTime < 0 && aRemainTime >= 0) {
          return -1;
        } else {
          return aDeadLine.isAfter(bDeadLine) ? 1 : -1;
        }
      });

      // setSortedSurveys(sorted);
      setSortedSurveys((prev) => {
        const data = sorted.map((prev: any) => {
          return { ...prev, remainTime: useTimerHook(prev.deadLine) };
        });
        return data;
      });
    } else {
      // setSortedSurveys(surveys);
      setSortedSurveys((prev) => {
        const data = surveys.map((prev: any) => {
          return { ...prev, remainTime: useTimerHook(prev.deadLine) };
        });
        return data;
      });
    }
  };

  useEffect(() => {
    sortSurveys(sortType);
  }, [sortType, surveys]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSortedSurveys((prev) => {
        const data = prev.map((prev: any) => {
          return { ...prev, remainTime: useTimerHook(prev.deadLine) };
        });
        return data;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
            <StyledCard key={index}>
              <Card surveyType={survey.surveyType} remainTime={survey.remainTime} title={survey.title} id={survey.userId} probability={survey.probability} />
            </StyledCard>
          ) : null,
        )}
      </StyledList>
    </>
  );
};

export default ResponsedList;
