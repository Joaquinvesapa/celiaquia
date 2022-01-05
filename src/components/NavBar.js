import React from 'react';
import {Nav, NavLink, NavMenu, Bars} from'./NavBarElements.js'

const NavBar = () => {
  return (
    <Nav>
      <NavLink to="/">
        <h1>Logo</h1>
      </NavLink>
      <Bars/>
      <NavMenu>
        <NavLink to="/recetas" activeStyle>
          Recetas
        </NavLink>
        <NavLink to="/quien-soy" activeStyle>
          Quien Soy
        </NavLink>
        <NavLink to="/mas-info" activeStyle>
          + Info
        </NavLink>
        <NavLink to="/contacto" activeStyle>
          Contacto
        </NavLink>
      </NavMenu>
    </Nav>
  )
}

export default NavBar
