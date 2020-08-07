import { combineReducers } from "redux";
import spotsReducer from "./spots_reducer";
import searchReducer from "./search_reducer";
import reviewsReducer from "./reviews_reducer";

const entitiesReducer = combineReducers({
  spots: spotsReducer,
  search: searchReducer,
  reviews: reviewsReducer,
});

export default entitiesReducer;
