import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: '',
            email: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.action(user).then(() => {this.props.history.push("/")}); 
        // catch the action promise, and THEN on success, next place will be "/"
        // both login && signup has an action prop (cb) that takes "user" as an argument
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const birthday = (this.props.formType === "signup" ? ( 
        <>
            <label>First Name:
                <input 
                type="text" 
                value={this.state.first_name}
                onChange={this.update('first_name')}
                className="login-input"
                />
            </label> 
            <br />

            <label>Last Name:
                <input 
                type="text" 
                value={this.state.last_name}
                onChange={this.update('last_name')}
                className="login-input"
                />
            </label> 
            <br />

            <label>Birthday:
                <input 
                type="date" 
                value={this.state.birthday}
                onChange={this.update('birthday')}
                className="login-input"
                />
            </label> 
            <br />

            <label>Email:
                <input 
                type="text" 
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                />
            </label> 
        </>
        ) : ( <></> ))
        
        return (

            <div className="login-container">
                <form onSubmit={this.handleSubmit} className="login-box">
                <br />

                    {/* {this.props.formType} or {this.props.navLink} */}
                    {this.renderErrors()}
                    <div className="login-form">
                        <br />

                        <label>Username:
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <br />

                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br />

                        {birthday}
                        <br />
                        <button className="session-submit" type="submit" value={this.props.formType}>Continue</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;
