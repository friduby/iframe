import React from 'react';
import './InfoPanel.css'

class TimeRemaining extends React.Component {
    render() {
        return (
            <div className="time-remaining uk-grid">
                <div className="uk-width-3-4 uk-grid">
                    <p id="time-remaining-time" style={{fontSize:'16px', margin:'0px'}}>7:00</p>
                    <p style={{fontSize:'16px'}}>:زمان باقیمانده</p>
                </div>
                <i className="fa fa-clock uk-width-1-5" style={{fontSize:'30px'}}></i>
            </div>
        );
    }
}

export default TimeRemaining;