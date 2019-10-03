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
    renderError() {
        return(
            <div style={{ display: 'inline' }}>
                {this.state.error ? (
                    <div uk-tooltip={this.state.error} style={{display:'inline', position:'relative', top:'-45px', left:'-35%', width:'20px', height:'10px' }}>
                        <i className="fas fa-exclamation-triangle" style={{ fontSize: '17px', marginLeft: '10px', color: 'red' }}></i>
                    </div>
                ) : (<p style={{ display: 'inline' }}></p>)
                }
            </div>
        );
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

export default PhoneNumberInput;