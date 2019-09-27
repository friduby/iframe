import React from 'react';
import './InfoPanel.css'
import logo from '../assets/logo.png'

class InfoBankLogo extends React.Component {
    render() {
        return (
            <div className="time-remaining uk-grid">
                <img src={logo} alt="bank-logo" />
            </div>
        );
    }
}

export default InfoBankLogo;