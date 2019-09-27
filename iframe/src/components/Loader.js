import React from 'react';

class Loader extends React.Component {
	render() {
        if (this.props.loading)
            return (
                <div uk-spinner="ratio: 1" />
            );
		return (
            <div className="">{this.props.children}</div>	
		);  
	}
}


export default Loader;
