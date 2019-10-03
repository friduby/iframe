import React from 'react';
import BaseInput from './BaseInput';

class TextInput extends BaseInput {
    isClean() {
        this.setState({ error: "Error" });
    }
    renderInput() {
        return (
            <input type={this.props.type || "text"} className="uk-input uk-width-1-1" style={{float:'right', width:'100%'}} name={this.props.name} placeholder={this.props.placeholder} />
        );
    }
}

export default TextInput;