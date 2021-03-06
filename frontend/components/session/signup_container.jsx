import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';  

const mapState = ({ errors }) => {
    // debugger
    return {
        errors: errors.session,
        formType: 'signup',
        navLink: <Link to="/login">log in instead</Link>,
    };
};

const mapDispatch = dispatch => {
    return {
        action: user => dispatch(signup(user))
    }
}

export default connect(mapState, mapDispatch)(SessionForm);