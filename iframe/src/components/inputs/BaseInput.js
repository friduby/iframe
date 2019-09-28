import React from 'react';

class BaseInput extends React.Component {
    state = {
        value: "",
        error: ""
    }

    componentDidMount() {
        this.props.onRegister(this);
    }
    componentWillUnmount() {
        this.props.onUnRegister(this);
    }
    isClean() {
        return false;
    }
    renderInput() {
        return;
    }
    renderError() {
        return (
            <small style={{color: "red"}}>{this.state.error}</small>
        );
    }
    render() {
        return (
            <div>
                {this.renderInput()}
                {this.renderError()}
            </div>
        );
    }
}


export default BaseInput;
