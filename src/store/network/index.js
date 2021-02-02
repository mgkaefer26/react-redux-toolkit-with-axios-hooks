import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import info from "./info";

const slice = createSlice({
  name: "data",
  initialState: {
    name: "",
  },
  reducers: {
    setNameSuccess: (state, action) => {
      state.name = action.payload.name;
    },
  },
});

const { setNameSuccess } = slice.actions;
export const setName = ({ name }) => async (dispatch) => {
  try {
    dispatch(setNameSuccess({ name }));
  } catch (e) {
    return console.error(e.message);
  }
};

const { reducer: data } = slice;
export default combineReducers({
  data,
  info,
});
