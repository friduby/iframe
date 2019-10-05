import React from 'react';
import BaseInput from './BaseInput';


class RulesInput extends BaseInput {
    constructor(props){
        super(props);
    }
    isClean() {
        this.setState({ error: "" });
        if (!this.state.value) {
            this.setState({ error: "لطفا قوانین را مطالعه کنید" });
            return false;
        }
        return true;
    }
    renderError() {
        return null;
    }
    onChange(e) {
        this.setState({ value: e.target.checked }, () => {
            if (this.state.value)
                this.setState({ error: "" });
            this.props.changeCallback();
        });

    }

    checkboxClick() {
        this.setState({ value: !this.state.value }, () =>{
            this.props.changeCallback();
        });
    }
    renderInput() {
        return (
            <div className="content-container">
                <p>قوانین و شرایط استفاده</p>
                <div className="iframe-rules" style={{ overflowY: 'scroll' }}>
                    <p className="iframe-rules-text"> ضمن خوش آمدگویی به سیستم پرداخت سریع گوپی پرو لطفا به نکات زیر توجه فرمایید </p>
                    <p className="iframe-rules-text"><b>1.</b> کاربر گرامی لطفا قبل از انجام تراکنش وارد اینترنت بانک خود شده و از صحت اطلاعات اینترنت بانک و رمز دوم خود اطمینان حاصل نمایید.</p>
                    <p className="iframe-rules-text"><b>2.</b>توصیه می شود از مرورگر های مطمئن و بروز (مانند گوگل کروم و فایرفاکس) استفاده کنید.</p>
                    <p className="iframe-rules-text"><b>3.</b> تمامی اطلاعات دادوستد شده در گوپی پرو با جدیدترین تکنولوژی رمزگزاری 256-بیتی محافظت شده و ذخیره هیچگونه اطلاعاتی صورت نمی گردد، جهت اطمینان خاطر میتوانید پس از هر تراکنش به آدرس اینترنت بانک خود مراجعه کرده و رمز عبور خود را تغییر دهید.</p>
                    <p className="iframe-rules-text"><b>4.</b> در صورت امکان از گذرواژه هاي هوشمند که ترکيبي از حروف، اعداد و نشان ها هستند براي بالابردن امنيت کار استفاده نماييد.</p>
                    <p className="iframe-rules-text"><b>5.</b>میتوانید برای استفاده از این سیستم سوای حساب اصلی بانکی خود یک حساب جدید افتتاح کرده و جهت شارژ حساب کاربری فقط از این حساب استفاده کنید.</p>
                    <p className="iframe-rules-text"><b>6.</b> نام کاربری و کلمه عبور خودتان را هیچ گاه یادداشت نکنید و تلاش کنید آن را به خاطر بسپارید و به هیچ عنوان کلمه عبور خود را در اختیار دیگران قرار ندهید.</p>
                    <p className="iframe-rules-text"><b>7.</b> در مستند الزامات ارائه خدمات گوپی پرو، در صورت عدم تطابق نام صاحب کارت با اطلاعات حساب کاربری افزایش موجودی صورت نخواهد پذیرفت.</p>
                    <p className="iframe-rules-text"><b>8.</b>در طول انجام تراکنش لطفا از رفرش صفحه و عقب گرد خودداری فرمایید.</p>
                    <p className="iframe-rules-text"><b>9.</b> چنانچه پس از اتمام تراکنش، در صورت کسر مبلغ از حساب بانکی و عدم شارژ حساب کاربریتان بلافاصله با پشتیبانی تماس گرفته و اطلاع دهید. در صورت تاخییر در اطلاع عدم شارژ حساب کاربری سایت هیچگونه مسولیتی در قبال پیگیری مشکل شما نخواهد داشت.</p>
                    <p className="iframe-rules-text"><b>10.</b> پس از انجام و اتمام كار، حتما از سیستم خارج شوید.</p>
                </div>

                <div style={{ float: 'right', marginRight: '10px', marginTop: '10px', marginBottom: '30px', flexDirection: 'row', float:'right' }}>
                    <label onClick={this.checkboxClick.bind(this)}>قوانین فوق را مطالعه کردم و با آن موافق می باشم.</label>
                    <input className="uk-checkbox" type="checkbox" style={{ direction: 'rtl', marginLeft: '10px' }} checked={this.state.value} onChange={this.onChange.bind(this)}></input>
                </div>
            </div>
        );
    }
}
export default RulesInput;