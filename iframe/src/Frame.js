import React from 'react';
import './Frame.css';
import {Header, LeftSideBar, MainContent, Footer} from './components'

class Frame extends React.Component {
	render() {
		return (
			<div className="">
				<Header />
				<LeftSideBar />
				<MainContent />
				<Footer />
			</div>
		);
	}
}


export default Frame;
