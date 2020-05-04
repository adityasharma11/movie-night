import SearchActionTypes from "./search-types";

const INITIAL_STATE = {
  searchItems: [],
  searchObj: { searchTerm: '', type: '' },
  hasMore: true
};

const searchReducer = (state = INITIAL_STATE, action) => {
  const { type, payload, searchObj, hasMore } = action;
  switch (type) {
    case SearchActionTypes.SET_SEARCH_DATA: {
      return { ...state, searchItems: payload, searchObj: searchObj, hasMore: hasMore };
    }
    default:
      return state;
  }
};

export default searchReducer;
