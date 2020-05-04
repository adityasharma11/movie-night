import React from "react";
import ReactDOM from "react-dom";
import "./MovieItemPage.scss";
import { connect } from "react-redux";
import ItemPage from '../../Components/ItemPage/ItemPage';

import {
  selectMovieItems,
  selectIsMovieFetching
} from "../../Redux/Movie/movie-selectors";
import { getMovies } from "../../Redux/Movie/movie-actions";

class MovieItemPage extends React.Component {
  componentDidMount() {
    var imdbId = this.props.match.params && this.props.match.params.imdbId;
    this.props.dispatch(getMovies(imdbId));
    ReactDOM.findDOMNode(this).scrollIntoView();
  }

  render() {
    const { isFetching } = this.props;
    return (
      <div className="movie-item-page">
        <div className="item-page-overview">
          <ItemPage
            movieData={this.props.movieData}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movieData: selectMovieItems(state),
  isFetching: selectIsMovieFetching(state)
});

export default connect(mapStateToProps)(MovieItemPage);
