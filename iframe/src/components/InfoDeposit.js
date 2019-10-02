import React from 'react';
import './InfoPanel.css'

class InfoDeposit extends React.Component {
    render() {
        return (
            <div className="iframe-deposit uk-grid uk-align-center">
                <div className="" style={{margin: '0px auto', padding:'20px 65px 20px 65px'}}>
                    <p style={{display:'inline', fontSize:'25px',  float:'right'}}> {this.props.deposit} </p> <span style={{ fontSize:'25px', display:'inline'}}>تومان</span>
                </div>
            </div>
        );
    }
}

export default InfoDeposit;