import { connect } from "react-redux";
import {
  createReview,
  fetchSpot,
  fetchReviews,
} from "../../actions/spot_actions";
import ReviewForm from "./review_form";
import { openModal } from "../../actions/modal_actions";
import { clearErrors } from "../../actions/session_actions";

const mapState = (state, ownProps) => {
  return {
    errors: state.errors.review,
    review: {
      body: "",
      guest_id: state.session.id,
      spot_id: ownProps.spot.id,
    },
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchSpot: (spotId) => dispatch(fetchSpot(spotId)),
    createReview: (review) => dispatch(createReview(review)),
    fetchReviews: (id) => dispatch(fetchReviews(id)),
    openModal: () => dispatch(openModal("login")),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mapState, mapDispatch)(ReviewForm);
