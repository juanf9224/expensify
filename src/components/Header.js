import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Go To Dashboard Page</NavLink><br />
    <NavLink to="/create" activeClassName="is-active">Go To Add Page</NavLink><br />
    <NavLink to="/edit" activeClassName="is-active">Go Edit Page</NavLink> <br />
  </header>
);

export default Header;