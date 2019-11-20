import React from 'react';
import WarningComponent from './WarningComponent';
import MyBadge from "./MyBadge";

class MainComponent extends React.Component {
    render() {
        return (
            <div>
              <WarningComponent message="This is a Danger Message!"></WarningComponent>
              <MyBadge message="Warning: I'm a badge!" color="danger"/>
            </div>
        );
    }
}

export default MainComponent;