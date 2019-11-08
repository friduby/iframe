import React from 'react';
import BaseInput from './BaseInput';
import './Input.css'
class CardInput extends BaseInput {
    isClean() {
        return this.state.value.length == 16;
    }

    componentDidMount() {
        super.componentDidMount();
        this.setState({ value: this.props.defaultValue }, () => {
            this.props.changeCallback();
        });
    }

    onChange(e) {
        this.setState({ value: e.target.value }, () => {
            this.props.changeCallback();
        });
    }

    renderInput() {
        return (
            <div className="form-group" >
                <input onChange={this.onChange.bind(this)} type={this.props.type || "text"} className="form-control uk-input uk-width-1-1" style={{float:'right', width:'100%', marginBottom: '10px'}} name={this.props.name} maxLength="16" required value={this.state.value} />

                <label className="form-control-placeholder" for={this.props.name} style={{fontSize:'15px', marginTop:'14px'}}>: شماره کارت</label>
            </div>
        );
    }
}

export default CardInput;