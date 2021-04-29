import React from "react";

export const Sidebar = ({ tasks, setTasks }) => {
  const removeTask = (id) => {
    console.log(id);
    let newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <div className="sidebar bg-gray-100 min-h-screen">
      <h1 className="sidebar-text flex justify-center text-4xl py-3 font-bold tracking-wider text-blue-900 mb-10 pt-5">
        Weekly
      </h1>
      <div>
        <div className="flex flex-col">
          {tasks.map((task) => (
            <div
              style={{ backgroundColor: task.color }}
              key={task.id}
              className="border border-gray-200 mx-5 pl-3 py-2 rounded-3xl break-words mb-3"
            >
              <span className="font-bold text-gray-600">{task.text}</span>
              <i
                className="fas fa-times cursor-pointer float-right pr-4 pt-1 flex items-center"
                onClick={() => removeTask(task.id)}
              ></i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
