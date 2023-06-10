import "./TodoForm.css"
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function TodoForm({ addTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim()) {
      addTodo({
        id: Date.now(),
        text: newTodo.trim(),
        completed: false,
      });
      setNewTodo("");
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="mb-3 main-form alert alert-primary">
          <h1>ToDo-App!!</h1>
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Enter new todo"
          value={newTodo}
                  onChange={handleInputChange}
                        className="form-input"

        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Todo
      </Button>
    </Form>
  );
}

export default TodoForm;