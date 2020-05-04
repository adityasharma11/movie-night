import React from "react";
import "./SearchItem.scss";
import { withRouter } from "react-router";
import AddToList from "../AddToList/AddToList";

const movieAvatar = 'https://critics.io/img/movies/poster-placeholder.png';

const SearchItem = ({ item, history, ListItems }) => {
  const { imdbID, Title, Poster, Year} = item;
  return (
    <div className="search-item">
      <div className="search-item__rating-container">
        <span className="search-item__rating">
          <span className="search-item__rank">{Year}</span>
        </span>
      </div>
      <div className="search-item__addtolist">
        <AddToList item={item} />
      </div>
      <div
        className="search-item__img-box"
        onClick={() => {
          return Title
            ? history.push({ pathname: `/movies/${imdbID}` })
            : history.push({ pathname: `/tvshows/${imdbID}` });
        }}
      >
        <img
          src={Poster == "N/A" ? movieAvatar : Poster}
          alt="movie"
          className="search-item__img"
        />
      </div>

      <div className="search-item__text">
        <h1 className="search-item__title">{Title}</h1>
      </div>
    </div>
  );
};

export default withRouter(SearchItem);
