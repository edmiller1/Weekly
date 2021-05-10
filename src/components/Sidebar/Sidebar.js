import React from "react";
import { Task } from "../Task/Task";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../util/types";

export const Sidebar = (props) => {
  const { tasks, changeTaskTag, removeTask } = props;

  const [, drop] = useDrop({
    accept: ItemTypes.TASK,
    drop: (item, monitor) => changeTaskTag(item.id, "QUEUE"),
  });

  return (
    <div className="sidebar bg-gray-100 min-h-screen" ref={drop}>
      <h1 className="sidebar-text flex justify-center text-4xl py-3 font-bold tracking-wider text-blue-900 mb-10 pt-5">
        Weekly
      </h1>
      <div>
        <div className="flex flex-col">
          {tasks.map((task) => {
            return task.tag === "QUEUE" ? (
              <Task task={task} removeTask={removeTask} key={task.id} />
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};
