import TaskInput from "./components/Tasks/TaskInput/TaskInput";

const App = () => {
  const addTaskHandler = () => {
    console.log('add task');
  };

  return (
    <div>
      <section id="task-form">
        <TaskInput onAddTask={addTaskHandler} />
      </section>
      <section id="tasks"></section>
    </div>
  );
};

export default App;
