import React from "react";
import "./Task.scss";
import { ItemTypes } from "../../util/types";
import { useDrag } from "react-dnd";

export const Task = (props) => {
  const { id, tag } = props.task;

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.TASK,
    item: {
      id: id,
      text: props.task.text,
      tag: tag,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      style={{ backgroundColor: props.task.color }}
      className={"task " + props.task.color + (isDragging ? " selected" : "")}
      ref={drag}
    >
      <span className="font-bold text-gray-600 cursor-default">
        {props.task.text}
      </span>
      <i
        className="fas fa-times delete-button cursor-pointer"
        onClick={() => props.removeTask(id)}
      ></i>
    </div>
  );
};
