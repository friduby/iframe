import React from 'react';
import './Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container uk-width-1-1">
                <p>تمامی اطلاعات توسط
                    <img src='/bank_logos/awss.png' width="70" alt="Notron" />
                    رمزنگاری میشود و هیچ اطلاعاتی در
                    <img src='/bank_logos/gpplogo.png' width="70" alt="GoPayPro" />
                    ذخیره نمی شود.
                </p>
            </div>
        );
    }
}


export default Footer;
