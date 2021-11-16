import { RECEIVE_SPOT } from "../actions/spot_actions";
import { RECEIVE_REVIEW, RECEIVE_REVIEWS } from "../actions/review_actions";

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SPOT:
      return Object.assign({}, state, action.reviews);
    case RECEIVE_REVIEW:
      return Object.assign({}, state, { [action.review.id]: action.review });
    case RECEIVE_REVIEWS:
      return action.reviews;
    default:
      return state;
  }
};

export default reviewsReducer;
