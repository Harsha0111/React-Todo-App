import React from "react";

const AppTodo = ({ setTodos }) => {
  const inputRef = React.useRef();

  const addTodoHandler = (e) => {
    e.preventDefault();
    const text = e.target.elements.addTodo.value;

    setTodos((prevTodos) => {
      const todo = {
        id: prevTodos.length + 1,
        text: text,
        done: false,
      };
      return prevTodos.concat(todo);
    });
    inputRef.current.value = "";
  };

  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <input placeholder="Add Todo" name="addTodo" ref={inputRef}></input>
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AppTodo;
