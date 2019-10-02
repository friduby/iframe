import React from 'react';
import PhoneNumberInput from './inputs/PhoneNumberInput';
import BaseInput from './inputs/BaseInput';
import BaseButton from './inputs/BaseButton'
class Form extends React.Component {
    constructor() {
        super();
        this.inputs = [];
    }
    validateAndSubmit(e) {
        e.preventDefault();
        const children = this.props.children;
        let isValid = true;
        this.inputs.forEach(child => {
            if (!child.isClean())
                isValid = false;
        });
        console.log(isValid);
        if (isValid && this.props.onSubmit)
            this.props.onSubmit();
    }

    onRegister(child) {
        this.inputs.push(child);
    }
    onUnRegister(child) {
        delete this.inputs[this.inputs.indexOf(child)];
    }
    handleChilds(children) {
        return React.Children.map(children, (child, index) => {
            if (child.props.children instanceof Array && child.props.children.length < 3) {
                return this.handleChilds(child.props.children);
            }
            if (!(child.type.prototype instanceof BaseInput)) // if its not an input
                return child;
            return React.cloneElement(child, {
                index,
                onRegister: this.onRegister.bind(this),
                onUnRegister: this.onUnRegister.bind(this)
            });
        });
    }
    render() {
        const children = this.handleChilds(this.props.children);
        return (
            <form onSubmit={this.validateAndSubmit.bind(this)}>
                {children}
                <BaseButton  type="submit" value={this.props.buttonText} />
            </form>
        );
    }
}


export default Form;
