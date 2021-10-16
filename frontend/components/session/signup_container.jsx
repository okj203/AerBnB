import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';  
import { closeModal } from '../../actions/modal_actions'

const mapState = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
        navLink: <Link to="/login">log in instead</Link>,
    };
};

const mapDispatch = dispatch => {
    return {
        action: user => dispatch(signup(user)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapState, mapDispatch)(SessionForm);