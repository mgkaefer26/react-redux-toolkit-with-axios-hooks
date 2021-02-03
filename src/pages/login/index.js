import React from "react";
import LoginForm from "../../components/LoginForm";
import { motion } from "framer-motion";
import { makeStyles, Box } from "@material-ui/core";

const LoginPage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.leftSide}></Box>
      <motion.div
        className={classes.rightSide}
        animate={{ scale: 1.1 }}
        transition={{ duration: 0.4 }}
      >
        <LoginForm />
      </motion.div>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  leftSide: {
    width: "60%",
    // background: "#292525f5",
    background: "url('../../assets/images/login-bg.jpg') no-repeat #262626",
  },
  rightSide: {
    width: "40%",
    maxHeight: "88%",
  },
}));

export default LoginPage;
