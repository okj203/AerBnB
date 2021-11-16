import * as APIUtil from "../util/spot_api_util";

export const RECEIVE_SPOTS = "RECEIVE_SPOTS";
export const RECEIVE_SPOT = "RECEIVE_SPOT";

export const receiveSpots = (spots) => {
  // debugger
  return {
    type: RECEIVE_SPOTS,
    spots,
  };
};

export const receiveSpot = (spot) => {
  return {
    type: RECEIVE_SPOT,
    spot,
  };
};

export const fetchSpots = () => (dispatch) =>
  APIUtil.fetchSpots().then((spots) => {
    return dispatch(receiveSpots(spots));
  });

export const fetchSpot = (spotId) => (dispatch) =>
  APIUtil.fetchSpot(spotId).then((spot) => {
    return dispatch(receiveSpot(spot));
  });

export const createSpot = (spot) => (dispatch) =>
  APIUtil.createSpot(spot).then((spot) => dispatch(receiveSpot(spot)));

export const updateSpot = (spot) => (dispatch) =>
  APIUtil.updateSpot(spot).then((spot) => dispatch(receiveSpot(spot)));


