import React from 'react';
import Form from '../Form';
import '../SMSVerification.css'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import BaseButton from './BaseButton';
class FeedBack extends React.Component {

    render() {
        
        return (
            <div className="iframe-feedback uk-grid" style={{marginBottom:'10px'}}>
                <div className="iframe-feedback-content uk-grid">
                    <div className="iframe-feedback-success uk-width-1-1 uk-grid" style={{height:'50px',paddingTop:'13px',paddingRight:'10px'}}>
                        <div className="iframe-feedback-success-check uk-grid-1-5">
                            <div className="" style={{border:'1px solid white', borderRadius:'20px', width:'24px', height:'24px', margin:'0px auto'}}>
                                <i className="fa fa-check" style={{paddingRight:'5px', fontSize:'18px', paddingTop:'5px'}}></i>
                            </div>
                        </div>
                        <div className="iframe-feedback-success-text uk-width-4-5">
                            تراکنش با موفقیت انجام شد.
                        </div>
                    </div>
                    <div className="iframe-feedback-detail uk-width-1-1 uk-grid" style={{paddingRight:'10px', marginTop:'0px', paddingBottom:'10px'}}>
                        <div className="iframe-feedback-refcode uk-width-2-5@m uk-width-1-1@s">
                            کد پیگیری :‌۲۰۲۰۲۹۷۵۲۵ 
                        </div>
                        <div className="iframe-feedback-detail-datetime uk-width-3-5@m uk-width-1-1@s">
                            تاریخ: 
                            ۲۰/۰۲/۹۸
                            در ساعت:
                            ۲۰:۳۰:۴۵
                        </div>
                        </div>
                    <div className="iframe-feedback-rate uk-height-1-1" style={{paddingTop:'10px'}}>
                        <p style={{paddingRight:'10px'}}>
                            برای خدمات دهی هر چه بهتر گو پی پرو لطفا با امتیاز دهی هر یک از موارد زیر میزان رضایت خود را اعلام نمایید:
                        </p>
                        <div className="uk-grid"  style={{paddingRight:'10px', paddingTop:'10px'}}>
                            <div className=" uk-width-1-3@m uk-width-1-1@s">
                                <div className="iframe-feedback-rate-star" style={{fontSize:'10px', color:'#666', paddingBottom:'6px', paddingRight:'0px'}}>
                                    سرعت عملکرد سیستم
                                </div>
                                <div style={{paddingRight:'0px', fontSize:'19px', color:'#bbb', cursor:'pointer'}}>
                                <Rater total={5} rating={2} />

                                </div>
                            </div>
                            <div className="uk-width-1-3@m uk-width-1-1@s">
                                <div className="iframe-feedback-rate-star" style={{fontSize:'10px', color:'#666', paddingBottom:'6px', paddingRight:'0px'}}>
                                    امنیت سیستم
                                </div>
                                <div style={{paddingRight:'0px', fontSize:'19px', color:'#bbb', cursor:'pointer'}} >
                                <Rater total={5} rating={2} />

                                </div>
                            </div>
                            <div className="uk-width-1-3@m uk-width-1-1@s">
                                <div className="iframe-feedback-rate-star" style={{fontSize:'10px', color:'#666', paddingBottom:'6px', paddingRight:'0px'}}>
                                        رضایت مندی از گو پی پرو
                                </div>
                                <div style={{paddingRight:'0px', fontSize:'19px', color:'#bbb', cursor:'pointer'}}>
                                <Rater total={5} rating={2} />
                                </div>
                            </div>
                        </div>
                        <textarea cols="10" rows="5" charswidth="23" style={{width:'92%', backgroundColor:'#fff', marginRight:'14px', height:'90px', marginTop:'20px', padding:'10px', color:'#bbb', borderRadius:'10px'}}>
                            نظر خود را در مورد سیستم گو پی پرو ثبت نمایید.
                        </textarea>

                        
                    </div>
                </div>
            </div>
        );
    }
}


export default FeedBack;