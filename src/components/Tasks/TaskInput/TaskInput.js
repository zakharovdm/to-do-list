import { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./TaskInput.module.css";

const TaskInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const taskInputChangeHandler = (evt) => {
    setEnteredValue(evt.target.value);
    if (evt.target.value.trim().length > 0) {
      setIsValid(true);
    }
  };

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddTask(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Task</label>
        <input type="text" onChange={taskInputChangeHandler} />
      </div>
      <Button type="submit">Add task</Button>
    </form>
  );
};

export default TaskInput;
