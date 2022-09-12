import { useState } from 'react';

const TaskInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');

  const taskInputChangeHandler = (evt) => {
    setEnteredValue(evt.target.value);
  };

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    props.onAddTaks(enteredValue);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Task</label>
        <input type="text" onChange={taskInputChangeHandler} />
      </div>
      <button>Add Task</button>
    </form>
  );
};

export default TaskInput;
