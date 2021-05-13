import React from "react";
import "./Calendar.scss";
import { Day } from "../Day/Day";

export const Calendar = (props) => {
  const { tasks, removeTask, changeTaskTag, setTasks, sayHello } = props;

  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <div className="calendar ml-10">
      {dayNames.map((name, index) => {
        return (
          <Day
            key={name}
            name={name}
            dayIndex={index}
            tasks={tasks.filter((task) => task.tag === name)}
            removeTask={removeTask}
            changeTaskTag={changeTaskTag}
            setTasks={setTasks}
            sayHello={sayHello}
          />
        );
      })}
    </div>
  );
};
