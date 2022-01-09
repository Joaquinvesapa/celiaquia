import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import {GoThreeBars} from 'react-icons/go'

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <nav className='nav-bar'>
      <div className='container'>
        <Link to="/" className='nav-logo' onClick={closeMobileMenu}>
          <h1>Celiaquia</h1>
        </Link>
        <GoThreeBars className='nav-hamb' onClick={handleClick}/>
        <div className={click ? 'nav-menu-active' : 'nav-menu'}>
          <Link className='nav-links' to="/recetas" >
            Recetas
          </Link>
          <Link className='nav-links' to="/quien-soy" >
            Quien Soy
          </Link>
          <Link className='nav-links' to="/mas-info" >
            + Info
          </Link>
          <Link className='nav-links' to="/contacto" >
            Contacto
          </Link>
        </div>
        </div>  
    </nav>
  )
}

export default NavBar
