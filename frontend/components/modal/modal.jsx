import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginContainer from '../session/login_container';
import SignupContainer from '../session/signup_container';
import { clearErrors } from '../../actions/session_actions'
// import { render } from 'react-dom';

class Modal extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.closeModal();
        this.props.clearErrors();
    }
    
    render() {
        const {modal} = this.props
        if (!modal) {
            return null;
        }

        let component;
        switch (modal) {
            case 'login':
                component = <LoginContainer />;
                break;
            case 'signup':
                component = <SignupContainer />;
                break;
            default:
                return null;
        }

        return (
            <div className="modal-background" onClick={this.handleSubmit}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>
        )
    }
}

const mapState = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatch = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mapState, mapDispatch)(Modal);
