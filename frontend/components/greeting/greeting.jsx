import React from 'react';

const Greeting = ({ currentUser, logout, openModal }) => {
    let status = 'login-singup'

    // function imgClick () {
    //     status = 'login-signup2'
    // }

    const sessionLinks = () => (
        <nav className={status}>
            <button onClick={() => openModal('login')}>Login</button>
            <br/>
            <button onClick={() => openModal('signup')}>Signup</button>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">{currentUser.username}</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting(currentUser, logout) : sessionLinks();
    // return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
