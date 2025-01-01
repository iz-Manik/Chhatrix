import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/home/HomeScreen";
import LoginScreen from "./screens/auth/login/LoginScreen";
import SignupScreen from "./screens/auth/signup/SignupScreen";
import AppPaths from "./lib/appPaths";

export default class AppRoutes extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path={AppPaths.HOME} element={<HomeScreen />} />
          <Route path={AppPaths.CHAT_ROOM} element={<HomeScreen />} />
          <Route path={AppPaths.LOGIN} element={<LoginScreen />} />
          <Route path={AppPaths.SIGN_UP} element={<SignupScreen />} />
        </Routes>
      </Router>
    );
  }
}