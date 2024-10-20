import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, removeTodo, toggleImportant } from '../features/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li
      style={{
        backgroundColor: todo.important ? '#fffbcc' : 'white',  // Highlight if important
        border: `1px solid ${todo.important ? 'goldenrod' : '#ddd'}`,
      }}
      className="todo-item"
    >
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer',
          color: todo.completed ? 'gray' : 'black',
        }}
        onClick={() => dispatch(toggleComplete(todo.id))}
      >
        {todo.text}
      </span>

      <div className="todo-actions">
        <button
          className="mark-important"
          onClick={() => dispatch(toggleImportant(todo.id))}
        >
          {todo.important ? 'Unmark' : 'Mark'}
        </button>

        <button
          className="delete-btn"
          onClick={() => dispatch(removeTodo(todo.id))}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
