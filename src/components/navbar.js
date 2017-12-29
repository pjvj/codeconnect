import React from 'react';

import { Navbar,Nav,Item,NavDropdown,NavItem,MenuItem} from 'react-bootstrap';

const NavBar=(props) => {
    return (
<div>
        <Navbar className="navbar-nav" inverse collapseOnSelect>
            <div className="row">
            <div className="col-md-2 left">

            <Nav className="displays left">
                <h4>CodeConnect</h4>
            </Nav>

            </div>
                <div className="col-md-10">
        <Navbar.Collapse>
            <div className="col-md-6">
            <Nav>
                <NavDropdown eventKey={1} className="displays" title="Features" id="basic-nav-dropdown">
                    <MenuItem eventKey={1.1}>Action</MenuItem>
                    <MenuItem eventKey={1.2}>Another action</MenuItem>
                    <MenuItem eventKey={1.3}>Something else here</MenuItem>
                    <MenuItem eventKey={1.4}>Separated link</MenuItem>
                </NavDropdown>
            </Nav>
            </div>
            <div className="col-md-4 displays">
            <Navbar.Collapse>
                <div className="col-md-2 left">
                <Nav eventKey={1} >Log Out</Nav>
                </div>
                <div className="col-md-2 right">
                <Nav eventKey={2} >Logged in</Nav>
                </div>
            </Navbar.Collapse>
            </div>
        </Navbar.Collapse>
                </div>
            </div>
    </Navbar>
</div>
);
}

export default NavBar;