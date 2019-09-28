import React from 'react';
import PhoneNumberInput from './inputs/PhoneNumberInput';
import BaseInput from './inputs/BaseInput';

class Form extends React.Component {
    constructor() {
        super();
        this.childs = [];
    }
    validateAndSubmit(e) {
        e.preventDefault();
        const children = this.props.children;
        let isValid = true;
        this.childs.forEach(child => {
            if (!child.isClean())
                isValid = false;
        });
        console.log(isValid);
        if (isValid && this.props.onSubmit)
            this.props.onSubmit();
    }

    onRegister(child) {
        this.childs.push(child);
    }
    onUnRegister(child) {
        delete this.childs[this.childs.indexOf(child)];
    }
    render() {
        const children = React.Children.map(this.props.children, (child, index) => {
            if (!(child.type.prototype instanceof BaseInput)) // if its not an input
                return child;
            return React.cloneElement(child, {
                index,
                onRegister: this.onRegister.bind(this),
                onUnRegister: this.onUnRegister.bind(this)
            });
        });
        return (
            <form onSubmit={this.validateAndSubmit.bind(this)}>
                {children}
                <button type="submit">Submit</button>
            </form>
        );
    }
}


export default Form;
