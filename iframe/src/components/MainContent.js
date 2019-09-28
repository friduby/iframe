import React from 'react';
import './MainContent.css'
import SMSVerification from './SMSVerification';
import StepRenderer from './StepRenderer';
import Loader from './Loader';
import FetchContext from '../utils/FetchContext';

class MainContent extends React.Component {
    state = {
        loading: true,
        sms_verify: false
    }
    UNSAFE_componentWillMount() {
        let context = new FetchContext();
        context.fetch()
            .then(response => {
                this.setState({
                    sms_verify: response.data.sms_verify,
                    loading: false
                });
            }).catch(reason => {
                this.setState({
                    failed: true
                });
            });
    }
    render() {
        return (
            <div className="iframe-main-content" style={{}}>
                <Loader loading={this.state.loading} failed={this.state.failed}>
                {this.state.sms_verify ? (
                        <SMSVerification />
                ) : (
                        <StepRenderer />
                    )}
                </Loader>
            </div>
        );
    }
}


export default MainContent;