import "../../App.css";
import "./App.scss";
import { Sidebar } from "../Sidebar/Sidebar";
import { Header } from "../Header/Header";
import { Calendar } from "../Calendar/Calendar";
import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const colors = ["#C2DEE5", "#F2F9AD", "#9ED2C0", "#DCC0EC", "#FF9990"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="App text-gray-600 overflow-hidden min-h-screen">
      <div className="container">
        <div>
          <Sidebar tasks={tasks} setTasks={setTasks} />
        </div>
        <main className="calendar-header">
          <Header
            tasks={tasks}
            setTasks={setTasks}
            input={input}
            setInput={setInput}
            randomColor={randomColor}
          />
          <Calendar tasks={tasks} setTasks={setTasks} />
        </main>
      </div>
    </div>
  );
}

export default App;
