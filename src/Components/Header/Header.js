import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { withRouter } from "react-router";
import SearchBar from "../SearchBar/SearchBar";
import { getSearchData } from "../../Redux/Search/search-actions";
import { connect } from "react-redux";
import { compose } from "redux";

class Header extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      searchText: '',
      error: false
    }
  }

  handleClick(event) {
    let type = event.target.getAttribute("type");
    let searchText = this.state.searchText;
    if (searchText) {
      this.setState({ error: false }, () =>
        this.props.history.push("/searchresults"));
    }
    else {
      this.setState({ error: true }, () => this.handleChange(event));
    }
    return searchText ? this.props.getSearchData(searchText, type) : null;
  }
  handleChange(event) {
    event.target && this.setState({ searchText: event.target.value, error: false });
  }
  render() {
    return (
      <div className="header">
        <div className="header__options">
          <div className="header__options-primary">
          </div>

          <div className="header__searchbar">
            <SearchBar currentRoute={this.props.currentRoute} onChange={this.handleChange} isError={this.state.error} />
          </div>
          <button className="btn button " type="movie" onClick={this.handleClick}>Movie</button>
          <button className="btn button " type="series" onClick={this.handleClick}>TV Show</button>
          <div className="header__options-secondary">
            <Link className="header__option" to="/mylist">
              My Content
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  getSearchData: (searchText, type) => dispatch(getSearchData(searchText, type))
});


export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Header);
