import React from "react";

const DeleteTodo = ({ todo, setTodos }) => {
  const deleteHandler = () => {
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => {
        return t.id !== todo.id;
      });
    });
  };

  return (
    <span
      onClick={() => {
        deleteHandler();
      }}
      style={{
        color: "red",
        marginLeft: "10px",
      }}
    >
      x
    </span>
  );
};
export default DeleteTodo;
