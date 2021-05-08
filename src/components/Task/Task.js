import React from "react";
import "./Task.scss";
import { ItemTypes } from "../../util/types";
import { useDrag } from "react-dnd";

export const Task = (props) => {
  const { id, tag } = props.task;

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.TASK,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    //canDrag: () => !isEditMode,
  });

  return (
    <div
      style={{ backgroundColor: props.task.color }}
      key={props.task.id}
      className={"task " + (isDragging ? " selected" : "")}
      ref={drag}
    >
      <span className="font-bold text-gray-600 cursor-default">
        {props.task.text}
      </span>
      <i
        className="fas fa-times delete-button cursor-pointer"
        onClick={() => props.removeTask(props.task.id)}
      ></i>
    </div>
  );
};
