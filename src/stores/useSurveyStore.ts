import { create } from "zustand";
import { SurveyType } from "./types/surveyStore.type";

const useSurveyStore = create<SurveyType>((set) => ({
  surveys: [
    {
      // remainTime: "30:00",
      deadLine: "2023-07-30-17-30",
      title: "설문지 제목1",
      probability: "20%",
      userId: "abc",
    },
    {
      deadLine: "2023-07-29-17-30",
      title: "설문지 제목2",
      probability: "24%",
      userId: "abc",
    },
    {
      deadLine: "2023-07-20-17-00",
      title: "설문지 제목3",
      probability: "10%",
      userId: "abc",
    },
    {
      deadLine: "2023-08-10-17-30",
      title: "설문지 제목4",
      probability: "10%",
      userId: "abc",
    },
    {
      deadLine: "2023-07-23-15-30",
      title: "설문지 제목5",
      probability: "30%",
      userId: "0214kbs",
    },
    {
      deadLine: "2023-07-30-17-30",
      title: "설문지 제목6",
      probability: "30%",
      userId: "abc",
    },
    {
      deadLine: "2023-07-23-04-20",
      title: "설문지 제목7",
      probability: "20%",
      userId: "0214kbs",
    },
    {
      deadLine: "2023-07-23-02-19",
      title: "설문지 제목8",
      probability: "50%",
      userId: "0214kbs",
    },
    {
      deadLine: "2023-07-29-03-51",
      title: "설문지 제목9",
      probability: "24%",
      userId: "0214kbs",
    },
    {
      deadLine: "2023-07-23-02-08",
      title: "설문지 제목10",
      probability: "20%",
      userId: "0214kbs",
    },
    {
      deadLine: "2023-07-23-04-28",
      title: "설문지 제목10",
      probability: "20%",
      userId: "0214kbs",
    },
    {
      deadLine: "2023-07-23-05-18",
      title: "설문지 제목10",
      probability: "20%",
      userId: "0214kbs",
    },
    {
      deadLine: "2023-07-24-02-08",
      title: "설문지 제목10",
      probability: "20%",
      userId: "0214kbs",
    },
    {
      deadLine: "2023-07-23-17-30",
      title: "설문지 제목11",
      probability: "20%",
      userId: "0214kbs",
    },
    {
      deadLine: "2023-07-23-17-30",
      title: "설문지 제목12",
      probability: "20%",
      userId: "def",
    },
    {
      deadLine: "2023-07-23-17-30",
      title: "설문지 제목13",
      probability: "20%",
      userId: "def",
    },
    {
      deadLine: "2023-07-23-17-30",
      title: "설문지 제목14",
      probability: "20%",
      userId: "def",
    },
  ],
}));

export default useSurveyStore;
