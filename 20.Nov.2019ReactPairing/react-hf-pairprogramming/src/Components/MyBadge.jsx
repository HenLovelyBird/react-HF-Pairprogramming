import React, { Component } from 'react';
import { Badge } from "react-bootstrap";

export default class MyBadge extends Component {
    render() {
        return (
        <Badge variant={this.props.color}>{this.props.message}</Badge>
        )
    }
}
