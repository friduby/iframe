import React from 'react';
import BaseInput from './BaseInput';
import './Input.css'
class DateInput extends BaseInput {
    isClean() {
        return this.state.value.length > 0;
    }
    onChange(e) {
        this.setState({ value: e.target.value }, () => {
            this.props.changeCallback();
        });
    }
    renderInput() {
        return (
            <div className="form-group" style={{float:'right', width:'100px', textAlign:'center', marginLeft:'10px'}}>
                <input id="date-input" onValidate="this.setCustomValidity('')" onChange={this.onChange.bind(this)} value={this.state.value} onkeyup="this.setAttribute('value', this.value);" type={this.props.type || "text"} className="form-control uk-input uk-width-1-1" style={{float:'right'}} name={this.props.name} />
                <label className="form-control-placeholder" for={this.props.name}>{this.props.placeholder}</label>
            </div>
        );
    }
}

export default DateInput;