import { combineReducers, createStore } from "redux";
import moviesReducer from "./moviesRedux";

const rootReducer = combineReducers({
    loginReducer:moviesReducer,
  });

  //export const store = createStore(moviesReducer);
