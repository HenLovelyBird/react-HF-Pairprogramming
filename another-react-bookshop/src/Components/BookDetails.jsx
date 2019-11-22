import React from 'react';

class BookDetails extends React.Component {
    state = { }
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <img src={this.props.selectedBook.img} style={{maxWidth: "100%"}} />
                </div>
                <div className="col-md-8">

                </div>
            </div>
        );
    }
}

export default BookDetails;