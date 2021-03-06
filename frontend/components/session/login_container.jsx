import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';  
import { openModal, closeModal } from '../../actions/modal_actions'

const mapState = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login'
        // navLink: <Link to="/signup">sign up instead</Link>,
    };
};

const mapDispatch = dispatch => {
    return {
        action: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Signup
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        login: user => dispatch(login(user))
    };
}

export default connect(mapState, mapDispatch)(SessionForm);