import React from 'react';
import { MainPage } from './components/MainPage';
import { Signin } from './components/Signin';
import { Signup } from './components/Signup';
import { Admin } from './components/Admin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path='/'>
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
      </Switch>
    </div>
  );
}

export default App;
