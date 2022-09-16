import { useState } from "react";

import TaskInput from "./components/Tasks/TaskInput/TaskInput";
import TaskList from "./components/Tasks/TaskList/TaskList";
import styles from "./App.module.css";

const App = () => {
  const [tasks, setTask] = useState([
    { text: "One task", id: "t1" },
    { text: "Two task", id: "t2" },
  ]);

  const addTaskHandler = (enteredText) => {
    setTask((prevTask) => {
      const updatedTasks = [...prevTask];
      updatedTasks.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedTasks;
    });
  };

  const deleteItemHandler = (taskId) => {
    setTask((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
      return updatedTasks;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No tasks found. Maybe add one?</p>
  );

  if (tasks.length > 0) {
    content = <TaskList items={tasks} onDeleteItem={deleteItemHandler} />;
  }

  return (
    <div>
      <section id={styles["task-form"]}>
        <TaskInput onAddTask={addTaskHandler} />
      </section>
      <section id={styles.tasks}>{content}</section>
    </div>
  );
};

export default App;
