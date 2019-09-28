import React from 'react';
import './MainContent.css';

class Loader extends React.Component {
	render() {
        if (this.props.failed)
            return (
                <div class="iframe-loader uk-card uk-card-default">
                    <i class="fas fa-exclamation-triangle" style={{marginTop:'10px',fontSize:'50px',color:'red'}}></i>
                    <p style={{fontSize:'20px'}}>{this.props.error || "!خطا در بارگذاری اطلاعات"}</p>
                </div>
            );
        
        if (this.props.loading)
            return (
                <div className="iframe-loader uk-card uk-card-default uk-align-center" style={{paddingTop:'30px'}} uk-spinner="ratio: 1" />
            );
        
		return (
            <div className="">{this.props.children}</div>	
		);  
	}
}


export default Loader;
