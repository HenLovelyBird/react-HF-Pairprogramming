import React, { Component } from 'react';

import SingleBookComponent from "./SingleBookComponent";
import { Row, Container } from "react-bootstrap";

export default class BookList extends Component {
    render() {
        console.log();
        return (
            <Container fluid>
                <Row>
                    {this.props.Books.map((book, index) => <SingleBookComponent book={book} key={index} />)}
                </Row>
            </Container>
        )
    }
}
