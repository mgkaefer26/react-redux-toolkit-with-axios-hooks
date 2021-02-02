import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MoviesList from "../../components/MoviesList";
import { logout } from "../../store/user";

export default function IndexPage() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  return (
    <div>
      <div
        style={{ display: "flex", flexDirection: "row-reverse", padding: 5 }}
      >
        <button onClick={() => dispatch(logout())}>Logout</button>
        Hi, {user?.username}!
      </div>
      <MoviesList />
    </div>
  );
}
