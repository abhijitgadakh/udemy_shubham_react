import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "record lecture", status: true },
    { id: 2, name: "Play Cricket", status: false },
    { id: 3, name: "Write a book", status: false },
  ]);

  const [show, setShow] = useState(true);

  function handleDelete(id) {
    console.log(id);
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="App">
      <h1>Task List</h1>
      <ul>
        <button onClick={() => setShow(!show)} className="trigger">
          Toggle
        </button>
        {show &&
          tasks.map((task, index) => (
            <li
              key={task.id}
              className={task.status ? "completed" : "incomplete"}
            >
              <span>
                {task.id} - {task.name}
              </span>
              <button className="delete" onClick={() => handleDelete(task.id)}>
                delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default App;
