import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import todoReducer from "./todosSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
