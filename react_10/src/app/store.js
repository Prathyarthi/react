import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "../features/todo/todoSlice"

export const store = configureStore({
    reducer: todoReducer,             // Now store is aware of the reducers written in the todoSlice
})