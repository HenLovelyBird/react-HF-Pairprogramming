import React from 'react';
import WarningComponent from './WarningComponent'

class MainComponent extends React.Component {
    render() {
        return (
            <div>
              <WarningComponent message="This is a Danger Message!"></WarningComponent>  
            </div>
        );
    }
}

export default MainComponent;