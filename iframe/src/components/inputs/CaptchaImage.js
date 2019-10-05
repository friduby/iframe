import React from 'react';

class CaptchaImage extends React.Component {
    state = { count: 0 }

    componentDidMount() {
        this.updateInterval = setInterval(() => {
            this.setState({ count: this.state.count+1 });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.updateInterval);
    }

    render() { 
        let src = this.props.src + '?t=' +  (new Date).getTime();
        return <img src={src} style={{width:'50%', paddingBottom:'40px'}} width="20" />;
    }
}
 
export default CaptchaImage;