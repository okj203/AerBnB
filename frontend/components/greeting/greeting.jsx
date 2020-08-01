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
                <button className="login-signup-ele" onClick={() => this.props.openModal('login')}>Log in</button>
                <br/>
                <button className="login-signup-ele" onClick={() => this.props.openModal('signup')}>Sign up</button>
            </nav>
        )
    }

    personalGreeting() {
        return(
        <hgroup className="header-group">
            <div className="flex">
                <img id="header-img" className="aerbnb-logo" src={window.logoIMG} alt="AerBnB Logo" />
                    <button className="header-name">
                        <i class="fas fa-address-card"></i>
                        {/* {this.props.currentUser.username} */}
                    </button>
                <button className="logout-button" onClick={this.props.logout}>Log Out</button>
            </div>
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
                        <div className="flex">
                            <img id="header-img" className="aerbnb-logo" src={window.logoIMG} alt="AerBnB Logo" />

                            <button id="header-img" className="login-dropdown" onClick={this.showDropdown}>
                                <i class="far fa-address-card"></i>
                            </button>
                        </div>
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
