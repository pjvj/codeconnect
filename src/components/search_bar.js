import React, {Component} from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: 'search your tag'
        };
        props.onSearchTermChange(this.state.term);

    }

    onInputChange(term) {
        this.setState({searchTerm: term});
        this.props.onSearchTermChange(term);
    };

    render() {
        return (
            <div className="search-bar">
                <input className="col-md-5" id={"search"} value={this.state.searchTerm}/>
                    <button
                        onClick={() => this.onInputChange(document.getElementById('search').value)} value={"Search"}/>
            </div>
        );
    }
}

export default SearchBar;