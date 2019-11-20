import React, { Component } from 'react';
import Books from '../data/fantasy.json';
import SingleBookComponent from "./SingleBookComponent";
import { Row, Container } from "react-bootstrap";

export default class BookList extends Component {
    render() {
        
        return (
            <Container fluid>
                <Row>
                    {Books.map((book, index) => <SingleBookComponent book={book} key={index}/>)}
                </Row>
            </Container>
        )
    }
}
