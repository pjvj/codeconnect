import React, {Component} from 'react';


class DataPerson extends Component {
   /* constructor() {
        super();
            this.state = {
            name: '',
            username: '',
            email: '',
            password: '',
            about: '',
            hackerrank: '',
            codeforces: ''
        };
    }*/

    componentDidMount() {
        fetch('https://localhost:8000/usersvalid/username=apoorv&password=12345')
            .then(results => {
                return results.json();
            })
            .then(data => {
                let name = data.results.map((name) => {
                    return (
                        <div key={name.results}>
                            <h3>{name.name}</h3>
                        </div>
                    )
                })
                let username = data.results.map((username) => {
                    return (
                        <div key={username.results}>
                            <h3>{username.username}</h3>
                        </div>
                    )
                })
               /* let email = data.results.map((email) => {
                    return (
                        <div key={email.results}>
                            <h3>{email.email}</h3>
                        </div>
                    )
                })
                let password = data.results.map((password) => {
                    return (
                        <div key={password.results}>
                            <h3>{password.password}</h3>
                        </div>
                    )
                })*/
                let about = data.results.map((about) => {
                    return (
                        <div key={about.results}>
                            <h3>{about.about}</h3>
                        </div>
                    )
                })
                let hackerrank = data.results.map((hackerrank) => {
                    return (
                        <div key={hackerrank.results}>
                            <h3>{hackerrank.hackerrank}</h3>
                        </div>
                    )
                })
                let codeforces = data.results.map((codeforces) => {
                    return (
                        <div key={codeforces.results}>
                            <h3>{codeforces.codeforces}</h3>
                        </div>
                    )
                })
                /*this.setState({
                    name: name,
                    username: username,
                    email: email,
                    password: password,
                    about: about,
                    hackerrank: hackerrank,
                    codeforces: codeforces
                })*/
            })
    }

}
export default DataPerson;