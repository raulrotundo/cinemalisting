import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import 'semantic-ui-css/semantic.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'assets/styles/main.css'
import LayoutComponent from 'modules/layout/layout-component';

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={LayoutComponent}></Route>
      </Switch>
    </Router>
  </Provider>
), document.getElementById('root'))
