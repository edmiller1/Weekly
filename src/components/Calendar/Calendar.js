import React from "react";
import "./Calendar.scss";
import { Day } from "../Day/Day";

export const Calendar = (props) => {
  const { tasks, removeTask, changeTaskTag } = props;

  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <div className="calendar ml-10">
      {dayNames.map((name, index) => (
        <Day
          key={name}
          name={name}
          dayIndex={index}
          tasks={tasks.filter((task) => task.tag === name)}
          removeTasks={removeTask}
          changeTaskTag={changeTaskTag}
        />
      ))}
    </div>
  );
};
