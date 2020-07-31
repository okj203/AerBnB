import React from 'react';
import Dropdown from 'react-dropdown';

class Greeting extends React.Component {
    constructor(props){
        super(props)
        this.state = { showDropdownState: false }
        this.showDropdown = this.showDropdown.bind(this);
        this.closeDropdown = this.closeDropdown.bind(this);
        this.personalGreeting = this.personalGreeting.bind(this);
        this.sessionLinks = this.sessionLinks.bind(this);
    }

    showDropdown(e) {
        e.preventDefault();

        this.setState({ showDropdown: true }, () => {
            document.addEventListener('click', this.closeDropdown);
        });
    }

    closeDropdown() {
        this.setState({ showDropdown: false }, () => {
            document.removeEventListener('click', this.closeDropdown);
        });
    }

    sessionLinks() {
        return(
            <nav className='login-signup'>
                <button onClick={() => this.props.openModal('login')}>Login</button>
                <br/>
                <button onClick={() => this.props.openModal('signup')}>Signup</button>
            </nav>
        )
    }

    personalGreeting() {
        return(
        <hgroup className="header-group">
            <h2 className="header-name">{this.props.currentUser.username}</h2>
            <button className="logout-button" onClick={this.props.logout}>Log Out</button>
        </hgroup>
        )
    }   
    
    render(){
        if (this.props.currentUser){

            return this.personalGreeting();

        } else {

            return (
                    <div>
                        <header className="row">
                            <img id="header-img" className="airbnb-logo" src="https://cdn0.iconfinder.com/data/icons/picons-social/57/68-airbnb-2-512.png" alt="AirBnB Logo" />
                            {/* <div className="AerBnB">AerBnB</div> */}

                        <button id="header-img" className="login-dropdown" onClick={this.showDropdown}>
                            <img id="header-img" className="login-dropdown" src="https://img.pngio.com/app-icon-set-login-icon-svg-png-icon-free-download-311846-login-icon-png-980_980.png" alt="loginIMG"/>
                            </button>
                        </header>

                        {
                            this.state.showDropdown
                                ? ( 
                                    <div
                                        className="Dropdown"
                                        ref={(element) => {
                                            this.dropdownDropdown = element;
                                        }}
                                    > 
                                    {this.sessionLinks()}
                                    </div>
                                )
                                : (
                                    null
                                )
                        }
                        
                    </div>
            )
        } 
    }

};


export default Greeting;
