import React from 'react';
import './InfoPanel.css'

class InfoTimeUser extends React.Component {
    render() {
        return (
            <div className="time-remaining">
                <div className="uk-width-1-1 uk-grid">
                    <p className="uk-width-1-2" style={{fontSize:'21px', fontStyle:'bold', margin:'0px', textAlign:'left'}}>7:00</p>
                    <p className="uk-width-1-2" style={{fontSize:'14px', paddingTop:'5px', textAlign:'right'}}>:زمان باقیمانده</p>
                </div>
                <div className="uk-width-1-1 uk-grid">
                    <p className="uk-width-1-2" style={{fontSize:'18px', fontStyle:'bold', margin:'0px', textAlign:'left'}}>{this.props.user}</p>
                    <p className="uk-width-1-2" style={{fontSize:'14px', paddingTop:'5px', textAlign:'right'}}>:نام کاربری</p>
                </div>
                <div className="uk-width-1-1 uk-grid">
                    <p className="uk-width-1-2" style={{fontSize:'18px', fontStyle:'bold', margin:'0px', textAlign:'left'}}>{this.props.refCode}</p>
                    <p className="uk-width-1-2" style={{fontSize:'14px', paddingTop:'5px', textAlign:'right'}}>:شناسه پرداخت</p>
                </div>
            </div>
        );
    }
}

export default InfoTimeUser;