import React from 'react';
import Form from './Form';
import './SMSVerification.css'
import PhoneNumberInput from './inputs/PhoneNumberInput';
import Zoom from 'react-reveal/Zoom';
import Loader from './Loader';

class SMSVerification extends React.Component {
    state = {
        loading: false
    };
    onSubmit() {
        this.setState({ loading: true });
    }
    render() {
        return (
            <Loader loading={this.state.loading} failed={false} >
                <div className="sms-verification uk-card uk-card-default" style={{ border: '1px solid #ddd' }}>
                    <Form buttonText="بفرست" onSubmit={this.onSubmit.bind(this)}>
                        <p className="" style={{ margin: '20px auto', borderRadius: '10px', padding: '10px' }}>لطفا شماره خود را وارد نمایید</p>
                        <Zoom>
                            <div></div>
                            <PhoneNumberInput inputLabel=":شماره موبایل" />
                        </Zoom>
                    </Form>
                </div>
            </Loader>
        );
    }
}


export default SMSVerification;