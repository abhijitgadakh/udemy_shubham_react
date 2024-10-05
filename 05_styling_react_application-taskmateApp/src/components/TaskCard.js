import "./TaskCard.css";
import styles from "./TaskCard.module.css";

const TaskCard = ({ task, handleDelete }) => {
  return (
    <div className="taskcard">
      <li className={`${task.status ? "completed" : "incomplete"}`}>
        <span className={styles.title}>
          {task.id} - {task.name}
        </span>
        {/* <button className="delete"> */}
        <button className="delete" onClick={() => handleDelete(task.id)}>
          delete
        </button>
      </li>
    </div>
  );
};
export default TaskCard;

//'styles' is declared but its value is never read.
