import React from 'react';
import InfoPanel from './InfoPanel.js';
import StepForm from './StepForm.js';
import './StepRenderer.css'

class StepRenderer extends React.Component {
    render() {
        return (
            <div className="iframe-steprenderer uk-grid">
                <div className="info-panel-container uk-width-1-4@m uk-width-1-1@s">
                    <InfoPanel />
                </div>
                <div className="steprenderer-content uk-width-3-4@m uk-width-1-1@s">
                    <StepForm />
                </div>
            </div>
        );
    }
}


export default StepRenderer;