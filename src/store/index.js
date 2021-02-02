import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import user from "./user";
import network from "./network";
import movies from "./movies";
import movie from "./movie";

const reducer = combineReducers({
  user,
  network,
  movies,
  movie,
});

const store = configureStore({
  reducer,
});

export default store;
