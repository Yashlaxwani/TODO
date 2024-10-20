import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';


const TodoApp = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <div className="todo-input">
        <TodoInput />
      </div>
      <TodoList />
    </div>
  );
};

export default TodoApp;
