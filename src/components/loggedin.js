import React, {Component} from 'react';

import NavBar2 from './navbar2'
import PersonDetails from './person_details';
//import Graph from './components/graph';
import SearchBar from './search_bar';
import QuesList from './ques_list';
import Footer2 from './footer2';

export default class LogPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
        };
        this.tagSearch = this.tagSearch.bind(this);
        this.tagSearch("graphs");
    }

    tagSearch(term) {

        fetch('http://localhost:8000/questionslist/?tag=' + term + '&numberq=15',
            {
                method: "get",
                header: {
                    "Content-type": "application/json"
                }
            }).then(response => {
            return response.json()
        }).then((data) => {
            this.setState({tags: data});
            console.log(this.state.tags);
            //console.log(data);

        }).catch(function (err) {
            console.log((err));
        });


    }


    render() {
        return (

            <div>
                <br/>

                <div>
                    <div>
                        <NavBar2 person={JSON.parse(localStorage.getItem("user"))}/></div>
                </div>
                <div>
                    <PersonDetails person={JSON.parse(localStorage.getItem("user"))}/>

                </div>

                <div className="">
                    <SearchBar onSearchTermChange={this.tagSearch.bind(this)}/>

                </div>
                {/*<div>*/}
                {/*<Graph/>*/}
                {/*</div>*/}

                <div>
                    <QuesList questions={this.state.tags}/>
                </div>

                <br/>
                <div>
                    <Footer2 className="foot"/>
                </div>
            </div>
        );
    }
}