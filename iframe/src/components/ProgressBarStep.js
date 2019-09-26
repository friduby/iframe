import React from 'react';
import './ProgressBar.css';

class ProgressBar extends React.Component {
	render() {
        let className="step-circle";
        if(this.props.active){
            className += ' active';
        }
		return (
            <div className="iframe-progress-step uk-width-1-5">
                <div className={className}>
                    <span className="step-circle-number">{this.props.stepNumber}</span>
                </div>
                <div className="step-name">{this.props.stepName}</div>
            </div>
		);  
	}
}


export default ProgressBar;
