import { RECEIVE_SPOTS, RECEIVE_SPOT } from "../actions/spot_actions";

const spotsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SPOTS:
      return Object.assign({}, state, action.spots);
    case RECEIVE_SPOT:
      return Object.assign({}, state, action.spot);
    default:
      return state;
  }
};

export default spotsReducer;
