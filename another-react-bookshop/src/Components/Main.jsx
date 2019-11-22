import React from 'react';
import {Jumbotron, Container, Input} from 'reactstrap';
import MyBooks from "../data/fantasy.json";
import BookList from './BookList.jsx';
import BookDetails from './BookDetails'; 

class Main extends React.Component {
    state = { 
        search: "",
        selectedBook: undefined
    }

    selectBook = (book) => {
        this.setState({
            selectedBook: book
        })
    }
    render() {
        return (
        
            <Container fluid>
            <Jumbotron fluid>
                <h1 className="display-3">Another Bookshop</h1>
                <p className="lead">Let's get some books!</p>
            </Jumbotron>

           {this.state.selectedBook && <BookDetails selectedBook={this.state.selectedBook} />}
            
            <Input className="my-5" type="text" value={this.state.search} 
            onChange={(val)=> this.setState({search: val.target.value.toLowerCase()})} 
            placeholder="Your search here">
            </Input>

            <BookList books={MyBooks} filter={this.state.search} onBookSelected={this.selectBook}> </BookList>
       
            </Container>
        );
    }
}

export default Main;