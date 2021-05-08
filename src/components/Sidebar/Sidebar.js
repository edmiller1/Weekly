import React from "react";
import { Task } from "../Task/Task";

export const Sidebar = (props) => {
  const { tasks, changeTaskTag, removeTask } = props;

  return (
    <div className="sidebar bg-gray-100 min-h-screen">
      <h1 className="sidebar-text flex justify-center text-4xl py-3 font-bold tracking-wider text-blue-900 mb-10 pt-5">
        Weekly
      </h1>
      <div>
        <div className="flex flex-col">
          {tasks.map((task) => (
            <Task task={task} removeTask={removeTask} key={task.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
