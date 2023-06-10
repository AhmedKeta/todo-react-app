import "./Todolist.css";
import { Button, ListGroup } from "react-bootstrap";
const TodoList = ({ tasks, removeTodo, toggleCompleted }) => {
  return (
    <ListGroup>
      {tasks.map((todo) => (
        <ListGroup.Item
          key={todo.id}
          className={todo.completed ? "completed" : ""}>
          <h3>{todo.text}</h3>
          <div className="d-flex justify-content-around">
            <Button variant="danger" onClick={() => removeTodo(todo.id)}>
              Delete
            </Button>
            <Button
              variant={todo.completed ? "secondary" : "success"}
              onClick={() => toggleCompleted(todo.id)}>
              {todo.completed ? "Completed" : "Complete"}
            </Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TodoList;
