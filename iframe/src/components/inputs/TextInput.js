import React from 'react';
import BaseInput from './BaseInput';

class TextInput extends BaseInput {
    isClean() {
        this.setState({ error: "Error" });
    }
    renderInput() {
        return (
            <input type={this.props.type || "text"} className="" name={this.props.name} placeholder="" />
        );
    }
}

export default TextInput;