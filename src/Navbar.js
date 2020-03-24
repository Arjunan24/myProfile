import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  
  NavbarText
} from 'reactstrap';
import data from './Datas'
import './index.css'

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  className="navBg"  expand="md">
      <img src={data.profilePic} className="rounded-circle " width="10%" height="100vh" />
      <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/" className="nameText">Arjun Sankar</NavLink>
            </NavItem>
          </Nav>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          </Nav>
          <NavbarText>Home</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;