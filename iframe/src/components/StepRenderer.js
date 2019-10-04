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


class StepRenderer extends React.Component {
    componentDidMount() {
        if (this.props.step == 0) {
            let context = new FetchContext();
            context.fetch('start_payment').then(() => {

            });
        }

        console.log('step is ' + this.props.step);
    }

    UNSAFE_componentWillMount() {
        this.steps = this.props.steps.slice(0);
    }

    goToNextStep(form) {
        let context = new FetchContext();
        let data = {};
        for (let i = 0; i < form.inputs.length; i++) {
            data[form.inputs[i].props.fieldName] = form.inputs[i].state.value;
        }

        console.log(data);
        context.fetch('submit_step', data);

        this.props.showLoading();
        this.poolInterval = setInterval(this.poolNextStep.bind(this), 1000);
    }

    poolNextStep() {
        let context = new FetchContext();
        context.fetch('pool_step', { step: this.props.step }).then((response) => {
            if (response.data.status == 'done') {
                this.props.showNextStep();
                clearInterval(this.poolInterval);
            }
            else if (response.data.status == 'failed') {
                this.props.showError(response.data.error);
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
                    <Form buttonText="ادامه" onSubmit={this.goToNextStep.bind(this)}>
                        {this.steps[this.props.step].inputs.map((input, i) => {
                            switch (input.type) {
                                case "rules":
                                    return <RulesInput fieldName="rules" />
                                case "text":
                                    return <TextInput fieldName={input.field_name} name={input.name} placeholder={input.name} />
                                case "password":
                                    return <PassInput fieldName={input.field_name} name={input.name} placeholder={input.name} />
                                case "captcha":
                                    return <CaptchaInput fieldName={input.field_name} name={input.name} placeholder={input.name} />
                                default:
                                    return null;
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