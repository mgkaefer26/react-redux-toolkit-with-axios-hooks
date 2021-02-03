import React from "react";
import { useDispatch } from "react-redux";
import useAxios from "axios-hooks";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { makeStyles, Box, Button } from "@material-ui/core";
import { login } from "../../store/user";
import Loading from "../Loading";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

const SigninSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(100, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(5, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
});

export default function LoginForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [values, setValues] = React.useState({ username: "", password: "" });

  const [{ data: loginData, loading, error }, executeLogin] = useAxios(
    {
      url: "https://reqres.in/api/login",
      method: "POST",
    },
    { manual: true }
  );

  const onSubmit = React.useCallback((values) => {
    setValues(values);
    executeLogin({ data: { ...values } });
  }, []);

  React.useEffect(() => {
    if (!loginData) {
      return;
    }

    dispatch(login({ ...loginData, ...values }));
    history.push("/");
  }, [loginData]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={classes.centered}>
      <Formik
        validationSchema={SigninSchema}
        initialValues={values}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={classes.formContainer}>
            <p className={classes.formTitle}>Sign in</p>

            <Box>E-mail</Box>
            <Field type="text" name="username" className={classes.input} />
            <ErrorMessage name="username" className={classes.error} />

            <Box>Password</Box>
            <Field type="password" name="password" className={classes.input} />
            <ErrorMessage name="password" className={classes.error} />

            <Button
              type="submit"
              disabled={isSubmitting}
              className={classes.submitButton}
              variant="contained"
              color="secondary"
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  centered: {
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    border: "solid 1px #9a2525",
    borderRadius: 10,
    padding: 15,
    width: 300,
  },
  formTitle: { color: "#9a2525", textAlign: "center" },
  input: {
    marginBottom: 5,
    height: 25,
  },
  submitButton: {
    background: "#9a2525",
    marginTop: 5,
    cursor: "pointer",
    height: 30,
    "&:hover": {
      color: "#9a2525",
      background: "#fff",
      border: "solid 1px #9a2525",
    },
  },
  error: {
    color: "#9a2525",
    fontSize: 12,
  },
}));
