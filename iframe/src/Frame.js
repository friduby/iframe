import React from 'react';
import './Frame.css';


import {Header, MainContent, Footer, InfoPanel} from './components'

class Frame extends React.Component {
	render() {
		return (
			<div className="container uk-grid">		
				<InfoPanel />
				<MainContent />
				<Footer />
			</div>
		);
	}
}


export default Frame;
