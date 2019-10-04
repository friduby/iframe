import React from 'react';
import BaseInput from './BaseInput';
import './Input.css'
import TextInput from './TextInput'
class CaptchaInput extends BaseInput {
    isClean() {
        this.setState({ error: "Error" });
    }
    renderInput() {
        return (
            <div className="">
                <div className="form-group">
                    <input required onkeyup="this.setAttribute('value', this.value);" type={this.props.type || "text"} className="form-control uk-input uk-width-1-1" style={{float:'right', width:'100%'}} name={this.props.name} />
                    <label className="form-control-placeholder" for={this.props.name}>{this.props.placeholder}</label>
                </div>
                <img id="" src="http://localhost:8000/static/gppadmin/img/new_logo.png" alt="" className='' />
                <img id="" class='' src="https://ebank.bdi24.com/webbank/images/loginWithAd/refresh.png" alt="تغییر عکس" title="تغییر عکس" />
            </div>
        );
    }
}

export default CaptchaInput;