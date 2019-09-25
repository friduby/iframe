import React from 'react';
import ProgressBar from './ProgressBar';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div>
                <ProgressBar />
                <h2>Header</h2>
            </div>
        );
    }
}


export default Header;
