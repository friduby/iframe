import React from 'react';
import BaseInput from './BaseInput';
import './Input.css'
class PassInput extends BaseInput {
    isClean() {
        return this.state.value.length > 0;
    }
    onChange(e) {
        this.setState({ value: e.target.value }, () => {
            this.props.changeCallback();
        });
    }
    togglePassword() {
        let v = false;
        if (!this.state.visible)
            v = true;
        else
            v = false;
        this.setState({ visible: v });
    }
    onLabelClick() {
        document.getElementsByName(this.props.name)[0].select();
    }
    renderInput() {
        return (
            <div className="form-group" style={{ float: 'right' }}>
                <input onChange={this.onChange.bind(this)} type={this.state.visible ? "text" : "password"} value={this.state.value} className="form-control uk-input uk-width-1-1" style={{ float: 'right', width: '100%', display: 'block' }} name={this.props.name} />
                <label onClick={this.onLabelClick.bind(this)} className="form-control-placeholder" for={this.props.name}>{this.props.placeholder}</label>
                <div id="iframe-toggle-password" onClick={this.togglePassword.bind(this)} style={{position:'relative', top:'-45px', left:'10px', width:'17px'}}>
                    <i className="fa fa-eye"></i>
                </div>
            </div>
        );
    }
}

export default PassInput;