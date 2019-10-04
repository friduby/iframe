import React from 'react';
import PhoneNumberInput from './PhoneNumberInput';
import BaseInput from './BaseInput';

class CodeInput extends PhoneNumberInput {
    componentDidMount() {
        super.componentDidMount();
        this.setState({ error: this.props.error });
    }
    isClean(value) {
        let val = value || this.state.value;
        if (val.length == 4)
            return true;
        return false;
    }
    onValueChange(e) {
        this.setState({ value: e.target.value });
        this.isClean(e.target.value);
    }
    renderInput() {
        return (
            <div style={{display:'block'}}>
                <label className="uk-width-1-2" style={{paddingLeft:'10px', fontSize:'14px'}}>{this.props.inputLabel}</label>
                <br />
                <input className="form-control uk-input-medium uk-margin-small-top uk-width-3-4" style={{height:'30px', display:'inline', textAlign:'center'}} placeholder={this.props.placeholder} type="text" value={this.props.defaultVal || this.state.value} onChange={this.onValueChange.bind(this)} maxLength={this.props.maxLength}></input>
            </div>
        );
    }
}

export default CodeInput;