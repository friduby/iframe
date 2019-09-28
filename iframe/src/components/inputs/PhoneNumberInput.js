import React from 'react';
import BaseInput from "./BaseInput";

class PhoneNumberInput extends BaseInput {
    isClean() {
        if (this.state.value.length < 5) {
            this.setState({ error: "Should be longer" });
            return false;
        }
        this.setState({ error: "" });
        return true;
    }
    onValueChange(e) {
        this.setState({ value: e.target.value });
        if (e.target.value == "") {
            this.setState({ error: "" });
        }
        else
            this.isClean();
    }
    renderInput() {
        return (
            <input className="uk-input-small" type="text" value={this.state.value} onChange={this.onValueChange.bind(this)}></input>
        );
    }
}

export default PhoneNumberInput;