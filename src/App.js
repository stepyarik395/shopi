import React from 'react';
import { MainPage } from './components/MainPage';
import { Signin } from './components/Signin';
import { Signup } from './components/Signup';
import { Admin } from './components/Admin';
import { Header } from './components/Header'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";


const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path='/'>
          <MainPage />
        </Route>
        <Route path='/signin'>
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Router>
    </div>
  );
}

export default App;
