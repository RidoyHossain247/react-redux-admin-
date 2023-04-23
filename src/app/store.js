import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../fetaures/counts/countSlice"
import todoReducer from "../fetaures/todo/todoSlice"

const store = configureStore({
  reducer: {
    counterReducer,
    todoReducer,
  }
})
export default store