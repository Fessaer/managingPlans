import React, { Component } from 'react'
import { Nav, Navbar, Container, Button } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import Logo from './er.png'
export default class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
            src={Logo}
            height="30"
            width="30"
            className="d-inline-block align-top"
            alt="Logo"
            />
          </Navbar.Brand>
          <NavbarToggle aria-controls="responsive-navbar-nav" />
            <NavbarCollapse id="mr-auto">
              <Nav.Link href="/">Калькулятор Менеджера</Nav.Link>
              <Nav.Link href="/calc">Данные для клиента</Nav.Link>
            </NavbarCollapse>
          
        </Container>
      </Navbar>
    )
  }
}

