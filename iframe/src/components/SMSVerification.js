import React from 'react';
import Form from './Form';
import './SMSVerification.css'
import PhoneNumberInput from './inputs/PhoneNumberInput';
import Zoom from 'react-reveal/Zoom';
import Loader from './Loader';
import FetchContext from '../utils/FetchContext';
import CodeInput from './inputs/CodeInput';
class SMSVerification extends React.Component {
    state = {
        loading: false,
        phone: null,
        code_sent: false
    };
    onSubmit(form) {
        this.setState({ loading: true });
        let context = new FetchContext();
        let phone = this.state.phone || form.inputs[0].state.value;
        context.fetch('submit_phone', { phone })
            .then(response => {
                if (response.data.succeed)
                    this.setState({ loading: false, code_sent: true, phone: phone });
            }).catch(reason => {
            });
    }
    render() {
        return (
            <Loader loading={this.state.loading} failed={false} >
                <div className="sms-verification uk-card uk-card-default" style={{ border: '1px solid #ddd', marginTop: '10%', padding: '20px' }}>
                    <Form buttonText="بفرست" onSubmit={this.onSubmit.bind(this)}>
                        <p className="" style={{ margin: '20px auto', borderRadius: '10px', padding: '10px' }}>لطفا شماره خود را وارد نمایید</p>
                        <PhoneNumberInput inputLabel=":شماره موبایل" disabled={this.state.code_sent} defaultVal={this.state.phone} />
                        <Zoom>
                            <div></div>
                            <CodeInput inputLabel=":کد تایید" hidden={!this.state.code_sent} />
                        </Zoom>
                    </Form>
                </div>
            </Loader>
        );
    }
}


export default SMSVerification;