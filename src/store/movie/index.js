import { combineReducers } from "redux";
import favorites from "./favorites";
import info from "./info";
import update from "./update";
import watch from "./watch";
import watchLater from "./watchLater";

export default combineReducers({
  favorites,
  info,
  update,
  watch,
  watchLater,
});
