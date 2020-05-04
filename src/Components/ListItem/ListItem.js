import React from "react";
import "./ListItem.scss";
import { withRouter } from "react-router";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { removeItem } from "../../Redux/List/list-actions";
import { connect } from "react-redux";
import { compose } from "redux";

const movieAvatar = 'https://critics.io/img/movies/poster-placeholder.png';

const ListItem = ({ item, history, removeItem }) => {
  const { imdbID, Title, Poster, Year} = item;
  return (
    <div className="list-item">
      <div className="list-item__rating-container">
        <span className="list-item__rating">
          <span className="list-item__rank">{Year}</span>
        </span>
      </div>
      <div className="list-item__addtolist" onClick={() => removeItem(item)}>
        <FontAwesomeIcon icon={faTimes} className="list-item__remove-icon" />
      </div>

      <div
        className="list-item__img-box"
        onClick={() => {
          return Title
          ? history.push({ pathname: `/movies/${imdbID}` })
          : history.push({ pathname: `/tvshows/${imdbID}` });
        }}
      >
        <img
          src={Poster == "N/A" ? movieAvatar : Poster}
          alt="movie"
          className="list-item__img"
        />
      </div>

      <div className="list-item__text">
        <h1 className="list-item__title">{Title}</h1>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item))
});

export default compose(
  withRouter,
  connect(
    null,
    mapDispatchToProps
  )
)(ListItem);
