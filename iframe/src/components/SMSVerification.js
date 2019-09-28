import React from 'react';
import Form from './Form';
import PhoneNumberInput from './inputs/PhoneNumberInput';

class SMSVerification extends React.Component {
    render() {
        return (
            <div className="uk-card uk-card-default">
                <h2>SMSVerification</h2>
                <Form>
                    <p>This is the sms form</p>
                    <PhoneNumberInput />
                    <PhoneNumberInput />
                </Form>
            </div>
        );
    }
}


export default SMSVerification;