import React from 'react';

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
    isClean() {
        return false;
    }
    renderInput() {
        return;
    }
    renderError() {
        return (
            <div style={{ display: 'inline' }}>
                {this.state.error ? (

                    <div uk-tooltip={this.state.error} style={{ display: 'inline' }}>
                        <i class="fas fa-exclamation-triangle" style={{ fontSize: '17px', marginLeft: '10px', paddingTop: '2px', color: 'red' }}></i>
                    </div>

                ) : (<p style={{ display: 'inline' }}></p>)
                }
            </div>
        );
    }
    render() {
        return (
            <div>
                {this.renderInput()}
                {this.renderError()}
            </div>
        );
    }
}


export default BaseInput;
