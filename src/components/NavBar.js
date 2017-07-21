import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

function NavigationBar(props) {
  return (
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-whyd</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">Playlists</NavItem>
      <NavItem eventKey={2} href="#">Tracks</NavItem>
    </Nav>
  </Navbar>)
};

export default NavigationBar;
