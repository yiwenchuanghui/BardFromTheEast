import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../../components/Global/Header';
import HomePage from '../HomePage';

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
            </Switch>
          </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
