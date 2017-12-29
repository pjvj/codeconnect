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
        /*HAMARISearch({key:API_KEY,term:term},(tags)=>{*/
            this.setState({tags: "greedy"});


    }


    render() {
        return (
            <div className="container1">
                <br/>

                <div>
                    <NavBar/>
                </div><br/><br/>
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