import React from "react";
import "./Day.scss";

export const Day = ({ name, dayIndex }) => {
  const isActiveDay = () => {
    return new Date().getDay() === dayIndex;
  };

  return (
    <div>
      <h1 className={isActiveDay() ? "active-day" : "day-color"}>{name}</h1>
      <div className="day-background"></div>
    </div>
  );
};
