import React from "react";
import { useDispatch } from "react-redux";
import useAxios from "axios-hooks";
import { useParams } from "react-router-dom";
import { setData } from "../../store/movie/info";
import formatter from "string-format";
import { makeStyles, Box } from "@material-ui/core";
import Loading from "../Loading";
import { motion } from "framer-motion";

const REQUEST_URL = "http://www.omdbapi.com/?i={0}&apikey=f71b6209";
const cardInfoLayout = ["Runtime", "Genre", "Director", "Writer"];

const MovieInfo = ({ ...props }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { imdbID } = useParams();

  const [{ data, loading, error }, refetch] = useAxios(
    formatter(REQUEST_URL, imdbID)
  );

  React.useEffect(() => {
    if (!data) {
      return;
    }
    dispatch(setData({ data }));
  }, [data]);

  return loading ? (
    <Loading />
  ) : (
    <motion.div
      animate={{ scale: 1.5 }}
      transition={{ duration: 0.5 }}
      className={classes.root}
    >
      <Box className={classes.movieInfoWrapper}>
        <Box className={classes.movieInfoItem}>
          <img src={data.Poster} className={classes.poster} />
        </Box>
        <Box className={classes.movieInfoContainer}>
          <Box className={classes.movieInfoItem}>
            {data.Title} ({data.Year}){" "}
          </Box>

          {cardInfoLayout.map((item) => (
            <Box className={classes.movieInfoItem}>
              <Box className={classes.bold}>{item}:</Box> {data[item]}
            </Box>
          ))}

          <Box className={classes.plot}>{data.Plot}</Box>
        </Box>
      </Box>
    </motion.div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  movieInfoWrapper: {
    border: "solid 1px #cacaca",
    height: 360,
    width: 500,
    background: "#cecece",
    display: "flex",
    flexDirection: "row",
    padding: 20,
  },
  movieInfoContainer: {
    padding: "0px 20px",
  },
  movieInfoItem: {
    marginBottom: 5,
  },
  poster: {
    width: 200,
  },
  plot: {
    fontSize: 14,
    marginTop: 15,
  },
  bold: {
    fontWeight: "bold",
  },
}));

export default MovieInfo;
