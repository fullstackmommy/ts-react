import { createStore } from "redux";
import { reducer as todoReducer } from "./ducks/todo";

export default createStore(todoReducer);
