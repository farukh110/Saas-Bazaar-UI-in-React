import React from 'react';
import Header from './Components/global/Header';
import Main from './Components/Main';
import CompareFeatures from './Components/CompareFeatures';
import Login from './Components/Login';
import CreateAccount from './Components/CreateAccount';
import Contact from './Components/Contact';
import About from './Components/About';
import { Redirect, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/compare-features" component={CompareFeatures} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/create-account" component={CreateAccount} />
      <Route exact path="/contact-us" component={Contact} />
      <Route exact path="/about" component={About} />
      <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default App;
