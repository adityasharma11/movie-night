import MovieActionTypes from "./movie-types";

const INITIAL_STATE = {
  isFetching: true,
  movieItems: [],
  movieCast: []
};

const movieReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case MovieActionTypes.SET_MOVIE_DATA: {
      return { ...state, movieItems: payload };
    }
    case MovieActionTypes.SET_MOVIE_DATA_SUCCESS: {
      return { ...state, isFetching: false };
    }

    default:
      return state;
  }
};

export default movieReducer;
