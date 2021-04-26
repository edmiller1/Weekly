import React from "react";
import { v4 as uuidv4 } from "uuid";

export const Header = ({ tasks, setTasks, input, setInput, randomColor }) => {
  const addTask = (e) => {
    const task = { id: uuidv4(), text: input, color: randomColor };
    tasks.push(task);
    setTasks(tasks);
    //console.log(tasks);
    setInput("");
  };

  return (
    <div className="ml-10 mr-5 flex justify-between items-center">
      <div className="flex">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Add new item..."
          className="py-3 px-3 rounded-full bg-gray-100 w-96 font-extrabold text-xl focus:outline-none text-gray-600"
        />
        <button
          onClick={() => addTask()}
          className="ml-5 text-gray-400 bg-gray-100 px-4 rounded-xl text-4xl hover:text-gray-600 hover:bg-gray-300 transition duration-300 focus:outline-none"
        >
          +
        </button>
      </div>
      <div className="flex items-center">
        <img
          className="w-8 h-8 cursor-pointer hover:opacity-70 transition duration-200"
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/full-moon_1f315.png"
          alt="full-moon-emoji"
        />
        <img
          className="ml-3 h-8 w-8 cursor-pointer hover:opacity-70 transition duration-200"
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/wastebasket_1f5d1-fe0f.png"
          alt="trash-can-emoji"
        />
      </div>
    </div>
  );
};
