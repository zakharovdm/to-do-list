import { useState } from "react";

import Button from "../../UI/Button/Button";
import "./TaskInput.css";

const TaskInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const taskInputChangeHandler = (evt) => {
    setEnteredValue(evt.target.value);
  };

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    props.onAddTask(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Task</label>
        <input type="text" onChange={taskInputChangeHandler} />
      </div>
      <Button type="submit">Add task</Button>
    </form>
  );
};

export default TaskInput;
