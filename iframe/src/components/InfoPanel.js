import React from 'react';
import './InfoPanel.css';
import gppLogo from '../assets/logo.png'
import bankLogo from '../assets/shahrpng.png'


class InfoPanel extends React.Component {
    render() {
        return (
            <div className="iframe-info-panel uk-width-1-3@m uk-width-1-1@s uk-grid" style={{backgroundColor:'#ddd', paddingTop:'30px', marginBottom:'0px !important'}}>
                <div className="info-bank-logo uk-width-1-1@m uk-width-1-2@s">
                    <img src={bankLogo} alt="bank-logo" />
                </div>
                <div className="info-deposit uk-width-1-2@s uk-width-1-1@m ">
                            <p style={{display:'inline', fontSize:'25px',  float:'right'}}> {this.props.info.amount} </p> <span style={{ fontSize:'25px', display:'inline'}}>ریال</span>
                </div>
                <div className="info-time-remaining">
                    <div className="time-remaining">
                        <div className="uk-width-1-1 uk-grid">
                            <p className="uk-width-1-2" style={{fontSize:'21px', fontStyle:'bold', margin:'0px', textAlign:'left'}}>7:00</p>
                            <p className="uk-width-1-2" style={{fontSize:'14px', paddingTop:'5px', textAlign:'right'}}>:زمان باقیمانده</p>
                        </div>
                        <div className="uk-width-1-1 uk-grid">
                            <p className="uk-width-1-2" style={{fontSize:'18px', fontStyle:'bold', margin:'0px', textAlign:'left'}}>John Snow</p>
                            <p className="uk-width-1-2" style={{fontSize:'14px', paddingTop:'5px', textAlign:'right'}}>:نام کاربری</p>
                        </div>
                        <div className="uk-width-1-1 uk-grid">
                            <p className="uk-width-1-2" style={{fontSize:'18px', fontStyle:'bold', margin:'0px', textAlign:'left'}}>222414</p>
                            <p className="uk-width-1-2" style={{fontSize:'14px', paddingTop:'5px', textAlign:'right'}}>:شناسه پرداخت</p>
                        </div>
                    </div>
                </div>
                <div className="info-help uk-width-2-3">
                    <div className="time-remaining uk-grid" style={{textAlign:'center'}}>
                    <p style={{textAlign:'center'}} className="uk-width-1-1@m uk-width-1-2@s">نیاز به راهنمایی دارید؟</p>
                    <img src={gppLogo} alt="gopaypro-logo" className="uk-width-1-1@m uk-width-1-2@s" />
                    </div>
                </div>
            </div>
        );
    }
}


export default InfoPanel;