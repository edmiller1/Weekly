import React from "react";
import "./Day.scss";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../util/types";
import { Task } from "../Task/Task";

export const Day = (props) => {
  const { name, dayIndex, tasks, removeTask, changeTaskTag } = props;

  const [isOver, drop] = useDrop({
    accept: ItemTypes.TASK,
    drop: (item) => changeTaskTag(item.id, name),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const isActiveDay = () => {
    return new Date().getDay() === dayIndex;
  };

  return (
    <div ref={drop}>
      <h1 className={isActiveDay() ? "active-day" : "day-color"}>{name}</h1>
      <div className={isOver ? "day-background selected" : "day-background"}>
        {tasks.map((task) => (
          <Task task={task} removeTask={removeTask} key={task.id} />
        ))}
      </div>
    </div>
  );
};
