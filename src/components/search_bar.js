import React, {Component} from 'react';
import{Button} from 'react-bootstrap';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: 'graphs'
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onSearchChange(this.state.searchTerm);

    }

    onInputChange(term) {
        console.log(term);
        //this.setState({searchTerm: term});
        this.onSearchChange(term);
    };

    onSearchChange(term) {
        this.setState({searchTerm: term});
        localStorage.setItem("term", term);
        console.log(this.state.searchTerm);
    };
    triggerChange(event)
    {

        if(event.key==='Enter')
            this.onInputChange(document.getElementById('search').value);
    }

    render() {
        return (
            <div className="search-bar">
                <input className="col-md-5 search " id="search"
                       onKeyPress={(event)=>this.triggerChange(event)}
                       onChange={(event) => this.onSearchChange(event.target.value)}
                       value={this.state.searchTerm}/>
                <Button bsStyle="success"
                    onClick={() => this.onInputChange(document.getElementById('search').value)}>Search
                </Button>
            </div>
        );
    }
}

export default SearchBar;