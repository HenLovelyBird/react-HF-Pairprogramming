import React, { Component } from 'react';
import { Card} from 'react-bootstrap';

class SingleBookComponent extends Component {
    render() {
        // console.log (this.props.book.img)
        return (
            
            <div className="p-2">
                <Card style={{ width: '10rem'}}>
                    <Card.Img variant="top" src={this.props.book.img} />
                    <Card.Body>
                        <Card.Title>{this.props.book.title.substring(0,25)}...</Card.Title>                       
                    </Card.Body>
                </Card>
            </div>

        );
    }
}

export default SingleBookComponent;