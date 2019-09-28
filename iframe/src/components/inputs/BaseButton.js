import React from 'react';

class BaseButton extends React.Component {
	render() {
		return (
			<button className="uk-button uk-button-default" type={this.props.type}>{this.props.value}</button>
		);  
	}
}


export default BaseButton;
