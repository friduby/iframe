import React from 'react';
import BaseInput from './BaseInput';
import './Input.css'
import TextInput from './TextInput'
class CaptchaInput extends BaseInput {
    isClean() {
        return this.state.value.length > 0;
    }

    onChange(e) {
        this.setState({ value: e.target.value }, () => {
            this.props.changeCallback();
        });
    }
    renderInput() {
        return (
            <div className="">
                <div className="form-group">
                    <input onChange={this.onChange.bind(this)} required onkeyup="this.setAttribute('value', this.value);" type={this.props.type || "text"} className="form-control uk-input uk-width-1-1" style={{float:'right', width:'40%'}} name={this.props.name} placeholder={this.props.name} />
                    {/* <label className="form-control-placeholder" for={this.props.name}>{this.props.placeholder}</label> */}
                </div>
                <img id="" src="http://localhost:8000/static/gppadmin/img/new_logo.png" alt="" className='' />
                <img onClick={this.props.onRefresh} id="" class='' src="https://ebank.bdi24.com/webbank/images/loginWithAd/refresh.png" alt="تغییر عکس" title="تغییر عکس" />
            </div>
        );
    }
}

export default CaptchaInput;