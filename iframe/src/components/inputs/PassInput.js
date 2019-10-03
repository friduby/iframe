import React from 'react';
import BaseInput from './BaseInput';

class PassInput extends BaseInput {
    isClean() {
        this.setState({ error: "Error" });
    }
    renderInput() {
        return (
            <input type={this.props.type || "password"} className="uk-input uk-width-1-1" style={{marginTop:'50px', marginBottom:'50px', float:'right', width:'50%'}} name={this.props.name} placeholder={this.props.placeholder} />
        );
    }
}

export default PassInput;