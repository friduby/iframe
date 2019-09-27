import React from 'react';
import logo from '../assets/logo.png';

class Logo extends React.Component {
	render() {
		return (
			<img src={logo} alt="logo" width="190" />
		);  
	}
}


export default Logo;
