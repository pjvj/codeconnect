import React from 'react';
import {Link} from "react-router";

const NavBar2 = (props) => {
    return (<nav className="navbar navbar-expand-lg navbar-light bg-light navbar-inverse ">
            <a className="navbar-brand " href="#"><span className="fill">CodeConnect</span></a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    </li>
                </ul>

                <button className="btn btn-outline-info my-2 my-sm-0 " type="button"><Link to={"/"}><span
                    className="fill">Log Out</span></Link></button>
                <br/>
                <button className="btn btn-outline-info my-2 my-sm-0 " type="button"><span
                    className="fill">{props.person.name}</span></button>

            </div>
        </nav>
    );
};
export default NavBar2;