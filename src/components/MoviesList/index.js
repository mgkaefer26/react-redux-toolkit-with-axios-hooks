import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useAxios from "axios-hooks";
import Loading from "../Loading";
import { setData } from "../../store/movies";
import { makeStyles, Box } from "@material-ui/core";

const REQUEST_URL = "https://fake-movie-database-api.herokuapp.com/api?s=star";

const MoviesList = ({ ...props }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [{ data: results, loading, error }, refetch] = useAxios(REQUEST_URL);
  const { data: moviesData } = useSelector((state) => state.movies);

  React.useEffect(() => {
    if (!results) {
      return;
    }

    const { Search: data } = results;
    dispatch(setData({ data }));
  }, [results]);

  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        {loading ? (
          <Loading className={classes.loader} />
        ) : (
          moviesData.map((movie) => (
            <Link
              key={movie.imdbID}
              className={classes.movieContainer}
              to={`/movie-info/${movie.imdbID}`}
            >
              <img src={movie.Poster} className={classes.moviePoster} />
            </Link>
          ))
        )}
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  wrapper: {
    display: "flex",
    flexFlow: "wrap",
    width: 700,
  },
  movieContainer: {
    display: "flex",
    background: "#cecece",
    margin: 5,
    cursor: "pointer",
  },
  moviePoster: {
    width: 150,
  },
  loader: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default MoviesList;
