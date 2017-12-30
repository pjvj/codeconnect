import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/navbar'
import PersonDetails from './components/person_details';
//import Graph from './components/graph';
import SearchBar from './components/search_bar';
import QuesList from './components/ques_list';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
        };
    }

    tagSearch(term) {
            this.setState({tags: term});

            /*fetch('http://localhost:8000/questionslist/?tag=dp&numberq=15',
                {
                    crossDomain:true,
                    method:"get",
                    mode:'no-cors',
                    header:{
                        "Content-type":"application/json"
                    }
                }).then(response=>{return response.JSON()}).then(function (data) {
                    console.log(JSON.stringify(data));

            }).catch(function (err){
                console.log((err));
            })*/

        let xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });

        xhr.open("GET", "http://localhost:8000/questionslist/?tag=dp&numberq=15");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("Access-Control-Allow-Origin","*");

        xhr.send();



    }


    render() {
        return (
            <div className="container1">
                <br/>

                <div>
                    <NavBar/>
                </div>
                <br/>
                <br/>
                <div>
                    <PersonDetails/>
                </div>
                <div className="">
                    <SearchBar onSearchTermChange={this.tagSearch.bind(this)}/>
                    {/*<SearchBar/>*/}
                </div>

                {/*<div>*/}
                    {/*<Graph/>*/}
                {/*</div>*/}
                <div>
                    <QuesList/>
                </div>
                <br/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container12'));