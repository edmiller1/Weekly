import React from "react";
import "./Calendar.scss";
import { Day } from "../Day/Day";

export const Calendar = () => {
  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <div className="calendar ml-10">
      {dayNames.map((name, index) => (
        <Day key={name} name={name} dayIndex={index} />
      ))}
    </div>
  );
};
