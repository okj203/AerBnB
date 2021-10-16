import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { openModal } from '../../actions/modal_actions'

const mapState = ({ session }) => {
    return {
        currentUser: session.currentUser
    }
};

const mapDispatch = dispatch => {
    return {
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal))
    }
}

export default connect(mapState, mapDispatch)(Greeting);