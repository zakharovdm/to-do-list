import "./TaskList.css";

const TaskList = (props) => {
  return (
    <ul className="task-list">
      {props.items.map((task) => {
        <TaskItem key={task.id} id={task.id} onDelete={props.onDeleteItem}>
          {task.text}
        </TaskItem>;
      })}
    </ul>
  );
};

export default TaskList;
