import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from '../../views/App';
const classNames = require('classnames');

class Header extends Component {
  state = {
    burgerIsActive: false
  };

  render() {
    let navbarBurgerClassName = classNames({
      "navbar-burger burger": true,
      'is-active': this.state.burgerIsActive
    });
    let navbarMenuClassName = classNames({
      'navbar-menu navbar-end app-menu': true,
      'is-active': this.state.burgerIsActive
    });
    return (
      <nav className="navbar is-black is-transparents header ">
        <div className="navbar-brand nav-logo">
          <NavLink
            className="navbar-item"
            activeClassName=""
            to={routeCodes.HOME}
          >
            Bard From The East
          </NavLink>

          <div
            className={navbarBurgerClassName}
            onClick={() =>
              this.setState({ burgerIsActive: !this.state.burgerIsActive })
            }
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className={navbarMenuClassName}>
          <NavLink
            className="navbar-item"
            activeClassName="active"
            to={routeCodes.WHATWEDO}
          >
            WhatWeDo
          </NavLink>
          <NavLink
            className="navbar-item"
            activeClassName="active"
            to={routeCodes.MEDIA}
          >
            Media
          </NavLink>
          <NavLink
            className="navbar-item"
            activeClassName="active"
            to={routeCodes.COURSE}
          >
            Course
          </NavLink>
          <NavLink
            className="navbar-item"
            activeClassName="active"
            to={routeCodes.RENTAL}
          >
            Rental
          </NavLink>
          <NavLink
            className="navbar-item"
            activeClassName="active"
            to={routeCodes.ABOUT}
          >
            Team
          </NavLink>
          <NavLink
            className="navbar-item"
            activeClassName="active"
            to={routeCodes.CONTACT}
          >
            Contact
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default Header;
