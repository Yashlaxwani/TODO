import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice';

const TodoInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task) {
      dispatch(addTodo(task));
      setTask('');  // Clear input field
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default TodoInput;
