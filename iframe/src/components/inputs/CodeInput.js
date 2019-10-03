import React from 'react';
import PhoneNumberInput from './PhoneNumberInput';

class CodeInput extends PhoneNumberInput {
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
    }
    renderInput() {
        return (
            <div style={{display:'block'}}>
                <label className="uk-width-1-2" style={{paddingLeft:'10px', fontSize:'14px'}}>{this.props.inputLabel}</label>
                <br />
                <input className="uk-input-medium uk-margin-small-top uk-width-3-4" style={{height:'30px', display:'inline', textAlign:'center'}} type="text" value={this.props.defaultVal || this.state.value} onChange={this.onValueChange.bind(this)}></input>
            </div>
        );
    }
}

export default CodeInput;