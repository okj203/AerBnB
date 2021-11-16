import * as APIUtil from "../util/review_api_util";

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";

export const receiveReview = (review) => {
  return {
    type: RECEIVE_REVIEW,
    review,
  };
};

export const receiveReviews = (reviews) => {
  return {
    type: RECEIVE_REVIEWS,
    reviews,
  };
};

export const createReview = (review) => (dispatch) =>
  APIUtil.createReview(review).then(
    (review) => dispatch(receiveReview(review)),
    (error) => dispatch(receiveReviewErrors(error.responseJSON))
  );

export const fetchReviews = (spotId) => (dispatch) =>
  APIUtil.fetchReviews(spotId).then((reviews) =>
    dispatch(receiveReviews(reviews))
  );