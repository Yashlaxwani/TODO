import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
        important: false,  // New field to track if task is important
      };
      state.push(newTodo);
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    toggleImportant: (state, action) => { // New reducer
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.important = !todo.important;  // Toggle the importance
      }
    },
  },
});

export const { addTodo, removeTodo, toggleComplete, toggleImportant } = todoSlice.actions;
export default todoSlice.reducer;
