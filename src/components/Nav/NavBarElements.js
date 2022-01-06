import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom';
import {GoThreeBars} from 'react-icons/go'


export const Nav = styled.nav`
/*   background: #000;
 */  box-shadow: 0 5px 15px rgba(0,0,0,.5);
  overflow: hidden;
  height: 70px;
  width: 100%auto;
  display: flex;
  position:relative;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 1;

  &:before{
    filter:blur(6px);
  }
`

export const NavLogo = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`

export const Bars = styled(GoThreeBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  font-weight: bolder;

  @media screen and (max-width: 768px){
    display: none;
  }
`


