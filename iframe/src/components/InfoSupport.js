import React from 'react';
import logo from '../assets/support.png'

class InfoSupport extends React.Component {
    render() {
        return (
            <div className="time-remaining uk-grid">
                <img src={logo} alt="bank-logo" />
            </div>
        );
    }
}

export default InfoSupport;