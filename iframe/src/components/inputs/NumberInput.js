import React from 'react';
import BaseInput from './BaseInput';

class NumberInput extends BaseInput {
    isClean() {
        this.setState({ error: "Error" });
    }
    renderInput() {
        return (
            <div className="form-group" >
                <input type={this.props.type || "number"} required className="form-control uk-input uk-width-1-1" style={{float:'right', width:'100%'}} name={this.props.name} placeholder={this.props.placeholder} />
            </div>
        );
    }
}

export default NumberInput;