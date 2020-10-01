import React from 'react';
import { MainPage } from './components/MainPage';
import { Signin } from './components/Signin';
import { Signup } from './components/Signup';
import { Admin } from './components/Admin';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";


const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path='/' component={MainPage}></Route>
        <Route path='/signin' component={Signin}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/admin" component={Admin}></Route>
      </Router>
    </div>
  );
}

export default App;
