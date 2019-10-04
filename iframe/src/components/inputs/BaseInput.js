import React from 'react';
import './Input.css'
class BaseInput extends React.Component {
    state = {
        value: "",
        error: ""
    }

    componentDidMount() {
        // if (this.props.onRegister)
            this.props.onRegister(this);
    }
    componentWillUnmount() {
        // if (this.props.onUnRegister)
            this.props.onUnRegister(this);
    }
    isClean(val) {
        return false;
    }
    renderInput() {
        return;
    }

    renderError() {
        return (
            <div style={{ display: 'inline' }}>
                {this.state.error ? (
                    <div uk-tooltip={this.state.error} style={{display:'inline', position:'relative', top:'-66px', width:'20px' }}>
                        <i className="fas fa-exclamation-triangle" style={{ fontSize: '17px', marginLeft: '10px', color: 'red' }}></i>
                    </div>

                ) : (<p style={{ display: 'inline' }}></p>)
                }
            </div>
        );
    }
    render() {
        if (this.props.hidden)
            return null;
        return (
            <div>
                {this.renderInput()}
                {this.renderError()}
            </div>
        );
    }
}


export default BaseInput;
