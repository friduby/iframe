import React from 'react';
import './StepRenderer.css';
import './StepForm.css';
import ProgressBar from './ProgressBar';
import RulesInput from './inputs/RulesInput';
import Form from './Form';
import TextInput from './inputs/TextInput';
import PassInput from './inputs/PassInput';
import NumberInput from './inputs/NumberInput';


class StepRenderer extends React.Component {
    render() {
        return (
            <div>
                <ProgressBar />
                        {/* <RulesInput /> */}
                <div className="steprenderer-content uk-width-1-1">
                    {/* <Form buttonText="قبول می کنم">
                        <p style={{ textAlign: 'right', marginTop: '20px' }}>ورود به اینترنت بانک</p>
                        <div className="step-bank-inputs">
                            <TextInput name="field1" placeholder="نام کاربری اینترنت بانک"/>
                            <TextInput name="field1" placeholder="رمز عبور اینترنت بانک"/>
                            <TextInput name="field1" placeholder="کد امنیتی" />
                        </div>
                    </Form> */}
                    <Form buttonText="مرحله بعد">
                    <p style={{ textAlign: 'right', marginTop: '20px', fontSize:'22px' }}>ثبت اطلاعات کارت</p>
                        <div className="step-bank-inputs uk-grid">
                            <PassInput type="password" name="cvv2" placeholder="CVV2" />
                            <PassInput type="password" name="pass2" placeholder="رمز دوم اینترنتی" />
                        </div>
                            <NumberInput type="number" placeholder="00" name="expire-date-month" />
                            <NumberInput maxLength="2" type="number" placeholder="00" name="expire-date-day"/>
                    </Form>
                </div>
            </div>
        );
    }
}


export default StepRenderer;