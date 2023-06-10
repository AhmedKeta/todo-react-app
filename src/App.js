import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([

  ]);
  const addTodo = (newTask) => {
    setTasks([...tasks, newTask]);
  };
    const removeTodo = (taskId) => {
      setTasks(tasks.filter((task) => task.id !== taskId));
    };
    const toggleCompleted = (taskId) => {
      setTasks(
        tasks.map((task) =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
        )
      );
    };
  return (
    <Container>
      <TodoForm addTodo={addTodo}></TodoForm>
      <TodoList
        tasks={tasks}
        removeTodo={removeTodo}
        toggleCompleted={toggleCompleted}></TodoList>
    </Container>
  );
}

export default App;
