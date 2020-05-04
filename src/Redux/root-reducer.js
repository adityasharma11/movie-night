import { combineReducers } from "redux";
import movieReducer from "./Movie/movie-reducer";
import searchReducer from "./Search/search-reducer";
import listReducer from "./List/list-reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["list", "search"]
};

const rootReducer = combineReducers({
  movie: movieReducer,
  search: searchReducer,
  list: listReducer
});

export default persistReducer(persistConfig, rootReducer);
