import React from 'react';
import './Frame.css';
import {Header, MainContent, Footer} from './components'

class Frame extends React.Component {
	render() {
		return (
			<div className="container">
				<Header />
				<MainContent />
				<Footer />
			</div>
		);
	}
}


export default Frame;
