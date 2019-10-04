import React from 'react';
import './MainContent.css'
import SMSVerification from './SMSVerification';
import StepRenderer from './StepRenderer';
import Loader from './Loader';
import FetchContext from '../utils/FetchContext';
import ProgressBar from './ProgressBar';


class MainContent extends React.Component {
    state = {
        loading: true,
        sms_verify: false,
        steps:[],
        step:1
    }
    UNSAFE_componentWillMount() {
        let context = new FetchContext();
        context.fetch('init_context')
            .then(response => {
                this.setState({
                    sms_verify: response.data.sms_verify,
                    steps: response.data.steps,
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

    render() {
        return (
            <div className="iframe-main-content uk-width-2-3@m uk-width-1-1@s">
                <div className="iframe-main-content">
                    {/* chera das mizani code o */}
                    <Loader loading={this.state.loading} failed={this.state.failed}>
                    {!this.state.sms_verify ? (
                        <SMSVerification onVerify={this.navigateToFirstStep.bind(this)} />
                        ) : (
                            <StepRenderer steps={this.state.steps} step={this.state.step} />
                        )}
                    </Loader>
                </div>
            </div>
        );
    }
}


export default MainContent;