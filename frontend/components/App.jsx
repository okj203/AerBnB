import React from "react";
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
// import SignupContainer from './session/signup_container';
// import LoginContainer from './session/login_container';
import GreetingContainer from './greeting/greeting_container';
// import GreetingContainer from "./greeting/greeting";
import Modal from './modal/modal';


const App = () => (
    // the header displays on every single page, b/c it's not on any route
    // but depending on which route, renders different page
    // by default of hashrouter '/' is homepage (#/)

        <div>
            <div>
                <aside className="aside-1" datanosnippet="true">
                    <a className="aside-2" href="https://www.airbnb.com/resources/hosting-homes?persona=guest" target="_blank">Get the latest on our COVID-19 response</a>
                </aside>
            </div>
            <Modal />
                
            <header id="background">
                <Link to="/" className="header-link">
                {/* <img className="airbnb-logo" src="https://cdn0.iconfinder.com/data/icons/picons-social/57/68-airbnb-2-512.png" alt="AirBnB Logo"/>
                <div className="AerBnB">AerBnB</div> */}
                
                {/* <img className="airbnb-logo" src="https://icon-library.com/images/airbnb-icon/airbnb-icon-22.jpg" alt="AirBnB Logo"/> */}
                {/* airbnb logo svg */}
                </Link>
                <GreetingContainer />
                
                <div className="middle-section">
                    <section>
                        {/* <img className="olympic-logo"
                        aria-hidden="true"
                        alt="Worldwide Olympic and Paralympic Partner"
                        src="https://a0.muscache.com/pictures/0c30b700-de34-4d6c-94bd-226f43396be9.jpg"
                        data-original-uri="https://a0.muscache.com/pictures/0c30b700-de34-4d6c-94bd-226f43396be9.jpg"
                        /> */}
                        <br/>
                        <div className="introducing">AERBNB</div>
                        <br/>
                        <h1 className="olympian">Go out and begin<br/>your journey -<br/>one destination at a time.</h1>
                        <br/>
                        <div className="medalist">Let finding a place to sleep be the least <br/>of your worries.</div>
                    
                        <a className="learnmore" href="https://www.airbnb.com/s/experiences/olympics-online">Learn More</a>
                    </section>
                </div>

            </header>

            <Switch>
                {/* <Route exact path="/login" component={LoginContainer} />
                <Route exact path="/signup" component={SignupContainer} /> */}
            </Switch> 
        </div>
);
 // hashrouter in root.jsx wrapping app component "#"

export default App;

