import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "ad",
  initialState: {
    data: null,
  },
  reducers: {
    setDataSuccess: (state, action) => {
      state.data = action.payload.data;
    },
  },
});
export default slice.reducer;

const { setDataSuccess } = slice.actions;
export const setDataName = ({ data }) => async (dispatch) => {
  try {
    dispatch(setDataSuccess({ data }));
  } catch (e) {
    return console.error(e.message);
  }
};
