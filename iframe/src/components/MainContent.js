import React from 'react';
import SMSVerification from './SMSVerification';

class MainContent extends React.Component {
    render() {
        return (
            <div style={{margin: "40px", border: "2px solid black", height:"62%"}}>
                <h2>MainContent</h2>
                <SMSVerification />
                {/* <StepRenderer /> */}
            </div>
        );
    }
}


export default MainContent;