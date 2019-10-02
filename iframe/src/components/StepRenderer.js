import React from 'react';
import './StepRenderer.css';
import './StepBankDetail.css';
import './StepEnterBank.css';
import './StepForm.css';
import ProgressBar from './ProgressBar';
import RulesInput from './inputs/RulesInput';
import Form from './Form';
import TextInput from './inputs/TextInput';

class StepRenderer extends React.Component {
    render() {
        return (
            <div>
                <ProgressBar />
                <div className="steprenderer-content uk-width-1-1">
                    <Form buttonText="قبول می کنم">
                        <p style={{ textAlign: 'right', marginTop: '20px' }}>ورود به اینترنت بانک</p>
                        {/* <RulesInput /> */}
                        <div className="step-bank-inputs uk-grid">
                            <TextInput name="field1" />
                            <TextInput name="field1" />
                        </div>
                        <div className="step-bank-inputs uk-grid">
                            <input type="text" className="step-bank-input" name="field1" placeholder="کد امنیتی" />
                        </div>
                    </Form>
                    {/* <div className="content-container" style={{ paddingRight: '30px' }}>
                        <div className="step-bank-inputs uk-grid">
                            <input type="password" className="" name="cvv2" placeholder="CVV2" />
                            <input type="password" className="" name="pass2" placeholder="رمز دوم اینترنتی" />
                        </div>
                        <div style={{ marginTop: '30px', paddingRight: '10px' }}>
                            <label style={{ textAlign: 'right', display: 'block', marginBottom: '30px' }} className="uk-width-1-1">:تاریخ انقضای کارت</label>
                            <input type="number" className="step-expire-date" placeholder="00" style={{ float: 'right' }} name="expire-date-month" />
                            <input maxLength="2" type="number" className="step-expire-date" placeholder="00" style={{ float: 'right' }} name="expire-date-day" />
                        </div>
                    </div> */}
                </div>
            </div>
        );
    }
}


export default StepRenderer;