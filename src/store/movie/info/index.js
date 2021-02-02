import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "info",
  initialState: {
    data: "",
  },
  reducers: {
    setDataSuccess: (state, action) => {
      state.data = action.payload.data;
    },
  },
});
export default slice.reducer;

const { setDataSuccess } = slice.actions;
export const setData = ({ data }) => async (dispatch) => {
  try {
    dispatch(setDataSuccess({ data }));
  } catch (e) {
    return console.error(e.message);
  }
};
