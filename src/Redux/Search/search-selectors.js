import { createSelector } from 'reselect';

const selectSearch = state => state.search;

export const selectSearchItems = createSelector(
  [selectSearch],
  search => search.searchItems
);

export const selectSearchObj = createSelector(
  [selectSearch],
  search => search.searchObj
);


