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
        code_sent: false,
        code_error: '',
        countDown: 60,
    };
    onSubmit(form) {
        let context = new FetchContext();
        console.log(form.inputs.length);
        let phone = form.inputs[0].state.value;
        let code = form.inputs[1].state.value;


        if (!this.state.code_sent) {
            context.fetch('submit_phone', { phone })
                .then(response => {
                    if (response.data.succeed == true) {
                        this.setState({ loading: false, code_sent: true, phone: phone }, () => {
                            setInterval(() => {
                                this.setState({ countDown: this.state.countDown-1 });
                            }, 1000);
                        });
                    }
                }).catch(reason => {
                });
        }
        else {
            context.fetch('submit_verify_code', { verify_code: code })
                .then(response => {
                    if (response.data.succeed == true)
                        this.props.onVerify();
                    else {
                        this.setState({ loading: false, code_sent: true, code_error: "کد اشتباه است" });
                    }
                }).catch(reason => {
                });
        }
        this.setState({ loading: true });

    }
    onChangeNumber() {
        this.setState({ code_sent: false, phone: null });
    }
    render() {
        let buttonText = "بفرست";
        let changeNumber = "";
        let title = "لطفا شماره خود را وارد نمایید";
        if (this.state.code_sent) {
            changeNumber = <a className="uk-button" style={{ fontSize: '11px', color: 'green' }} onClick={this.onChangeNumber.bind(this)}>تغییر شماره موبایل</a>;
            buttonText = "تایید";
            title = "لطفا کد تایید ارسال شده به شماره خود را وارد کنید";
        }
        return (
            <Loader loading={this.state.loading} failed={false} >
                <div className="sms-verification uk-card uk-card-default" style={{ border: '1px solid #ddd', marginTop: '10%', padding: '20px' }}>
                    <Form buttonText={buttonText} onSubmit={this.onSubmit.bind(this)}>
                        <p className="" style={{ margin: '20px auto', borderRadius: '10px', padding: '10px' }}>{title}</p>
                        <PhoneNumberInput inputLabel=":شماره موبایل" disabled={this.state.code_sent} defaultVal={this.state.phone} maxLength="11" placeholder="0912XXXXXXXX" />
                        <Zoom duration={500}>
                            <div></div>
                            <CodeInput inputLabel=":کد تایید" hidden={!this.state.code_sent} error={this.state.code_error} maxLength="4" />
                        </Zoom>
                        <p>{this.state.countDown}</p>
                    </Form>
                    {changeNumber}
                </div>
            </Loader>
        );
    }
}


export default SMSVerification;