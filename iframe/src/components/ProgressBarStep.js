import React from 'react';
import './ProgressBar.css';

class ProgressBar extends React.Component {
	render() {
        let className="step-circle";
        let circle="";
        let stepName = "step-name"
        let nodeClassName = `iframe-progress-step uk-width-1-${this.props.num}`;
        if(this.props.active){
            className += ' active';
        }
        let lineClassName="iframe-steps-line";
        if(this.props.active){
            lineClassName += ' active';
        }
        if(this.props.first){
            lineClassName += ' small-width';
        }
        if(this.props.active){
            circle = <i className="fa fa-check" style={{position:'relative', top:'5px', left:'6px', color:'white'}}></i>;
        }
        else{
            circle = <div className="step-circle-number"></div>;
        }
        if(this.props.small){
            stepName += " step-name-small";
        }
		return (
            <div className={nodeClassName}>
				<span className={lineClassName}></span>
                <div className={className}>
                    {circle}
                </div>
                <div className={stepName}>{this.props.stepName}</div>
            </div>
		);  
	}
}


export default ProgressBar;
