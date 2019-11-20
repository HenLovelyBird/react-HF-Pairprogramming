import React from 'react';
import { Alert } from 'react-bootstrap';


class WarningComponent extends React.Component {
    render() {
        return (
            <div>
            <Alert color="danger">
                    {this.props.message}
            </Alert>
            </div>
        );
    }
}

export default WarningComponent;