import { useEffect } from "react";
import moment from "moment";

export function useTimerHook(deadLine: any) {
  const deadLineTime = moment(deadLine, "YYYY-MM-DD-HH-mm");
  const now = moment();

  let diffTime = deadLineTime.diff(now);
  let remainTime = "";

  if (diffTime > 0) {
    const duration = moment.duration(diffTime);

    const years = Math.floor(duration.asYears());
    duration.subtract(years, "years");

    const months = Math.floor(duration.asMonths());
    duration.subtract(months, "months");

    const days = Math.floor(duration.asDays());
    duration.subtract(days, "days");

    const hours = Math.floor(duration.asHours());
    duration.subtract(hours, "hours");

    const minutes = Math.floor(duration.asMinutes());
    duration.subtract(minutes, "minutes");

    const seconds = Math.floor(duration.asSeconds());

    if (years > 0 && months > 0) {
      remainTime = `${years > 0 ? years.toString().padStart(2, "0") + "년 " : ""}${months > 0 ? months.toString().padStart(2, "0") + "월 " : ""}`;
    } else if (months > 0 && days > 0) {
      remainTime = `${months > 0 ? days.toString().padStart(2, "0") + "월 " : ""}${days > 0 ? days.toString().padStart(2, "0") + "일 " : ""}`;
    } else if (days > 0 && hours > 0) {
      remainTime = `${days > 0 ? days.toString().padStart(2, "0") + "일 " : ""}${hours > 0 ? hours.toString().padStart(2, "0") + "시 " : ""}`;
    } else if (hours > 0 && minutes > 0) {
      remainTime = `${hours > 0 ? hours.toString().padStart(2, "0") + "시 " : ""}${minutes > 0 ? minutes.toString().padStart(2, "0") + "분 " : ""}`;
    } else if (minutes > 0 && seconds >= 0) {
      remainTime = `${minutes > 0 ? minutes.toString().padStart(2, "0") + "분 " : ""}${
        seconds >= 0 ? seconds.toString().padStart(2, "0") + "초 " : ""
      }`;
    }
    // remainTime = `${years > 0 ? years + "년 " : ""}${months > 0 ? months + "월 " : ""}${days > 0 ? days + "일 " : ""}${
    //   hours > 0 ? hours + "시 " : ""
    // }${minutes > 0 ? minutes + "분 " : ""}${seconds > 0 ? seconds + "초" : ""}`;
  }

  return remainTime;
}

export default useTimerHook;
