import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../../components/Global/Header';
import HomePage from '../HomePage';
import AboutPage from '../AboutPage';
import WhatWeDo from '../WhatWeDo';
import Footer from '../../components/Global/Footer';

const publicPath = '/';

export const routeCodes = {
  HOME: publicPath,
  ABOUT: `${ publicPath }about`,
  CONTACT: `${ publicPath }contact`,
  WHATWEDO: `${ publicPath }wwd`,
};

class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className='container'>
            <Switch>
              <Route exact path={ routeCodes.HOME } component={ HomePage } />
              <Route exact path={ routeCodes.ABOUT } component={ AboutPage } />
              <Route exact path={ routeCodes.WHATWEDO } component={ WhatWeDo } />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
