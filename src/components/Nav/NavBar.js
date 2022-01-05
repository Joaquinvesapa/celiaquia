import React from 'react';
import {Nav, NavLink, NavMenu, Bars, NavLogo} from'./NavBarElements.js'

const NavBar = () => {
  return (
    <Nav>
      <NavLogo to="/">
        <h1>Celiaquia</h1>
      </NavLogo>
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
