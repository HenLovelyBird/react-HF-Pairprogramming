import React, { Component } from 'react';

class SearchComponent extends Component {
    search = (e) => {
        // console.log(e.target.value)
        this.setState ({searchKeyword: e.target.value})
    }
    state = {
        searchKeyword: ""
    }
    render() {

        return (
            <input type="search" placeholder="Search for a book here" onChange={this.search}>
                
            </input>
        );
    }
}

export default SearchComponent;