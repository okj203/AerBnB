import React from "react";
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import GreetingContainer from './greeting/greeting_container';
// import GreetingContainer from "./greeting/greeting";

const App = () => (
    // the header displays on every single page, b/c it's not on any route
    // but depending on which route, renders different page
    // by default of hashrouter '/' is homepage (#/)
        <div>
            <header>
                <h1>AerBnB</h1>
                <GreetingContainer/>
            </header>
        <Switch>
            <Route exact path="/login" component={LoginContainer} />
            <Route exact path="/signup" component={SignupContainer} />
        </Switch>
        </div>

);
 // hashrouter in root.jsx wrapping app component "#"

export default App;