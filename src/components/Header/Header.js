import React from 'react'
import logo from '../../logo.png'
import {
  Container,
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn1,
  NavBtn2,
  NavBtnLink,
} from './HeaderElements';



function Header() {
  return (

    <>
    <Container>
      <Nav>
          <img src={logo} alt="logo"/>      
      </Nav>
      <Bars/>
      <NavMenu>
      <NavLink to='/'>
        Home
      </NavLink>
      <NavLink to='/about' activeStyle>
        About Us
      </NavLink>
      <NavLink to='/faq' activeStyle>
        FAQ
      </NavLink>
      <NavLink to='/get-in-touch' activeStyle>
        Get in touch
      </NavLink>
      </NavMenu>
      <NavBtn1>
        <NavBtnLink to='/login'>Login</NavBtnLink>
      </NavBtn1>
      <NavBtn2>  
        <NavBtnLink to='/sign-up'>Sign Up</NavBtnLink>
      </NavBtn2>
    </Container>
    </>  
  )
}


export default Header
