import React from 'react';
import WarningComponent from './WarningComponent';
import MyBadge from "./MyBadge";
// import SingleBookComponent from "./SingleBookComponent";
import BookList from './BookList';
import SearchComponent from './SearchComponent';
import Books from '../data/fantasy.json';

class MainComponent extends React.Component {
    search = (e) => {
        console.log(e.target.value)
        this.setState ({searchKeyword: e.target.value})
    }
    state = {
        searchKeyword: ""
    }


    render() {
        
        // var singleBook = {
        //     "asin": "0316438960",
        //     "title": "The Last Wish: Introducing the Witcher",
        //     "img": "https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg",
        //     "price": 9.59,
        //     "category": "fantasy"
        // }
        return (
            <div>
                <WarningComponent message="This is a Danger Message!"></WarningComponent>
                <MyBadge message="Warning: I'm a badge!" color="danger" />
                <SearchComponent searchFunc={this.search}/>
                {/* <SingleBookComponent book={singleBook}/> */}
                <BookList Books={Books.filter(Book => Book.title.includes(this.state.searchKeyword))} />
            </div>
        );
    }
}

export default MainComponent;