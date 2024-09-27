// Pages.js
import React, { useState } from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Pricing from "../pricing/Pricing";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import SignIn from "../login/SignIn";

const Pages = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleSignInClick = () => {
    setShowLogin(true);
  };

  const handleLogin = (status) => {
    setIsLoggedIn(status);
    setShowLogin(false);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Header onSignInClick={handleSignInClick} isLoggedIn={isLoggedIn} onSignOut={handleSignOut} />
      {showLogin ? (
        <SignIn onLogin={handleLogin} />
      ) : (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      )}
      <Footer />
    </Router>
  );
};

export default Pages;
