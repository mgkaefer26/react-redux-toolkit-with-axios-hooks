import { makeStyles } from "@material-ui/core";
import Loader from "react-loader-spinner";

const loaderProps = { type: "Oval", width: 100, height: 100, color: "#9a2525" };

const Loading = ({ className = null }) => {
  const classes = useStyles();

  return (
    <div className={className || classes.centered}>
      <Loader {...loaderProps} />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  centered: {
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default Loading;
