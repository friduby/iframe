import React from 'react';

class Loader extends React.Component {
    state = {
        fill: 0,
        dir: 1
    }
    componentDidMount() {
        setInterval(function (){
            let dir = this.state.dir;
            if (this.state.fill < 1 && this.state.fill > 0)
            {
                let newVal = this.state.fill + 0.04*this.state.dir;
                if (newVal > 1 || newVal < 0)
                    dir = -dir;
            }
            this.setState({fill: (this.state.fill + 0.04*dir) % 1, dir:dir});
        }.bind(this), 40);
    }
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
