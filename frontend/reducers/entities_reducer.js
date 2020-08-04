import { combineReducers } from "redux";
import spotsReducer from "./spots_reducer";
import searchReducer from "./search_reducer";

const entitiesReducer = combineReducers({
  spots: spotsReducer,
  search: searchReducer,
});

export default entitiesReducer;
