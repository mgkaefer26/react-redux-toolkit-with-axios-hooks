import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import LoginPage from "../../pages/login";

export default function PrivateRoute({
  path,
  children,
  Component,
  ...restProps
}) {
  const { user } = useSelector((state) => state.user);

  return user?.token ? (
    <Route path={path} component={Component} {...restProps} />
  ) : (
    <>
      <Redirect to="/login" />
      <LoginPage />
    </>
  );
}
