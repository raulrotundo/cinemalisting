import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeContainer from 'modules/home/home-container';

ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path="/" component={HomeContainer}></Route>
    </Switch>
  </Router>
), document.getElementById('root'))
