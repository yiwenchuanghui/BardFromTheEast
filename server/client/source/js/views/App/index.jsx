import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../../components/Global/Header';
import HomePage from '../HomePage';
import AboutPage from '../AboutPage';
import Footer from '../../components/Global/Footer';

const publicPath = '/';

export const routeCodes = {
  HOME: publicPath,
  ABOUT: `${ publicPath }about`,
  CONTACT: `${ publicPath }contact`,
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
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
