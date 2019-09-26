import React from 'react';
import './ProgressBar.css';
import ProgressBarStep from './ProgressBarStep';

class ProgressBar extends React.Component {
	render() {
		return (
			<div className="iframe-progress uk-height-1-1">
				<span className="iframe-steps-line"></span>
				<div className="step-container uk-width-1-1 uk-grid">
					<ProgressBarStep stepNumber="۵" stepName="مرحله۵" />
					<ProgressBarStep stepNumber="۴" stepName="مرحله۴"/>
					<ProgressBarStep stepNumber="۳" stepName="مرحله۳"/>
					<ProgressBarStep stepNumber="۲" stepName="مرحله۲"/>
					<ProgressBarStep stepNumber="۱" stepName="مرحله۱" active/>
				</div>
			</div>
		);  
	}
}


export default ProgressBar;
