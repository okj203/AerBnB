import React from 'react';
import { connect } from 'react-redux';
import { fetchSpots } from '../../actions/spot_actions';
import Home from './home';

const msp = state => {
    return {
        spots: state.entities.spots,
        currentUser: state.session.currentUser
    }
}

const mdp = dispatch => {
    return {
        fetchSpots: () => dispatch(fetchSpots())
    }
}

export default connect(msp, mdp)(Home);