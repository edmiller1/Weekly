import React from "react";

export const Sidebar = ({ tasks }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="flex justify-center text-4xl py-3 font-bold tracking-wider text-blue-900 mb-10 pt-5">
        Weekly
      </h1>
      <div>
        <div className="flex flex-col">
          {tasks.map((task) => (
            <div
              style={{ backgroundColor: task.color }}
              key={task.id}
              className="border border-gray-200 mx-5 pl-3 py-2 rounded-3xl break-words mb-3 cursor-pointer"
            >
              <span className="font-bold text-gray-600">{task.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
