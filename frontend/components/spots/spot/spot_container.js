import { connect } from "react-redux";
import {
  fetchSpot,
  createSpot,
  updateSpot,
} from "../../../actions/spot_actions";
import Spot from "./spot";

const mapState = (state, ownProps) => ({
  spot: state.entities.spots[ownProps.match.params.spotId],
});

const mapDispatch = (dispatch) => ({
  createSpot: (spot) => dispatch(createSpot(spot)),
  updateSpot: (spot) => dispatch(updateSpot(spot)),
  fetchSpot: (spotId) => dispatch(fetchSpot(spotId)),
});

export default connect(mapState, mapDispatch)(Spot);
