import React from 'react';
import './InfoPanel.css';
import TimeRemaining from './TimeRemaining'
import InfoBankLogo from './InfoBankLogo.js'
import InfoSupport from './InfoSupport.js'

class InfoPanel extends React.Component {
    render() {
        return (
            <div>
                <div className="info-time-remaining">
                    <TimeRemaining />
                </div>
                <div className="info-bank-logo uk-width-2-3">
                    <InfoBankLogo />
                </div>
                <div className="info-help uk-width-2-3">
                    <InfoSupport />
                </div>
            </div>
        );
    }
}


export default InfoPanel;