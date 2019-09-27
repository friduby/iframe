import React from 'react';
import './Footer.css'
import logo from '../assets/logo.png'

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <p>تمامی اطلاعات توسط
                    <img src={logo} width="70" alt="Notron" />
                    رمزنگاری میشود و هیچ اطلاعاتی در
                    <img src={logo} width="70" alt="GoPayPro" />
                    ذخیره نمی شود.
                </p>
            </div>
        );
    }
}


export default Footer;
