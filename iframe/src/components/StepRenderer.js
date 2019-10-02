import React from 'react';
import StepForm from './StepForm.js';
import StepEnterBank from './StepEnterBank.js';
import StepBankDetail from './StepBankDetail.js';
import './StepRenderer.css'

class StepRenderer extends React.Component {
    render() {
        return (
                <div className="steprenderer-content uk-width-1-1">
                    {/* <StepForm /> */}
                    {/* <StepEnterBank /> */}
                    <StepBankDetail />
                </div>
                
        );
    }
}


export default StepRenderer;