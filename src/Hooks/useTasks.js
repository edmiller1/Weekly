import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { randomColor } from "../util/randomColor";

function useTasks() {
  //State
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) setTasks(JSON.parse(storedTasks));
  }, []);

  useEffect(() => {
    persistTasksToStorage(tasks);
  }, [tasks]);

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
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const removeAllTasks = () => {
    setTasks([]);
  };

  const persistTasksToStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const sayHello = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    //console.log("Hello " + id);
  };

  return {
    tasks,
    changeTaskTag,
    removeTask,
    removeAllTasks,
    addNewTask,
    setTasks,
    sayHello,
  };
}

export { useTasks };
