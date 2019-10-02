import React from 'react';
import './StepEnterBank.css'

class StepEnterBank extends React.Component {
    render() {
        return (
            <div className="content-container" style={{paddingRight:'30px'}}>
                <p style={{textAlign: 'right', marginTop:'20px'}}>ورود به اینترنت بانک</p>
                <div className="step-bank-inputs uk-grid">
                    <input type="text" className="" name="field1" placeholder="رمز عبور اینترنت بانک" />
                    <input type="text" className="" name="field1" placeholder="نام کاربری اینترنت بانک" />
                </div>
                    <input type="text" className="step-bank-input" style={{float:'right'}} name="field1" placeholder="کد امنیتی" />

            </div>
        );
    }
}

export default StepEnterBank;