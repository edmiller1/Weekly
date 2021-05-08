import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { randomColor } from "../util/randomColor";

function useTasks() {
  //State
  const [tasks, setTasks] = useState([]);
  //Functions

  const addNewTask = (newTaskInput) => {
    setTasks(
      tasks.concat({
        id: uuidv4(),
        tag: "QUEUE",
        text: newTaskInput,
        color: randomColor(),
      })
    );
  };

  const changeTaskTag = (id, newTag) => {
    const task = tasks.find((task) => task.id === id);
    task.tag = newTag;
    setTasks(tasks.filter((task) => task.id !== id).concat(task));
  };

  const removeTask = (id) => {
    let newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const removeAllTasks = () => {
    setTasks([]);
  };

  return {
    tasks,
    changeTaskTag,
    removeTask,
    removeAllTasks,
    addNewTask,
  };
}

export { useTasks };
