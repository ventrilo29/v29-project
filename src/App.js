import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";

import AuthService from "./services/auth.service";

import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";
import Profile from "./components/profile";

const App = () => {
    const [currentUser, setCurrentUser] = useState(undefined);
    
    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
        }
    }, []);

    const logOut = () => {
        AuthService.logout();
    };

    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <Link to={"/"} className="navbar-brand">
                bezKoder
                </Link>
                <div className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to={"/home"} className="nav-link">
                    Home
                    </Link>
                </li>

                {currentUser && (
                    <li className="nav-item">
                    <Link to={"/user"} className="nav-link">
                        User
                    </Link>
                    </li>
                )}
                </div>

                {currentUser ? (
                <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <Link to={"/profile"} className="nav-link">
                        {currentUser.username}
                    </Link>
                    </li>
                    <li className="nav-item">
                    <a href="/login" className="nav-link" onClick={logOut}>
                        LogOut
                    </a>
                    </li>
                </div>
                ) : (
                <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <Link to={"/login"} className="nav-link">
                        Login
                    </Link>
                    </li>

                    <li className="nav-item">
                    <Link to={"/register"} className="nav-link">
                        Sign Up
                    </Link>
                    </li>
                </div>
                )}
            </nav>

            <div className="container mt-3">
                <Switch>
                    <Route exact path={["/", "/home"]} component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/profile" component={Profile} />
                </Switch>
            </div>
        </div>
    );
}

export default App;