import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = { ...action.payload };
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logoutSuccess: (state, action) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});
export default slice.reducer;

const { loginSuccess, logoutSuccess } = slice.actions;
export const login = ({ username, token }) => async (dispatch) => {
  try {
    dispatch(loginSuccess({ username, token }));
  } catch (e) {
    return console.error(e.message);
  }
};
export const logout = () => async (dispatch) => {
  try {
    return dispatch(logoutSuccess());
  } catch (e) {
    return console.error(e.message);
  }
};
