import React from 'react';
import BaseInput from './BaseInput';


class RulesInput extends BaseInput {
    isClean() {
        this.setState({ error: "" });
        if (!this.state.value) {
            this.setState({ error: "لطفا قوانین را مطالعه کنید" });
            return false;
        }
        return true;
    }
    onChange(e) {
        this.setState({ value: e.target.value }, () => {
            if (this.state.value)
                this.setState({ error: "" });
        });
    }
    renderInput() {
        return (
            <div className="content-container">
                <p>قوانین و شرایط استفاده</p>
                <div className="iframe-rules" style={{overflowY:'scroll'}}>
                    this is the ruless
                </div>

                <div style={{ float: 'right', marginRight: '60px', marginTop: '10px', marginBottom: '30px', flexDirection: 'row' }}>
                    <label>.قوانین فوق را مطالعه کردم و با آن موافق می باشم</label>
                    <input className="uk-checkbox" type="checkbox" style={{ direction: 'rtl', marginLeft: '10px' }} onChange={this.onChange.bind(this)}></input>
                </div>
            </div>
        );
    }
}

export default RulesInput;