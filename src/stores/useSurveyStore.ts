import { create } from "zustand";
import { SurveyType } from "./types/surveyStore.type";

const useSurveyStore = create<SurveyType>((set) => ({
  surveys: [
    { remainTime: "", deadLine: "2023-07-24-09-20", title: "설문지 제목12", probability: "10%", userId: "def", surveyType: "타임어택" },
    { remainTime: "", deadLine: "2023-07-24-09-20", title: "설문지 제목12", probability: "21%", userId: "ghi", surveyType: "타임어택" },
    { remainTime: "", deadLine: "2023-07-24-09-20", title: "설문지 제목12", probability: "29%", userId: "(주)kbs", surveyType: "타임어택" },
    { remainTime: "", deadLine: "2023-07-30-17-30", title: "설문지 제목1", probability: "27%", userId: "abc", surveyType: "타임어택" },
    { remainTime: "", deadLine: "2023-07-23-21-30", title: "설문지 제목5", probability: "30%", userId: "0214kbs", surveyType: "타임어택" },
    { remainTime: "", deadLine: "2023-07-30-17-30", title: "설문지 제목6", probability: "30%", userId: "abc", surveyType: "타임어택" },
    { remainTime: "", deadLine: "2023-07-24-13-20", title: "설문지 제목7", probability: "20%", userId: "0214kbs", surveyType: "타임어택" },
    { remainTime: "", deadLine: "2023-07-24-13-19", title: "설문지 제목8", probability: "50%", userId: "0214kbs", surveyType: "타임어택" },
    { remainTime: "", deadLine: "2023-07-29-03-51", title: "설문지 제목9", probability: "24%", userId: "0214kbs", surveyType: "타임어택" },
    { remainTime: "", deadLine: "2023-07-23-06-09", title: "설문지 제목10", probability: "20%", userId: "0214kbs", surveyType: "타임어택" },
    { remainTime: "", deadLine: "2023-07-24-15-28", title: "설문지 제목10", probability: "30%", userId: "0214kbs", surveyType: "타임어택" },
    { remainTime: "", deadLine: "2023-07-24-06-18", title: "설문지 제목10", probability: "40%", userId: "0214kbs", surveyType: "타임어택" },
    { remainTime: "", deadLine: "2023-07-24-15-08", title: "설문지 제목10", probability: "23%", userId: "0214kbs", surveyType: "타임어택" },
    { remainTime: "", deadLine: "2023-07-23-10-30", title: "설문지 제목11", probability: "29%", userId: "0214kbs", surveyType: "타임어택" },
    { remainTime: "", deadLine: "2023-07-23-23-59", title: "설문지 제목13", probability: "12%", userId: "def", surveyType: "타임어택" },
    { remainTime: "", deadLine: "2023-07-24-17-21", title: "설문지 제목14", probability: "16%", userId: "def", surveyType: "타임어택" },
  ],
}));

export default useSurveyStore;
