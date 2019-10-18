import React from 'react';
import './MainContent.css';
import './FeedBack.css';
import BaseButton from '../components/inputs/BaseButton'

class Loader extends React.Component {
    state = {
        valid: false
    }
    render() {
        
        if (this.props.failed)
            return (
                // <div>
                //     <div class="iframe-loader uk-card uk-card-default" style={{ textAlign: 'center', marginTop: '120px' }}>
                //         <i class="fas fa-exclamation-triangle" style={{ margin: '10px auto', fontSize: '50px', color: 'red' }}></i>
                //         <p style={{ fontSize: '20px', direction: 'rtl' }}>{this.props.error || "!خطا در بارگذاری اطلاعات"}</p>
                //         {this.props.onTryAgain && this.props.renderOnFailed &&
                //             <a onClick={this.props.onTryAgain}>بازگشت</a>
                //         }
                //     </div>
                //     {this.props.renderOnFailed &&
                //         <div className="uk-hidden">{this.props.children}</div>
                //     }
                // </div>
                <div className="iframe-feedback uk-grid" style={{border:'1px solid #ddd'}}>
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
                        <div className="iframe-feedback-detail uk-width-1-1 uk-grid" style={{height:'40px' ,paddingRight:'10px', marginTop:'0px'}}>
                            <div className="iframe-feedback-refcode uk-width-2-5">
                                کد پیگیری :‌۲۰۲۰۲۹۷۵۲۵ 
                            </div>
                            <div className="iframe-feedback-detail-datetime uk-width-3-5">
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
                                    <div style={{paddingRight:'0px', fontSize:'19px', color:'#bbb'}}>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                </div>
                                <div className="uk-width-1-3@m uk-width-1-1@s">
                                    <div className="iframe-feedback-rate-star" style={{fontSize:'10px', color:'#666', paddingBottom:'6px', paddingRight:'0px'}}>
                                        امنیت سیستم
                                    </div>
                                    <div style={{paddingRight:'0px', fontSize:'19px', color:'#bbb'}}>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                </div>
                                <div className="uk-width-1-3@m uk-width-1-1@s">
                                    <div className="iframe-feedback-rate-star" style={{fontSize:'10px', color:'#666', paddingBottom:'6px', paddingRight:'0px'}}>
                                         رضایت مندی از گو پی پرو
                                    </div>
                                    <div style={{paddingRight:'0px', fontSize:'19px', color:'#bbb'}}>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                </div>
                            </div>
                            <textarea cols="10" rows="5" charswidth="23" style={{width:'92%', backgroundColor:'#fff', marginRight:'14px', height:'90px', marginTop:'20px', padding:'10px', color:'#bbb', borderRadius:'10px'}}>
                                نظر خود را در مورد سیستم گو پی پرو ثبت نمایید.
                            </textarea>

                            <div style={{width:'90%', margin:'0px auto', position:'relative', top:'15px'}}>
                                <BaseButton type="submit" value="ثبت نظر" disabled={this.state.valid} />
                            </div>
                        </div>
                    </div>
                </div>
            );

        if (this.props.loading)
            return (
                <div className="iframe-loader uk-card uk-card-default uk-align-center" style={{ paddingTop: '30px', textAlign: 'center', marginTop: '25%' }} uk-spinner="ratio: 1" />
            );

        return (
            <div className="iframe-full-height">{this.props.children}</div>
        );
    }
}


export default Loader;
