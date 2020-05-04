import React from "react";
import "./SearchBar.scss";
import { withRouter } from "react-router";
import { selectSearchItems } from "../../Redux/Search/search-selectors";

import { connect } from "react-redux";
import { compose } from "redux";

class SearchBar extends React.Component {

  render() {
    return (
      <div className="container-1">
        <div className="container-2">
          <span className="search-icon">
            <i className="fa fa-search"></i>
          </span>
          <input
            className={this.props.isError ? 'error' : ''}
            type="search"
            id="search"
            placeholder="Movies, TV Shows..."
            onChange={this.props.onChange}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchItems: selectSearchItems(state)
});

export default compose(
  withRouter,
  connect(mapStateToProps)
)(SearchBar);
