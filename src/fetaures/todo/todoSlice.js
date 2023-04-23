import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
const initialtodos = {
  todos: [
    {
      id: uuidv4(),
      firstName: 'Ridoy',
      lastName: 'Hossin',
      age: 29
    },
    {
      id: uuidv4(),
      firstName: 'Sabug',
      lastName: 'Biplob',
      age: 35
    }
  ]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialtodos,
  reducers: {
    showTodo: state => state,
    addTodo: (state, actions) => {
      state.todos.push(actions.payload)

    },
    deleteTodo: (state, actions) => {
      const deleteId = actions.payload;
      state.todos = state.todos.filter((item) => item.id !== deleteId);
    },
    updateTodo: (state, actions) => {
      state.todos.map((item) => {
        if (item.id == actions.payload.id) {
          item.firstName = actions.payload.firstName
          item.lastName = actions.payload.lastName
          item.age = actions.payload.age
        }
      })
    }

  }
})
export const { showTodo, addTodo, deleteTodo, updateTodo, } = todoSlice.actions;
export default todoSlice.reducer 