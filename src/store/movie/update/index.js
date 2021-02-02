import { combineReducers } from "redux";
import guidebox from "./guidebox";
import tmdb from "./tmdb";

export default combineReducers({
  guidebox,
  tmdb,
});
