import React from 'react';
import './StepBankDetail.css'

class StepBankDetail extends React.Component {
    render() {
        return (
            <div className="content-container" style={{paddingRight:'30px'}}>
                <p style={{textAlign: 'right', marginTop:'20px'}}>ورود به اینترنت بانک</p>
                <div className="step-bank-inputs uk-grid">
                    <input type="password" className="" name="cvv2" placeholder="CVV2" />
                    <input type="password" className="" name="pass2" placeholder="رمز دوم اینترنتی" />
                </div>
                <div style={{marginTop:'30px', paddingRight:'10px'}}>
                    <label style={{textAlign:'right', display:'block', marginBottom:'30px'}} className="uk-width-1-1">:تاریخ انقضای کارت</label>
                    <input  type="number" className="step-expire-date" placeholder="00" style={{float:'right'}} name="expire-date-month" />
                    <input maxLength="2" type="number" className="step-expire-date" placeholder="00" style={{float:'right'}} name="expire-date-day"/>
                </div>
            </div>
        );
    }
}

export default StepBankDetail;