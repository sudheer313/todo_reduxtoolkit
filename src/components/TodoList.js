import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "../store/todosSlice.js";

const TodoList = () => {
  const [text, setText] = useState("");
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo({ id: Date.now(), text }));
    setText("");
  };
  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };
  const handleUpdateTodo = (id, text) => {
    dispatch(updateTodo({ id, text }));
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="text"
              value={todo.text}
              onChange={(e) => handleUpdateTodo(todo.id, e.target.value)}
            />
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoList;
