import React from 'react';
import './MainContent.css'
import SMSVerification from './SMSVerification';
import StepRenderer from './StepRenderer';

class MainContent extends React.Component {
    render() {
        return (
            <div className="iframe-main-content" style={{}}>
                {/* <SMSVerification /> */}
                <StepRenderer />
            </div>
        );
    }
}


export default MainContent;