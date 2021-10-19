import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 0.25rem;
  height: 80px;
  flex-wrap: nowrap;
  z-index: 10;   
  border-style: inset;
  border-color: #f5f9fa; 
`

export const Nav = styled.div`
  height: 60px;
  width: 250px;
  display: flex;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
  

`


export const NavLink = styled(Link)`
  display: block;
  display: inline;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;

  &.active {
      color: black;
  }
`

export const Bars = styled(FaBars)`
  display: none;
  

  @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      color: #60369E;
      top: 0;
      right: 0;
      transform: translate(-100%, 75%);
      font-size: 1.8rem;
      cursor: pointer;
  }
`

export const NavMenu = styled.div`
  position: relative;
  display: block;
  display: inline;
  position: relative;
  margin-right: -24px;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0 ,0.25));
  
  @media screen and (max-width: 768px) {
      display: none;
  }
`

export const NavBtn1 = styled.nav`
  margin-right: 0.01rem;
  cursor: pointer;
  display: inline;

  
  @media screen and (max-width: 768px) {
      display: none;
  }
`
export const NavBtn2 = styled.nav`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-top: 0.1rem;
  margin-bottom: 0.1rem; 
  display: inline;
  text-decoration: none;
  padding: rem;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
      transition: all 0.2s ease-in-out;     
  }
`