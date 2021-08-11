import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderContainer } from './Header.style';
import routes from '../../../routes/routes';

const Header = () => (
  <HeaderContainer>
    <ul>
      {routes.map((route) => (
        <li key={route.key}>
          <NavLink to={route.path} activeClassName="selected">
            {route.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </HeaderContainer>
);

export default Header;
