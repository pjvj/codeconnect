import React, {Component} from 'react';

import NavBar2 from './navbar2'
import PersonDetails from './person_details';
//import Graph from './components/graph';
import SearchBar from './search_bar';
import QuesList from './ques_list';
import Footer2 from './footer2';
import {browserHistory} from "react-router";

export default class LogPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: []
        };
        this.tagSearch = this.tagSearch.bind(this);
        this.onTermChange(this.state.tags);
        //this.tagSearch("graphs");
        //this.tagSearch(props.searchTerm);
    }

    onTermChange(data) {
        this.setState({tags:data});
        //console.log(this.state.tags);
        //console.log(data);
    };

    tagSearch(term) {

        fetch('http://localhost:8000/questionslist/?tag=' + term + '&numberq=30',
            {
                method: "get",
                header: {
                    "Content-type": "application/json"
                }
            }).then(response => {
            return response.json();
            console.log("response aaya");
        }).then((data) => {
            //console.log(data);
            this.onTermChange(data);
        })
            .catch(function (error) {
                alert(error);
            });




        // then(response => {
        //     return response.json()
        //     console.log("response aaya");
        // }).then((data) => {
        //     this.onTermChange(data);
        //     //this.setState({tags: data});
        //     //console.log(this.state.tags);
        //     console.log(data);
        //
        // }).catch(function (err) {
        //     console.log((err));
        // });


    }


    render() {
        return (



            <div>

                    <div>
                        <NavBar2 person={JSON.parse(localStorage.getItem("user"))}/>
                    </div>
                    <br/>
                    <br/>
                <div className="col-md-12">
                <div className="col-md-6">
                    <PersonDetails person={JSON.parse(localStorage.getItem("user"))}/>

                </div>
                <div className="col-md-6">
                <div className="">
                    <SearchBar onSearchTermChange={this.tagSearch(localStorage.getItem("term"))}/>

                </div>
                {/*<div>*/}
                {/*<Graph/>*/}
                {/*</div>*/}

                <div className="row">
                    <QuesList questions={this.state.tags}/>
                </div>
                </div>
                </div>
                <br/>
                <div>
                    <Footer2 className="foot"/>
                </div>
            </div>
        );
    }
}