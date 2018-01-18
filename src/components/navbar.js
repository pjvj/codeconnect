import React from 'react';
import {Link} from "react-router";
const NavBar = () =>{
    return(<nav className="navbar navbar-expand-lg navbar-light bg-light navbar-inverse ">
            <a className="navbar-brand " href="#"><span className="fill">CodeConnect</span></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">apoorv</span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    </li>
                </ul>

                <button className="btn btn-outline-success my-2 my-sm-0 " type="button"><Link to={"register"}><span className="fill ">Register</span></Link></button>
                <button className="btn btn-outline-success my-2 my-sm-0 " type="button"><Link to={"signIn"}><span className="fill">SignIn</span></Link></button>

            </div>
        </nav>
    );
};
export default NavBar;