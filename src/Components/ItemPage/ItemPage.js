import React from "react";
import "./ItemPage.scss";
import { connect } from "react-redux";
import imdb from "../../Assets/imdb.png";
import star from "../../Assets/star.png";
import Fade from "react-reveal/Fade";

const movieAvatar = 'https://critics.io/img/movies/poster-placeholder.png';

class ItemPage extends React.Component {
  render() {
    const {
      Title,
      Plot,
      imdbRating,
      Poster,
      Released,
      Runtime
    } = this.props.movieData;
    return (
      <div className="item-page">
        <div className="item">
          <Fade>
            <div className="item__outer">
              <div className="item__inner">
                <div className="item__img-box">
                  <img src={Poster == "N/A" ? movieAvatar : Poster} alt="poster" className="item__poster-img" />
                </div>
                <div className="item__text-box">
                  <h1 className="item__title">{Title}</h1>
                  <span className="item__overview">{Plot}</span>
                  <h4>Release Year : {Released}</h4>
                  <h4>Run Time : {Runtime}</h4>
                  <div className="item-rating">
                    <img src={imdb} alt="imdb" className="item-rating__imdb" />
                    <span className="item-rating__rank">{imdbRating}/</span>
                    <span className="item-rating__ten">10</span>
                    <img src={star} alt="imdb" className="item-rating__star" />
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(ItemPage);
