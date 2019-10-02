import React from 'react';

class BaseButton extends React.Component {
	render() {
		return (
			<button className="uk-button uk-button-primary uk-margin-small" style={{borderRadius:'5px'}} type={this.props.type}>{this.props.value}</button>
		);  
	}
}


export default BaseButton;
