import { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./TaskInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "red" : "black")}
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//     background: ${(props) => (props.invalid ? "salmon" : "transparent")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

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
