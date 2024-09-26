import { useState } from "react";
import TaskCard from "./TaskCard";
import BoxCard from "./BoxCard";

const TaskList = ({ info }) => {
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
    <>
      <h1>Task List</h1>
      <ul>
        <button onClick={() => setShow(!show)} className="trigger">
          Toggle
        </button>
        {show &&
          tasks.map((task, index) => (
            <TaskCard
              key={task.id}
              task={task}
              handleDelete={handleDelete}
              info={info}
            />
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
    </>
  );
};

export default TaskList;
