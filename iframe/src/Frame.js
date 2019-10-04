import React from 'react';
import './Frame.css';


import {MainContent, Footer, InfoPanel} from './components'

class Frame extends React.Component {
	render() {
		return (
			<div className="container uk-grid ">		
				<MainContent />
				<Footer />
			</div>
		);
	}
}


export default Frame;
