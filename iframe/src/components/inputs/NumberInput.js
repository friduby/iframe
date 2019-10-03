import React from 'react';
import BaseInput from './BaseInput';

class NumberInput extends BaseInput {
    isClean() {
        this.setState({ error: "Error" });
    }
    renderInput() {
        return (
            <div>
                <input type={this.props.type || "number"} className="uk-input uk-width-1-1" style={{float:'right', width:'15%', marginBottom:'90px', marginLeft:'20px'}} name={this.props.name} placeholder={this.props.placeholder} />
            </div>
        );
    }
}

export default NumberInput;