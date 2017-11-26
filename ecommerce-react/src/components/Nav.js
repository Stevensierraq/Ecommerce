import React, { Component } from 'react';
import { Navbar, Nav, NavItem  } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Navigate extends Component {

  render() {
    return (
      <div>
        <Navbar inverse staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a>Ecommerce WUWEI</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
                <Nav pullRight>
                  <NavItem eventKey={1} href=""><Link to="/orders" className= "white" >My Orders</Link>
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}


export default Navigate;

  