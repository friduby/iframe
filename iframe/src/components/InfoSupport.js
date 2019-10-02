import React from 'react';
import logo from '../assets/logo.png'

class InfoSupport extends React.Component {
    render() {
        return (
            <div className="time-remaining uk-grid">
                <p style={{textAlign:'center'}}>نیاز به راهنمایی دارید؟</p>
                <img src={logo} alt="bank-logo" />

            </div>
        );
    }
}

export default InfoSupport;