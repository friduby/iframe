import React from 'react';
import Form from './Form';
import './SMSVerification.css'
import PhoneNumberInput from './inputs/PhoneNumberInput';

class SMSVerification extends React.Component {
    render() {
        return (
            <div className="sms-verification uk-card uk-card-default" style={{border:'1px solid #ddd'}}>
                <Form buttonValue="بفرست">
                    <p className="" style={{margin:'20px auto', borderRadius:'10px', padding:'10px'}}>لطفا شماره خود را وارد نمایید</p>
                    <PhoneNumberInput inputLabel=":شماره موبایل"/>
                </Form>
            </div>
        );
    }
}


export default SMSVerification;