import React from 'react';
import BaseInput from './BaseInput';
import './Input.css'

class SuccessInput extends BaseInput {
    isClean() {
        return this.state.value.length > 0;
    }
    onChange(e) {
        return null;
    }
    renderInput() {
        return (
            <div className="iframe-success">
                <div className="iframe-success-circle">
                    <i className="fa fa-check"></i>    
                </div>
                <div className="">
                    <p style={{color:'green', fontSize:'30px', marginTop:'14px', fontWeight:'bold', marginBottom:'20px'}}>تراکنش موفق</p>  
                    <p style={{ fontSize:'17px', marginTop:'4px', marginBottom:'4px'}}> <span style={{marginRight:'10px'}}>2002929</span>:کد پیگیری</p>  
                    <p style={{ fontSize:'17px', marginTop:'4px', marginBottom:'4px'}}> <span style={{marginRight:'10px'}}>۱۳۹۸/۰۶/۰۴</span>:تاریخ</p>  
                    <p style={{ fontSize:'17px', marginTop:'4px', marginBottom:'50px'}}> <span style={{marginRight:'10px'}}>۲۰:۱۲:۴۵</span>:ساعت</p>  
                </div>
                
            </div>
        );
    }
}

export default SuccessInput;