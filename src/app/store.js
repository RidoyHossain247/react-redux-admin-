import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../fetaures/counts/countSlice"

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})
export default store