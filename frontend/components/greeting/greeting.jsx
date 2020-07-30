import React from 'react';
import Dropdown from 'react-dropdown';

class Greeting extends React.Component {
    constructor(props){
        super(props)
        this.state = { showMenu: false }
        this.showDropdown = this.showDropdown.bind(this);
        this.closeDropdown = this.closeDropdown.bind(this);
        this.personalGreeting = this.personalGreeting.bind(this);
        this.sessionLinks = this.sessionLinks.bind(this);
    }

    showDropdown(event) {
        event.preventDefault();

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
        <hgroup className="header-group">
            <h2 className="header-name">{this.props.currentUser.username}</h2>
            <button className="header-button" onClick={this.props.logout}>Log Out</button>
        </hgroup>
    }   
    // return (this.props.currentUser ? personalGreeting(this.props.currentUser, this.props.logout) : sessionLinks())
    
    render(){
        if (this.props.currentUser){
            return this.personalGreeting();

        } else {

            return (
                    <div>
                        <button className="login-dropdown" onClick={this.showDropdown}>
                            AerBnB
                        </button>

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
