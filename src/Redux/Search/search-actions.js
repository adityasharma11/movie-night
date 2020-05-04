import SearchActionTypes from './search-types';
import { fetchSearchData } from '../../Services/SearchService';

export function getSearchData(value, type) {
  return (dispatch) => {
    fetchSearchData(value, type).then(data => {
      dispatch({ type: SearchActionTypes.SET_SEARCH_DATA, payload: data, searchObj: { searchTerm: value, type: type, pageNum: 1 }, hasMore: true });
    });
  }
}

export function getNewSearchData(searchParams) {
  const { value, type, pageNum, currData } = searchParams;
  return (dispatch) => {
    fetchSearchData(value, type, pageNum).then(data => {
      if (data.Search && data.Search.length) {
        dispatch({ type: SearchActionTypes.SET_SEARCH_DATA, payload: { Search: currData.concat(data.Search) }, searchObj: { searchTerm: value, type: type,pageNum: pageNum }, hasMore: true });
      }
      else {
        dispatch({ type: SearchActionTypes.SET_SEARCH_DATA, payload: { Search: currData }, searchObj: { searchTerm: value, type: type, pageNum: pageNum }, hasMore: false });
      }
    });
  }
}