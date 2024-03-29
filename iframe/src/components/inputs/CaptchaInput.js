import React from 'react';
import BaseInput from './BaseInput';
import './Input.css'
import CaptchaImage from './CaptchaImage';
class CaptchaInput extends BaseInput {
    isClean() {
        return this.state.value.length > 0;
    }

    onChange(e) {
        this.setState({ value: e.target.value }, () => {
            this.props.changeCallback();
        });
    }

    refreshCaptcha() {
        this.props.onRefresh(this.props.form, true);
    }
    renderInput() {
        return (
            <div className="">
                <div className="form-group" >
                    <input onChange={this.onChange.bind(this)} required onkeyup="this.setAttribute('value', this.value);" type={this.props.type || "text"} className="form-control uk-input uk-width-1-1" style={{float:'right', width:'40%'}} name={this.props.name} placeholder={this.props.name} />
                    {/* <label className="form-control-placeholder" for={this.props.name}>{this.props.placeholder}</label> */}
                </div>
                <CaptchaImage src={this.props.image} />
                <a onClick={this.refreshCaptcha.bind(this)}><img id="" src="https://ebank.bdi24.com/webbank/images/loginWithAd/refresh.png" alt="تغییر عکس" title="تغییر عکس" style={{marginBottom:'90px', position:'relative', top:'23px', width:'12px'}}/></a>
            </div>
        );
    }
}

export default CaptchaInput;