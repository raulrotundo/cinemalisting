import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HeaderContainer from './header/header-container';
import HomeContainer from 'modules/layout/content/home/home-container';
import FooterContainer from 'modules/layout/footer/footer-container';

const LayoutComponent = () => {
  return (
    <div>
      <HeaderContainer />
      <Switch>
        <Route path="/" component={HomeContainer} />
      </Switch>
      <FooterContainer />
    </div>
  );
}

export default LayoutComponent;
