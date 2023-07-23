import { create } from "zustand";
import { SurveyType } from "./types/surveyStore.type";

const useSurveyStore = create<SurveyType>((set) => ({
  surveys: [
    {
      remainTime: "",
      deadLine: "2023-07-30-17-30",
      title: "설문지 제목1",
      probability: "20%",
      userId: "abc",
    },
    {
      remainTime: "",
      deadLine: "2023-07-29-17-30",
      title: "설문지 제목2",
      probability: "24%",
      userId: "abc",
    },
    {
      remainTime: "",
      deadLine: "2023-07-20-17-00",
      title: "설문지 제목3",
      probability: "10%",
      userId: "abc",
    },
    {
      remainTime: "",
      deadLine: "2023-08-10-17-30",
      title: "설문지 제목4",
      probability: "10%",
      userId: "abc",
    },
    { remainTime: "", deadLine: "2023-07-23-21-30", title: "설문지 제목5", probability: "30%", userId: "0214kbs" },
    { remainTime: "", deadLine: "2023-07-30-17-30", title: "설문지 제목6", probability: "30%", userId: "abc" },
    { remainTime: "", deadLine: "2023-07-24-04-20", title: "설문지 제목7", probability: "20%", userId: "0214kbs" },
    { remainTime: "", deadLine: "2023-07-24-02-19", title: "설문지 제목8", probability: "50%", userId: "0214kbs" },
    { remainTime: "", deadLine: "2023-07-29-03-51", title: "설문지 제목9", probability: "24%", userId: "0214kbs" },
    { remainTime: "", deadLine: "2023-07-23-06-09", title: "설문지 제목10", probability: "20%", userId: "0214kbs" },
    { remainTime: "", deadLine: "2023-07-24-06-28", title: "설문지 제목10", probability: "20%", userId: "0214kbs" },
    { remainTime: "", deadLine: "2023-07-24-06-18", title: "설문지 제목10", probability: "20%", userId: "0214kbs" },
    { remainTime: "", deadLine: "2023-07-24-02-08", title: "설문지 제목10", probability: "20%", userId: "0214kbs" },
    { remainTime: "", deadLine: "2023-07-23-10-30", title: "설문지 제목11", probability: "20%", userId: "0214kbs" },
    { remainTime: "", deadLine: "2023-07-24-09-20", title: "설문지 제목12", probability: "20%", userId: "def" },
    { remainTime: "", deadLine: "2023-07-23-23-59", title: "설문지 제목13", probability: "20%", userId: "def" },
    { remainTime: "", deadLine: "2023-07-24-12-21", title: "설문지 제목14", probability: "20%", userId: "def" },
  ],
}));

export default useSurveyStore;
