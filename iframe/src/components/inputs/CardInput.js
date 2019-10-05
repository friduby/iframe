import React from 'react';
import BaseInput from './BaseInput';
import './Input.css'
class CardInput extends BaseInput {
    isClean() {
        return this.state.value.length == 16;
    }

    onChange(e) {
        this.setState({ value: e.target.value }, () => {
            this.props.changeCallback();
        });
    }

    renderInput() {
        return (
            <div className="form-group" >
                <input onChange={this.onChange.bind(this)} type={this.props.type || "text"} className="form-control uk-input uk-width-1-1" style={{float:'right', width:'100%', marginBottom: '10px'}} name={this.props.name} maxLength="16" required />
            </div>
        );
    }
}

export default CardInput;