import React from "react";

const TaskCard = ({ task, handleDelete, info }) => {
  return (
    <>
      <li className={task.status ? "completed" : "incomplete"}>
        <span>
          {task.id} - {task.name} - {info}
        </span>
        {/* <button className="delete"> */}
        <button className="delete" onClick={() => handleDelete(task.id)}>
          delete
        </button>
      </li>
    </>
  );
};
export default TaskCard;
