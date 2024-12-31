import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import homeScreen from "./screens/home/homeScreen";
import loginScreen from "./screens/auth/login/loginScreen";
import signupScreen from "./screens/auth/signup/signupScreen";

export default class AppRoutes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={AppPaths.HOME} exact component={homeScreen} />
          <Route path={AppPaths.CHAT_ROOM} exact component={homeScreen} />
          <Route path={AppPaths.LOGIN} exact component={loginScreen} />
          <Route path={AppPaths.SIGN_UP} exact component={signupScreen} />
        </Switch>
      </Router>
    );
  }
}