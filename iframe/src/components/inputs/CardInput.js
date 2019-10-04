import React from 'react';
import BaseInput from './BaseInput';
import './Input.css'
class CardInput extends BaseInput {
    isClean() {
        this.setState({ error: "Error" });
    }
    renderInput() {
        return (
            <div className="form-group" >
                <input type={this.props.type || "number"} className="form-control uk-input uk-width-1-1" style={{float:'right', width:'100%'}} name={this.props.name} placeholder="_ _ _ _-_ _ _ _-_ _ _ _-_ _ _ _" pattern="(\d{4}-\d{4}-\d{4}-\d{4})" data-mask="0000-0000-0000-0000" required />
            </div>
        );
    }
}

export default CardInput;