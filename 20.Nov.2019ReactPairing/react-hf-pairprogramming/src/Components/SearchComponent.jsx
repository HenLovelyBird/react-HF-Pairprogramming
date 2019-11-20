import React, { Component } from 'react';


class SearchComponent extends Component {
    
    render() {

        return (
            <input type="search" placeholder="Search for a book here" onChange={this.props.searchFunc}>
                
            </input>
        );
    }
}

export default SearchComponent;