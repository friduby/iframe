import React from 'react';
import './MainContent.css';

class Loader extends React.Component {
    render() {
        if (this.props.failed)
            return (
                <div>
                    <div class="iframe-loader uk-card uk-card-default" style={{ textAlign: 'center', marginTop: '30px' }}>
                        <i class="fas fa-exclamation-triangle" style={{ margin: '10px auto', fontSize: '50px', color: 'red' }}></i>
                        <p style={{ fontSize: '17px', direction: 'rtl' }}>{this.props.error || "!خطا در بارگذاری اطلاعات"}</p>
                        {this.props.onTryAgain && this.props.renderOnFailed &&
                            <a onClick={this.props.onTryAgain}>بازگشت</a>
                        }
                    </div>
                    {this.props.renderOnFailed &&
                        <div className="uk-hidden">{this.props.children}</div>
                    }
                </div>
            );

        if (this.props.loading)
            return (
                <div className="iframe-loader uk-card uk-card-default" style={{ textAlign: 'center', marginTop: '30px' }}>
                <div className="" style={{ paddingTop: '43px', textAlign: 'center' }} uk-spinner="ratio: 1" />
                <p style={{ fontSize: '20px', direction: 'rtl' }}>لطفا منتظر بمانید</p>
                </div>
            );

        return (
            <div className="iframe-full-height">{this.props.children}</div>
        );
    }
}


export default Loader;
