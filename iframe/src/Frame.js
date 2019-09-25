import React from 'react';
import './Frame.css';
import {Header, RightSideBar, MainContent, Footer} from './components'

class Frame extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<RightSideBar />
				<MainContent />
				<Footer />
			</div>
		);
	}
}


export default Frame;
