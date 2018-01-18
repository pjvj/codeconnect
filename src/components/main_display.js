
import React from 'react';
import {Jumbotron} from 'react-bootstrap';
//import {Button} from 'react-bootstrap';

const MainDisplay = (props) => {
    return (
        <Jumbotron>
            <h1>CodeConnect!</h1>
            <p className="p1">It is a web application that serves you when you want to practice or see all progress that
                you have made in programming on different platforms all at one place.</p>
        </Jumbotron>
    );
};
export default MainDisplay;