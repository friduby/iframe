import React from 'react';
import './MainContent.css'
import SMSVerification from './SMSVerification';
import StepRenderer from './StepRenderer';
import Loader from './Loader';
import FetchContext from '../utils/FetchContext';
import ProgressBar from './ProgressBar';
import { InfoPanel } from '.';


class MainContent extends React.Component {
    state = {
        loading: true,
        sms_verify: false,
        info: {amount: 0},
        step: 0
    }
    UNSAFE_componentWillMount() {
        let context = new FetchContext();
        context.fetch('init_context')
            .then(response => {
                this.steps = response.data.steps;
                this.setState({
                    sms_verify: response.data.sms_verify,
                    info: {amount: 2000},
                    loading: false
                }, () => console.log(this.state.steps));
            }).catch(reason => {
                this.setState({
                    failed: true
                });
            });
    }

    navigateToFirstStep() {
        this.setState({ sms_verify: false });
    }

    showNextStep() {
        this.setState({ step: this.state.step + 1, loading: false });
    }

    showLoading() {
        this.setState({ loading: true });
    }

    showError(err) {
        this.setState({ loading: false, failed: true, error: err });
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
                        <Loader loading={this.state.loading} failed={this.state.failed}
                            error={this.state.error || "خطا در بارگذاری اطلاعات"} onTryAgain={this.onTryAgain.bind(this)}>
                            {this.state.sms_verify ? (
                                <SMSVerification onVerify={this.navigateToFirstStep.bind(this)} />
                            ) : (
                                    <StepRenderer steps={this.steps} step={this.state.step} showNextStep={this.showNextStep.bind(this)} showLoading={this.showLoading.bind(this)} showError={this.showError.bind(this)} />
                                )}
                        </Loader>
                    </div>
                </div>
            </div>
        );
    }
}


export default MainContent;