import React from 'react';
import WarningComponent from './WarningComponent';
import MyBadge from "./MyBadge";
// import SingleBookComponent from "./SingleBookComponent";
import BookList from './BookList';

class MainComponent extends React.Component {


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
                {/* <SingleBookComponent book={singleBook}/> */}
                <BookList />
            </div>
        );
    }
}

export default MainComponent;