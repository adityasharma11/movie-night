import { createSelector } from "reselect";

const selectMovie = state => state.movie;

export const selectMovieItems = createSelector(
  [selectMovie],
  movie => movie.movieItems
);

export const selectIsMovieFetching = createSelector(
  [selectMovie],
  movie => movie.isFetching
);
