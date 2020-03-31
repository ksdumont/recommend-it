import React, { useEffect, useState } from "react";
import "./App.css";
import firebase from "./firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";


function App() {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);
  useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val);
    });
  });
  return firebaseInitialized !== false ? (
    <section className="app-wrapper">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          {/* <Route exact path="/editRecommendation/:id" component={Edit} />
          <Route exact path="/category/:category" component={Category} />
          <Route exact path="/author/:author" component={Author} /> */}
        </Switch>
      </Router>
    </section>
  ) : (
    <header>
      <h1>Loading...</h1>
    </header>
  );
}

export default App;
