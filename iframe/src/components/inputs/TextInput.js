import React from 'react';
import BaseInput from './BaseInput';
import './Input.css'
class TextInput extends BaseInput {
    isClean() {
        this.setState({ error: "" });
        return true;
    }
    onChange(e) {
        this.setState({ value: e.target.value });
    }
    renderInput() {
        return (
            <div className="form-group">
                <input onChange={this.onChange.bind(this)} required onkeyup="this.setAttribute('value', this.value);" type={this.props.type || "text"} className="form-control uk-input uk-width-1-1" style={{float:'right', width:'100%'}} name={this.props.name} />
                <label className="form-control-placeholder" for={this.props.name}>{this.props.placeholder}</label>
            </div>
        );
    }
}

export default TextInput;