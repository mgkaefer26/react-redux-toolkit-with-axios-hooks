import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "allShows",
  initialState: {
    user: null,
  },
  reducers: {
    setAllShowsSuccess: (state, action) => {
      state.user = { ...action.payload };
    },
  },
});
export default slice.reducer;

const { setAllShowsSuccess } = slice.actions;
export const setAllShows = ({ username, token }) => async (dispatch) => {
  try {
    dispatch(setAllShowsSuccess({ username, token }));
  } catch (e) {
    return console.error(e.message);
  }
};
