import React from 'react';
import './MainContent.css'
import SMSVerification from './SMSVerification';
import StepRenderer from './StepRenderer';
import Loader from './Loader';

class MainContent extends React.Component {
    state = {
        loading: true,
        sms_verify: false
    }
    componentWillMount() {
        console.log('requesting shit');
        const axios = require('axios');
        let ref_code = window.location.pathname.split('/').reverse()[0];
        axios.post(`http://localhost:8000/api/iframe_context/${ref_code}`).
            then(response => {
                this.setState({
                    sms_verify: response.data.sms_verify,
                    loading: false
                });
            });
    }
    render() {
        return (
            <div className="iframe-main-content" style={{}}>
                {this.state.sms_verify ? (
                    <Loader loading={this.state.loading}>
                        <SMSVerification />
                    </Loader>
                ) : (
                    <Loader loading={this.state.loading}>
                        <StepRenderer />
                    </Loader>
                    )}
            </div>
        );
    }
}


export default MainContent;