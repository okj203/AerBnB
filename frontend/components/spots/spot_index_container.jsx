import React from "react";
import { connect } from "react-redux";
import SpotIndex from "./spot_index";
import { fetchSpot, fetchSpots } from "../../actions/spot_actions";
import { withRouter } from "react-router-dom";
// withRouter provides access to extra props such as match location and history;

const mapState = (state) => ({
  spots: Object.values(state.entities.spots),
});

const mapDispatch = (dispatch) => ({
  fetchSpot: (spotId) => dispatch(fetchSpot(spotId)),
  fetchSpots: () => dispatch(fetchSpots()),
});

export default withRouter(connect(mapState, mapDispatch)(SpotIndex));
