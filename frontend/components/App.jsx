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
            <aside className="aside-1" datanosnippet="true">
                <a className="aside-2" href="https://www.airbnb.com/resources/hosting-homes?persona=guest" target="_blank">Get the latest on our COVID-19 response</a>
            </aside>
            <Modal />
                
            <header id="background">
                <Link to="/" className="header-link">
                <img className="airbnb-logo" src="https://toppng.com/uploads/preview/airbnb-a-icon-vector-logo-airbnb-logo-vector-115628719165xnp0e2zd1.png" alt="AirBnB Logo"/>
                {/* airbnb logo svg */}
                </Link>

                <img className="login-dropdown" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSPaYka9tAxrly2_1YdQ-bFrd8UxniQUkjCpO3pqg12lmzfmsnMnWEZvoI7ZyIy9JYmXj-OZ2Ki50NRqx_PyDAjmny21zOwwhSYbdP&usqp=CAU&ec=45682162" alt="login-dropdown" />
                
                <GreetingContainer />
                
                <div className="middle-section">
                    <section>
                        <img class="olympic-logo"
                        aria-hidden="true"
                        alt="Worldwide Olympic and Paralympic Partner"
                        src="https://a0.muscache.com/pictures/0c30b700-de34-4d6c-94bd-226f43396be9.jpg"
                        data-original-uri="https://a0.muscache.com/pictures/0c30b700-de34-4d6c-94bd-226f43396be9.jpg"
                        ></img>
                        <br/>
                        <div className="introducing">INTRODUCING</div>
                        <br/>
                        <h1 className="olympian">Olympian & <br/> Paralympian Online <br/> Experiences</h1>
                        <br/>
                        <div className="medalist">Join medalist Lex Gillette, and a team of <br/> world-class athletes</div>
                    
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

