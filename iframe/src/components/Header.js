import React from 'react';
import ProgressBar from './ProgressBar';
import Logo from './Logo';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="iframe-header uk-navbar uk-grid">
                <div className="iframe-logo uk-width-1-3@m uk-width-1-1@s">
                    <Logo />
                </div>
                <div className="uk-width-2-3@m uk-width-1-1@s">
                    <div className="iframe-progress-bar">
                        <ProgressBar />
                    </div>
                </div>
            </div>
        );
    }
}


export default Header;
