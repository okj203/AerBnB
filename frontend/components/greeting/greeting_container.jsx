import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapState = ({session}) => {
    return {
        currentUser: session.currentUser
    }
};

const mapDispatch = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapState, mapDispatch)(Greeting);