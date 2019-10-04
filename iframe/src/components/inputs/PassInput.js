import React from 'react';
import BaseInput from './BaseInput';
import './Input.css'
class PassInput extends BaseInput {
    isClean() {
        this.setState({ error: "Error" });
    }
    onChange(e) {
        this.setState({ value: e.target.value });
    }
    renderInput() {
        return (
            <div className="form-group" style={{float:'right'}}>
                <input required onChange={this.onChange.bind(this)} type={this.props.type || "password"} className="form-control uk-input uk-width-1-1" style={{float:'right', width:'100%', display:'block'}} name={this.props.name} />
                <label className="form-control-placeholder" for={this.props.name}>{this.props.placeholder}</label>
            </div>
        );
    }
}

export default PassInput;