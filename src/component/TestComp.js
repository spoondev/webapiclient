import React, { Component } from 'react';

class TestComp extends Component {
    render() {
        console.log("Props", this.props)

        // NOTE: message is passed as a prop so this is shorthand to extract this from the props
        const { message } = this.props
        return (
            <div>
                <h2>IM HERE {message}</h2>
            </div>
        );
    }
}

export default TestComp;