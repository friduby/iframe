import React from 'react';
import PhoneNumberInput from './inputs/PhoneNumberInput';
import BaseInput from './inputs/BaseInput';
import BaseButton from './inputs/BaseButton';
import './Form.css';

class Form extends React.Component {
    state = {
        valid: false
    }
    constructor() {
        super();
        this.inputs = [];
    }

    isValid() {
        let v = true;
        this.inputs.forEach(child => {
            if (!child.isClean() && !child.props.hidden)
                v = false;
        });
        return v;
    }
    validateAndSubmit(e) {
        e.preventDefault();
        const children = this.props.children;
        if (this.isValid() && this.props.onSubmit)
            this.props.onSubmit(this);
    }

    onRegister(child) {
        this.inputs.push(child);
    }
    onUnRegister(child) {
        delete this.inputs[this.inputs.indexOf(child)];
    }
    handleChilds(children) {
        return React.Children.map(children, (child, index) => {
            if (child.props.children instanceof Array) {
                let childs = this.handleChilds(child.props.children);
                return React.cloneElement(child, child.props, childs);
            }
            if (!(child.type.prototype instanceof BaseInput)) // if its not an input
                return child;
            return React.cloneElement(child, {
                index,
                onRegister: this.onRegister.bind(this),
                onUnRegister: this.onUnRegister.bind(this),
                changeCallback: this.onInputsChange.bind(this),
                form: this
            });
        });
    }

    onInputsChange() {
        this.setState({ valid: this.isValid() });
    }

    render() {
        const children = this.handleChilds(this.props.children);
        let submitButton = (<div className="uk-width-1-1 iframe-full-height" style={{ position: 'relative', top: '5px' }}>
            <BaseButton type="submit" value={this.props.buttonText} disabled={!this.state.valid} />
        </div>);
        if (this.props.hideButton)
            submitButton = null;
        return (
            <form onSubmit={this.validateAndSubmit.bind(this)} className="iframe-full-height" style={{ paddingBottom: '10px' }}>
                {children}
                {submitButton}
                <br />
                <br />
                <div style={{ clear: 'both' }}></div>
            </form>
        );
    }
}


export default Form;
