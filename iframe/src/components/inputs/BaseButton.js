import React from 'react';
import '../Form.css';
class BaseButton extends React.Component {
	render() {
		return (
			<button className="uk-button uk-button-primary uk-margin-small-top" style={{borderRadius:'5px', fontSize: '19px'}} type={this.props.type}>{this.props.value}</button>
		);  
	}
}


export default BaseButton;
