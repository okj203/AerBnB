import React from 'react';
import { connect } from 'react-redux';
import SpotIndex from './spot_index';
import { fetchSpot, fetchSpots } from '../../actions/spot_actions'

const mapState = state => ({
    spots: Object.values(state.entities.spots)
})

const mapDispatch = dispatch => ({
    fetchSpot: spotId => dispatch(fetchSpot(spotId)),
    fetchSpots: () => dispatch(fetchSpots()),
})

export default connect(mapState, mapDispatch)(SpotIndex);