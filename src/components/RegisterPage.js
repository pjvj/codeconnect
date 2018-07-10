import React from 'react';
import {browserHistory} from "react-router";

export default class RegisterPage extends React.Component
{
    onSubmit1()
    {
        fetch("http://localhost:8000/userslist/",
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    name: document.getElementById("name").value,
                    username: document.getElementById("username").value,
                    email: document.getElementById("email").value,
                    password: document.getElementById("password").value,
                    hackerrank: document.getElementById("hackerrank").value,
                    codeforces: document.getElementById("codeforces").value,
                    about: document.getElementById("about").value

                })
            }).then(response => {
            return response.json()
        }).then((data) => {
            console.log(data);
            browserHistory.push("/");
        })
            .catch(function (error) {
                alert(error);
            });
    }


    render() {
        return (
            <div>
                <div className={"style"}>
                    <div>
                        <h1 className="center">REGISTER HERE</h1>
                    </div>
                    <div className="col-md-12 styling">
                        <label className="col-md-6 color1">Name: </label>
                        <input type="text" id="name" className="thick"/>
                    </div>
                    <div className="col-md-12 styling">
                        <label className="col-md-6 color1">Username: </label>
                        <input type="text" id="username" className="thick"/>
                    </div>
                    <div className="col-md-12 styling">
                        <label className="col-md-6 color1">Password: </label>
                        <input type="password" id="password" className="thick"/>
                    </div>
                    <div className="col-md-12 styling">
                        <label className="col-md-6 color1">Confirm Password: </label>
                        <input type="password" id="confirm" className="thick"/>
                    </div>
                    <div className="col-md-12 styling">
                        <label className="col-md-6 color1">Email: </label>
                        <input type="email" id="email" className="thick"/>
                    </div>
                    <div className="col-md-12 styling">
                        <label className="col-md-6 color1">Codeforces Username: </label>
                        <input type="text" id="codeforces" className="thick"/></div>
                    <div className="col-md-12 styling">
                        <label className="col-md-6 color1">Hackerrank Username: </label>
                        <input type="text" id="hackerrank" className="thick"/>
                    </div>
                    <div className="col-md-12 styling">
                        <label className="col-md-6 color1">About: </label>
                        <input type="text" id="about" className="thick"/>
                    </div>
                    <div>
                        <button className="submit" onClick={this.onSubmit1}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}