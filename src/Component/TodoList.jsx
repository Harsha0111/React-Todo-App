import React from "react";
import DeleteTodo from "./DeleteTodo";

const TodoList = ({ todos, setTodos }) => {
  const toggoleHandler = (todo) => {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id
        ? {
            ...t,
            done: !t.done,
          }
        : t
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li
            onDoubleClick={() => {
              toggoleHandler(todo);
            }}
            key={todo.id}
            style={{
              textDecoration: todo.done ? "line-through" : "",
            }}
          >
            {todo.text}
            <DeleteTodo todo={todo} setTodos={setTodos} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
