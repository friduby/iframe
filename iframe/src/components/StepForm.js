import React from 'react';
import './StepForm.css'

class StepForm extends React.Component {
    render() {
        return (
            <div className="content-container">
                <p>قوانین و شرایط استفاده</p>
                <div className="iframe-rules">
                </div>
                
                <div style={{float:'right', marginRight:'60px', marginTop: '10px', marginBottom:'30px', flexDirection:'row'}}>
                    <label>.قوانین فوق را مطالعه کردم و با آن موافق می باشم</label>
                    <input className="uk-checkbox" type="checkbox" style={{direction:'rtl', marginLeft:'10px'}}></input>
                </div>
                <button type="button" className="uk-button" style={{width:'80%', padding:'6px 10px 6px 10px', marginLeft:'55px', borderRadius:'15px', backgroundColor:'rgb(59, 191, 85)', color:'white'}}>قوانین را قبول دارم</button>
            </div>
        );
    }
}

export default StepForm;