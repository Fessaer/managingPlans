import React, { Component } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Print from '../pages/Print'
import History from '../pages/History'
import AddUser from '../pages/AddUser'
import Logo from './er.png'
export default class Header extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    
    console.log(this.props)
    return (
      <>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" >
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
              <Nav.Link href="/">Калькулятор</Nav.Link>
              <Nav.Link href="/print">О клиенте</Nav.Link>
              <Nav.Link href="/history">История</Nav.Link>
              <Nav.Link href="/addUser">Данные</Nav.Link>
            </NavbarCollapse>
          
        </Container>
      </Navbar>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/print" component={Print} />
          <Route exact path="/history" component={History} />
          <Route exact path="/addUser" component={AddUser} />
        </Switch>
      </Router>
      </>
    )
  }
}

