import React from "react";
import ReactDOM from "react-dom";
import { signup, login, logout } from "./util/session_api_util";
import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {

    // const store = configureStore();

    let store;  
    if (window.currentUser) {
        // console.log("hello")    
        const preloadedState = { session: { currentUser: window.currentUser }};    
        store = configureStore(preloadedState);    
        delete window.currentUser; 
        } else {    
        store = configureStore();  
    }

    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
});

// Rails Commands:
// create new rails project:
// rails new < project name > -G--database = postgresql
//   - G is to signify no git repo
// --database=postgresql signifies rails should use PostgreSQL

// create migration / model / controller
// rails g migration / model / controller < name >

// npm:
// npm init--yes: Initializes an app with NPM by generating a boilerplate package.json.
// npm install<package_name>: Installs and lists a NPM package as a dependency in a package.json.
// npm install: Downloads all JavaScript dependencies listed in a package.json.
// Add a webpack script to enable npm run webpack.

// Frontend Structure:
// mkdir frontend frontend / actions frontend / components frontend / reducers frontend / store frontend / util
// touch frontend entry.jsx