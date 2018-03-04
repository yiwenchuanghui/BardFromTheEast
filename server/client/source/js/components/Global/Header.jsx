import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from '../../views/App';

const classNames = require('classnames');

class Header extends Component {
  state = {
    burgerIsActive: false,
  };

  render() {
    const navbarBurgerClassName = classNames({
      'navbar-burger burger': true,
      'is-active': this.state.burgerIsActive,
    });
    const navbarMenuClassName = classNames({
      'navbar-menu navbar-end app-menu': true,
      'is-active': this.state.burgerIsActive,
    });
    return (
      <nav className="navbar is-transparents header">
      <div className="container">
        <div className="navbar-brand nav-logo">
          <NavLink className="navbar-item" activeClassName="" to={routeCodes.HOME}>
          <img src="/assets/images/bard_white.png" alt=""/>
          </NavLink>

          <div className={navbarBurgerClassName}
            onClick={() => this.setState({ burgerIsActive: !this.state.burgerIsActive })}>
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className={navbarMenuClassName}>
          <NavLink
              className="navbar-item"
              activeClassName="active"
              to={routeCodes.HOME}
              onClick={() => this.setState({ burgerIsActive: false })}
          >
            Home
          </NavLink>
          <NavLink
            className="navbar-item"
            activeClassName="active"
            to={routeCodes.WHATWEDO}
            onClick={() => this.setState({ burgerIsActive: false })}
          >
            WhatWeDo
          </NavLink>
          <NavLink
            className="navbar-item"
            activeClassName="active"
            to={routeCodes.MEDIA}
            onClick={() => this.setState({ burgerIsActive: false })}
          >
            Media
          </NavLink>
          <NavLink
            className="navbar-item"
            activeClassName="active"
            to={routeCodes.COURSE}
            onClick={() => this.setState({ burgerIsActive: false })}
          >
            Course
          </NavLink>
          <NavLink
            className="navbar-item"
            activeClassName="active"
            to={routeCodes.RENTAL}
            onClick={() => this.setState({ burgerIsActive: false })}
          >
            Rental
          </NavLink>
          <NavLink
            className="navbar-item"
            activeClassName="active"
            to={routeCodes.ABOUT}
            onClick={() => this.setState({ burgerIsActive: false })}
          >
            Team
          </NavLink>
          <NavLink
            className="navbar-item"
            activeClassName="active"
            to={routeCodes.CONTACT}
            onClick={() => this.setState({ burgerIsActive: false })}
          >
            Contact
          </NavLink>
        </div>
        </div>
      </nav>
    );
  }
}

export default Header;
