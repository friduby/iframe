import React from 'react';
import './StepRenderer.css';
import './StepForm.css';
import ProgressBar from './ProgressBar';
import RulesInput from './inputs/RulesInput';
import Form from './Form';
import TextInput from './inputs/TextInput';
import PassInput from './inputs/PassInput';
import FetchContext from '../utils/FetchContext';
import CaptchaInput from './inputs/CaptchaInput';
import CardInput from './inputs/CardInput';
import DateInput from './inputs/DateInput';
import SuccessInput from './inputs/SuccessInput';


class StepRenderer extends React.Component {
    state = {
        captcha: false
    }
    componentDidMount() {
        if (this.props.step == 0) {
            let context = new FetchContext();
            context.fetch('start_payment').then(() => {

            });
        }

    }

    UNSAFE_componentWillMount() {
        this.steps = this.props.steps.slice(0);
    }
    componentDidUpdate() {
        this.steps = this.props.steps.slice(0);
    }

    goToNextStep(form, refreshingCaptcha=false) {
        this.refreshingCaptcha = refreshingCaptcha;
        let context = new FetchContext();
        let data = {};
        data["captcha"] = "0";
        for (let i = 0; i < form.inputs.length; i++) {
            data[form.inputs[i].props.fieldName] = form.inputs[i].state.value;
        }

        context.fetch('submit_step', data);

        this.props.showLoading();
        this.poolInterval = setInterval(this.poolNextStep.bind(this), 1000);
    }

    poolNextStep() {
        let context = new FetchContext();
        context.fetch('pool_step', { step: this.props.step }).then((response) => {
            if (response.data.status == 'done') {
                this.props.showNextStep(response.data);
                clearInterval(this.poolInterval);
            }
            else if (response.data.status == 'failed') {
                this.props.showError(response.data.error, this.refreshingCaptcha);
                clearInterval(this.poolInterval);
            }
        });
    }

    render() {
        return (
            <div className="iframe-full-height">
                <ProgressBar steps={this.steps} step={this.props.step} />
                {/* <RulesInput /> */}
                <div className="steprenderer-content uk-width-1-1 iframe-full-height">
                    {/* <Form buttonText="ثبت اطلاعات">
                        <p style={{ textAlign: 'right'}}>ورود به اینترنت بانک</p>
                            <TextInput name="field1" placeholder="نام کاربری اینترنت بانک"/>
                            <TextInput name="field1" placeholder="رمز عبور اینترنت بانک"/>
                            <CaptchaInput />
                    </Form> */}
                    <Form buttonText="ادامه" onSubmit={this.goToNextStep.bind(this)} hideButton={this.props.step == this.props.steps.length-1}>
                        {this.steps[this.props.step].inputs.map((input, i) => {
                            switch (input.type) {
                                case "rules":   
                                    return <RulesInput fieldName="rules" />
                                case "text":  
                                    return <TextInput fieldName={input.field_name} name={input.name} placeholder={input.name} />
                                case "password":
                                    return <PassInput fieldName={input.field_name} name={input.name} placeholder={input.name} />
                                case "card_number":
                                    return <CardInput defaultValue={this.props.data.card_number} fieldName={input.field_name} name={input.name} placeholder={input.name} />
                                case "date":
                                    return (
                                        <div>
                                            <p style={{float:'right', direction:'rtl'}} className="uk-width-1-1">تاریخ انقضای کارت</p>
                                            <DateInput fieldName="month" name={input.name} placeholder="04" />
                                            <DateInput fieldName="year" name={input.name} placeholder="98" />
                                        </div>                                        
                                    )   
                                case "success":
                                    return <SuccessInput transaction_id={this.props.data.transaction_id} transaction_date={this.props.data.transaction_date}/>
                                case "captcha":
                                    if (this.props.data.captcha)
                                        return <CaptchaInput image={this.props.data.captcha} fieldName={input.field_name} name={input.name} placeholder={input.name} onRefresh={this.goToNextStep.bind(this)} />
                                default:
                                    return <div></div>;
                            }
                        })}
                        {/* <p style={{ textAlign: 'right'}}>ثبت شماره کارت</p>
                        <CardInput />
                        <CaptchaInput /> */}
                        <div style={{ clear: 'both' }}></div>

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
                <div style={{ clear: 'both' }}></div>

            </div>
        );
    }
}


export default StepRenderer;