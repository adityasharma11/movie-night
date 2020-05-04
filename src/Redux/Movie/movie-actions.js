import MovieActionTypes from "./movie-types";
import {
  fetchData
} from "../../Services/MovieService";

export function getMovies(imdbId) {
  return dispatch => {
    fetchData(imdbId).then(data => {
      dispatch({
        type: MovieActionTypes.SET_MOVIE_DATA,
        payload: data
      });
    });
  };
}

