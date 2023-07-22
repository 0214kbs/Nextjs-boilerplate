import { create } from "zustand";
import { SurveyType } from "./types/surveyStore.type";

const useSurveyStore = create<SurveyType>((set) => ({
  surveys: [
    {
      remainTime: "30:00",
      title: "설문지 제목1",
      probability: "20%",
      userId: "abc",
    },
    {
      remainTime: "29:00",
      title: "설문지 제목2",
      probability: "24%",
      userId: "abc",
    },
    {
      remainTime: "10:00",
      title: "설문지 제목3",
      probability: "10%",
      userId: "abc",
    },
    {
      remainTime: "10:00",
      title: "설문지 제목4",
      probability: "10%",
      userId: "abc",
    },
    {
      remainTime: "01:00",
      title: "설문지 제목5",
      probability: "30%",
      userId: "0214kbs",
    },
    {
      remainTime: "01:00",
      title: "설문지 제목6",
      probability: "30%",
      userId: "abc",
    },
    {
      remainTime: "00:00",
      title: "설문지 제목7",
      probability: "20%",
      userId: "0214kbs",
    },
    {
      remainTime: "30:00",
      title: "설문지 제목8",
      probability: "50%",
      userId: "0214kbs",
    },
    {
      remainTime: "29:00",
      title: "설문지 제목9",
      probability: "24%",
      userId: "0214kbs",
    },
    {
      remainTime: "00:00",
      title: "설문지 제목10",
      probability: "20%",
      userId: "0214kbs",
    },
    {
      remainTime: "00:00",
      title: "설문지 제목11",
      probability: "20%",
      userId: "0214kbs",
    },
    {
      remainTime: "00:00",
      title: "설문지 제목12",
      probability: "20%",
      userId: "def",
    },
    {
      remainTime: "00:00",
      title: "설문지 제목13",
      probability: "20%",
      userId: "def",
    },
    {
      remainTime: "00:00",
      title: "설문지 제목14",
      probability: "20%",
      userId: "def",
    },
  ],
}));

export default useSurveyStore;
