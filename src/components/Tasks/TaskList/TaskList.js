import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

const TaskList = (props) => {
  return (
    <ul className="task-list">
      {props.items.map((task) => {
        return (
          <TaskItem key={task.id} id={task.id} onDelete={props.onDeleteItem}>
            {task.text}
          </TaskItem>
        );
      })}
    </ul>
  );
};

export default TaskList;
