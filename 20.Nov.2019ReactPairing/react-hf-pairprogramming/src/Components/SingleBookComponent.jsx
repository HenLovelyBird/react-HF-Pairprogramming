import React, { Component } from 'react';
import { Card} from 'react-bootstrap';

class SingleBookComponent extends Component {
    render() {
        // console.log (this.props.book.img)
        return (
            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.book.img} />
                <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                   
                </Card.Body>
            </Card>

        );
    }
}

export default SingleBookComponent;