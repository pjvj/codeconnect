import React from 'react';

import {Navbar, Nav, Item, NavDropdown, NavItem, MenuItem} from 'react-bootstrap';

const NavBar = (props) => {
    return (
        <div>
            <Navbar className="navbar-nav" inverse collapseOnSelect>
                <div className="row">
                    <div className="col-md-4">
                        <Nav pullLeft>
                            <NavItem className="displays">CodeConnect</NavItem>
                        </Nav>
                    </div>
                    <div className="col-md-8">
                        <Navbar.Collapse>
                            <div className="col-md-4">
                                <Nav>
                                    <NavDropdown eventKey={1} className="displays" title="Features"
                                                 id="basic-nav-dropdown">
                                        <MenuItem eventKey={1.1}>Enhanced Coding Skills</MenuItem>
                                        <MenuItem eventKey={1.2}>Keep A Track of Your Progress</MenuItem>
                                        <MenuItem eventKey={1.3}>Think On Your Feet</MenuItem>
                                        <MenuItem eventKey={1.4}>Discuss Your Code with your Buddies</MenuItem>
                                        <MenuItem eventKey={1.5}>Set A Schedule that reminds you</MenuItem>
                                    </NavDropdown>
                                </Nav>
                            </div>
                            <div className="col-md-4 displays right">
                                <Nav pullRight>

                                    <NavItem eventKey={1}>Log Out</NavItem>
                                    <NavItem eventKey={2}>Logged in</NavItem>

                                </Nav>
                            </div>
                        </Navbar.Collapse>
                    </div>
                </div>
            </Navbar>
            //</div>
    );
}

export default NavBar;