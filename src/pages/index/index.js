import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, Box, Button } from "@material-ui/core";
import MoviesList from "../../components/MoviesList";
import { logout } from "../../store/user";

export default function IndexPage() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { user } = useSelector((state) => state.user);
  const onLogout = React.useCallback(() => dispatch(logout()), []);

  return (
    <Box className={classes.root}>
      <Box className={classes.helloWrapper}>
        <Button
          onClick={onLogout}
          color="secondary"
          variant="outlined"
          className={classes.signOutButton}
        >
          Logout
        </Button>
        Hi, {user?.username}!
      </Box>
      <MoviesList />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  helloWrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row-reverse",
    padding: 5,
  },
  signOutButton: {
    marginLeft: 15,
    color: "#9a2525",
    borderColor: "#9a2525",
  },
}));
