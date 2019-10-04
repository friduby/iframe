import React from 'react';
import './ProgressBar.css';
import ProgressBarStep from './ProgressBarStep';

class ProgressBar extends React.Component {
	render() {
		return (
			<div className="uk-width-1-1">
				<div className="iframe-progress-bar"></div>
				<div className="iframe-progress uk-height-1-1">
					<div className="step-container uk-width-1-1 uk-grid">
						<ProgressBarStep stepNumber="۵" stepName="پایان" small num={this.props.steps.length+1}/>
						{this.props.steps.reverse().map((step, i) => {
							return <ProgressBarStep num={this.props.steps.length+1} small stepNumber="۴" stepName={step.title} active={i >= this.props.steps.length - this.props.step - 1} first={i == this.props.steps.length - 1} />;
						})}
						{/* {/* <ProgressBarStep stepNumber="۴" stepName="ثبت اطلاعات کارت" active /> */}
						{/* <ProgressBarStep stepNumber="۳" stepName="ثبت شماره کارت" active />
						<ProgressBarStep stepNumber="۲" stepName="ورود به اینترنت بانک" active />
						<ProgressBarStep stepNumber="۱" stepName="قوانین" active first small /> */}
					</div>
				</div>
			</div>
		);
	}
}


export default ProgressBar;
