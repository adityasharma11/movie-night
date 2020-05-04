import React, { useState } from "react";
import "./SearchPage.scss";
import { connect } from "react-redux";
import { compose } from "redux";
import InfiniteScroll from 'react-infinite-scroll-component';
import { selectSearchItems, selectSearchObj } from "../../Redux/Search/search-selectors";
import { getSearchData, getNewSearchData } from "../../Redux/Search/search-actions";
import { withRouter } from "react-router";
import SearchItem from "../SearchItem/SearchItem";

const SearchPage = (props) => {
  const { searchItems, searchObj, hasMore } = props;
  const getNewSearchData = () => {
    props.getNewSearchData({ value: searchObj.searchTerm, type: searchObj.type, pageNum: searchObj.pageNum + 1, currData: searchItems.Search });
  }
  return (
    <div className="search-page">
      <h1 className="search-page__title">Search Results</h1>
      {searchItems.Search && searchItems.Search.length ?
        <InfiniteScroll
          dataLength={searchItems.Search.length}
          next={getNewSearchData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>That's All for Now !!!</b>
            </p>
          }>
          <div className="search-page__outer">
            <div className="search-page__inner">
              {searchItems.Search.map((item, index) =>
                item.Poster ? <SearchItem key={index} item={item} /> : null
              )}
            </div>
          </div>

        </InfiniteScroll>
        :
        <h2>{searchItems.Error || 'Search Something!!!'}</h2>}
    </div>
  );
};

const mapStateToProps = state => ({
  searchItems: selectSearchItems(state),
  searchObj: selectSearchObj(state),
  hasMore: state.search.hasMore
});

const mapDispatchToProps = dispatch => ({
  getSearchData: (searchText, type) => dispatch(getSearchData(searchText, type)),
  getNewSearchData: (searchParams) => dispatch(getNewSearchData(searchParams))
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(SearchPage);
