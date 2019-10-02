import React from 'react';
import BaseInput from './BaseInput';


class RulesInput extends BaseInput {
    isClean() {
        this.setState({ error: 'Shit' });
    }
    onChange(e) {
        this.setState({ value: e.target.value });
    }
    renderInput() {
        return (
            <div className="content-container">
                <p>قوانین و شرایط استفاده</p>
                <div className="iframe-rules">
                    this is the ruless
                </div>

                <div style={{ float: 'right', marginRight: '60px', marginTop: '10px', marginBottom: '30px', flexDirection: 'row' }}>
                    <label>.قوانین فوق را مطالعه کردم و با آن موافق می باشم</label>
                    <input className="uk-checkbox" type="checkbox" style={{ direction: 'rtl', marginLeft: '10px' }} onChange={this.onChange}></input>
                </div>
            </div>
        );
    }
}

export default RulesInput;