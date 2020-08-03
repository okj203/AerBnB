import { combineReducers } from "redux";
import spotsReducer from "./spot_reducer";

const entitiesReducer = combineReducers({
    spots: spotsReducer
});

export default entitiesReducer;