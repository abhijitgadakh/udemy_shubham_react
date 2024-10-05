import { useState } from "react";
import TaskCard from "./TaskCard";
import BoxCard from "./BoxCard";
import "./TaskList.css";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "record lecture", status: true },
    { id: 2, name: "Play Cricket", status: false },
    { id: 3, name: "Write a book", status: false },
  ]);

  const [show, setShow] = useState(true);
  const styles = {
    color: show ? "#3D8361" : "#be3434",
    border: "2px solid",
    borderColor: show ? "#3D8361" : "#be3434",
  };

  function handleDelete(id) {
    console.log(id);
    setTasks(tasks.filter((task) => task.id !== id));
  }
  return (
    <section className="tasklist">
      <h1 style={styles}>Task List</h1>
      <ul>
        <button onClick={() => setShow(!show)} className="trigger">
          {show ? "Hide" : "Show"}
        </button>
        {show &&
          tasks.map((task, index) => (
            <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
          ))}
      </ul>

      <BoxCard result="success">
        <p className="title">Lorem, ipsum dolor.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dolor.
        </p>
      </BoxCard>

      <BoxCard result="warning">
        <p className="title">Lorem, ipsum dolor.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dolor.
        </p>
      </BoxCard>

      <BoxCard result="alert">
        <p className="title">Lorem, ipsum dolor.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dolor.
        </p>
      </BoxCard>
    </section>
  );
};

export default TaskList;
