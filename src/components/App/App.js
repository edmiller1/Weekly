import "../../App.css";
import "./App.scss";
import { Sidebar } from "../Sidebar/Sidebar";
import { Header } from "../Header/Header";
import { Calendar } from "../Calendar/Calendar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useTasks } from "../../Hooks/hooks";

function App() {
  const {
    tasks,
    changeTaskTag,
    removeTask,
    removeAllTasks,
    addNewTask,
    setTasks,
    sayHello,
  } = useTasks();

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App text-gray-600 overflow-hidden min-h-screen">
        <div className="container">
          <Sidebar
            tasks={tasks}
            changeTaskTag={changeTaskTag}
            removeTask={removeTask}
            setTasks={setTasks}
          />
          <main className="calendar-header">
            <Header addNewTask={addNewTask} removeAllTasks={removeAllTasks} />
            <Calendar
              tasks={tasks}
              removeTask={removeTask}
              changeTaskTag={changeTaskTag}
              setTasks={setTasks}
              sayHello={sayHello}
            />
          </main>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
