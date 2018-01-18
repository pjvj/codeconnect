import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,browserHistory} from 'react-router';
import RegisterPage from "./components/RegisterPage";
import MainPage from "./components/mainpage";
import SignPage from "./components/signIn";
import LogPage from "./components/loggedin";

class App extends React.Component {
    render(){
        return(
            <Router history={browserHistory}>
                <Route path={"/"} component={MainPage}/>
                <Route path={"register"} component={RegisterPage}/>
                <Route path={"signIn"} component={SignPage}/>
                <Route path={"logIn"} component={LogPage}/>
            </Router>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector(".container12"));
