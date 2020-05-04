import React, { Suspense, lazy } from "react";
import "./Movies.scss";
import { connect } from "react-redux";
import {
  selectMovieItems,
  selectIsMovieFetching
} from "../../Redux/Movie/movie-selectors";


class Movies extends React.Component {

  render() {
    return (
      <div className="movie">    
        <h1>Movie Night Extravaganza</h1>    
        <h2>Search Movie</h2>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movieItems: selectMovieItems(state),
  isFetching: selectIsMovieFetching(state)
});

export default connect(mapStateToProps)(Movies);
