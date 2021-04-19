import React, { Component } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Print from '../Pages/Print'
import History from '../Pages/History'
import AddUser from '../Pages/AddUser'
import Logo from './er.png'
export default class Header extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    
    console.log(this.props)
    return (
      <>
      <Navbar collapseOnSelect expand="md" bg="light" variant="secondary" >
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

