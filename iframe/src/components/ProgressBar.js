import React from 'react';
import './ProgressBar.css';
import ProgressBarStep from './ProgressBarStep';

class ProgressBar extends React.Component {
	render() {
		return (
			<div className="iframe-progress uk-height-1-1">
				<div className="step-container uk-width-1-1 uk-grid">
					<ProgressBarStep stepNumber="۵" stepName="پایان" small/>
					<ProgressBarStep stepNumber="۴" stepName="ثبت اطلاعات کارت" active/>
					<ProgressBarStep stepNumber="۳" stepName="ثبت شماره کارت" active/>
					<ProgressBarStep stepNumber="۲" stepName="ورود به اینترنت بانک" active/>
					<ProgressBarStep stepNumber="۱" stepName="قوانین" active first small/>
				</div>
			</div>
		);  
	}
}


export default ProgressBar;
