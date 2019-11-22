import React from 'react';

class BookList extends React.Component {
    render() {
        return (
        <div className="row">
        {this.props.books
            .filter(book => book.title.toLowerCase().includes(this.props.filter))
            .map((book, index)=>
            <div className="col-md-3" key={index}>
                <img src={book.img} style={{maxwidth: "100%"}} alt="bookcovers"></img>
                <span>{book.title}</span>
            </div>
        )}
        </div>
        );
    }
}

export default BookList;