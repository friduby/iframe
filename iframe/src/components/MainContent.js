import React from 'react';
import './MainContent.css'
import SMSVerification from './SMSVerification';
import StepRenderer from './StepRenderer';
import Loader from './Loader';
import FetchContext from '../utils/FetchContext';
import FeedBack from './FeedBack';
import { InfoPanel } from '.';


class MainContent extends React.Component {
    state = {
        loading: false,
        sms_verify: false,
        info: {amount: 0, ref_code: "",  username: "", time: 0, bank: ''},
        step: 0,
        data: {},
        fatalError: ""
    }
    UNSAFE_componentWillMount() {
        let context = new FetchContext();
        context.fetch('init_context')
            .then(response => {
                this.steps = response.data.steps;
                this.setState({
                    sms_verify: response.data.sms_verify,
                    fatalError: response.data.error,
                    info: {amount: response.data.amount, ref_code: response.data.ref_code,
                         username: response.data.username, time:response.data.time, bank:response.data.bank},
                    loading: false
                });
            }).catch(reason => {
                this.setState({
                    failed: true
                });
            });
    }

    navigateToFirstStep() {
        this.setState({ sms_verify: false });
    }

    showNextStep(data) {
        this.setState({ step: this.state.step + 1, loading: false, data });
    }

    showLoading() {
        this.setState({ loading: true });
    }

    showError(err, ignoreError) {
        this.setState({ loading: false, failed: !ignoreError, error: err });
    }

    onTryAgain() {
        this.setState({ loading: false, failed: false });
    }

    render() {
        return (
            <div className="uk-grid">
                <InfoPanel info={this.state.info} />
                <div className="iframe-main-content uk-width-2-3@m uk-width-1-1@s">
                    <div className="iframe-main-content iframe-full-height">
                        <Loader loading={this.state.loading} failed={this.state.failed || this.state.fatalError} renderOnFailed={this.steps}
                            error={this.state.error || this.state.fatalError || "خطا در بارگذاری اطلاعات"} onTryAgain={!this.state.fatalError && this.onTryAgain.bind(this)}>
                            {this.state.sms_verify ? (
                                <SMSVerification onVerify={this.navigateToFirstStep.bind(this)} />
                            ) : (
                                    <StepRenderer data={this.state.data} steps={this.steps} step={this.state.step} showNextStep={this.showNextStep.bind(this)} showLoading={this.showLoading.bind(this)} showError={this.showError.bind(this)} />
                                )}
                        </Loader>
                    </div>
                </div>
            </div>
        );
    }
}


export default MainContent;