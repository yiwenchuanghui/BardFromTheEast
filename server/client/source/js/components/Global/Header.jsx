import React from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from '../../views/App';

const Header = () => {
  return (
    <nav className='navbar is-black is-transparents header '>
      <div className='navbar-brand nav-logo'>



        <NavLink className='navbar-item' activeClassName='' to={ routeCodes.HOME }>
          Bard From The East
        </NavLink>

        <div className='navbar-burger burger' data-target='navbarExampleTransparentExample'>
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className='navbar-menu navbar-end app-menu'>
        <NavLink className='navbar-item' activeClassName='active' to={ routeCodes.WHATWEDO }>
          WhatWeDo
        </NavLink>
        <NavLink className='navbar-item' activeClassName='active' to={ routeCodes.ABOUT }>
          AboutTeam
        </NavLink>
        <NavLink className='navbar-item' activeClassName='active' to={ routeCodes.CONTACT }>
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
