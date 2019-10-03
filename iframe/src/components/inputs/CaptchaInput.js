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
                <TextInput name="field1" placeholder="کد امنیتی" />
                <img id="" src="" alt="" className='' />
                <img id="" class='' src="https://ebank.bdi24.com/webbank/images/loginWithAd/refresh.png" alt="تغییر عکس" title="تغییر عکس" />
            </div>
        );
    }
}

export default CaptchaInput;