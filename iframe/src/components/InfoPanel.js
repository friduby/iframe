import React from 'react';
import './InfoPanel.css';
import InfoTimeUser from './InfoTimeUser'
import InfoBankLogo from './InfoBankLogo.js'
import InfoDeposit from './InfoDeposit.js'
import InfoSupport from './InfoSupport.js'

class InfoPanel extends React.Component {
    render() {
        return (
            <div className="iframe-info-panel uk-width-1-3@m uk-width-1-1@s" style={{backgroundColor:'#ddd', paddingTop:'30px', marginBottom:'0px !important'}}>
                <div className="info-bank-logo uk-width-2-3">
                    <InfoBankLogo />
                </div>
                <div className="info-deposit">
                    <InfoDeposit deposit="۲۰۰۰۰"/>
                </div>
                <div className="info-time-remaining">
                    <InfoTimeUser  user="John Snow" refCode="c32ya34" />
                </div>
                <div className="info-help uk-width-2-3">
                    <InfoSupport />
                </div>
            </div>
        );
    }
}


export default InfoPanel;