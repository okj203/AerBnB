import React from 'react';

const Greeting = ({ currentUser, logout, openModal }) => {
    let status = 'login-signup'

    const sessionLinks = () => (
        <div type="submit" className="login-dropdown">
            <nav className={status}>
                <button onClick={() => openModal('login')}>Login</button>
                <br/>
                <button onClick={() => openModal('signup')}>Signup</button>
            </nav>
        </div>
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
