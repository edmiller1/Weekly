import React from "react";
import { v4 as uuidv4 } from "uuid";
import { ThemeChange } from "../ThemeChange/ThemeChange";

export const Header = ({ tasks, setTasks, input, setInput, randomColor }) => {
  const addTask = (e) => {
    const task = { id: uuidv4(), text: input, color: randomColor };
    tasks.push(task);
    setTasks(tasks);
    setInput("");
  };

  const removeAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="ml-10 mr-5 flex justify-between items-center">
      <div className="flex">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Add new item..."
          className="task-input py-3 px-3 rounded-full bg-gray-100 w-96 font-extrabold text-xl focus:outline-none text-gray-600"
        />
        <button
          onClick={() => addTask()}
          className="task-input ml-5 text-gray-400 bg-gray-100 px-4 rounded-xl text-4xl hover:text-gray-600 hover:bg-gray-300 transition duration-300 focus:outline-none"
        >
          +
        </button>
      </div>
      <div className="flex items-center">
        <ThemeChange />
        <img
          className="ml-3 h-8 w-8 cursor-pointer hover:opacity-70 transition duration-200"
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/wastebasket_1f5d1-fe0f.png"
          alt="trash-can-emoji"
          onClick={() => removeAllTasks()}
        />
      </div>
    </div>
  );
};
