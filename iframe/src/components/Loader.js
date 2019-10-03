import React from 'react';
import './MainContent.css';

class Loader extends React.Component {
	render() {
        if (this.props.failed)
            return (
                <div class="iframe-loader uk-card uk-card-default" style={{textAlign:'center', marginTop:'170px'}}>
                    <i class="fas fa-exclamation-triangle" style={{margin:'10px auto',fontSize:'50px',color:'red'}}></i>
                    <p style={{fontSize:'20px'}}>{this.props.error || "!خطا در بارگذاری اطلاعات"}</p>
                </div>
            );
        
        if (this.props.loading)
            return (
                <div className="iframe-loader uk-card uk-card-default uk-align-center" style={{paddingTop:'30px', textAlign:'center', marginTop:'200px'}} uk-spinner="ratio: 1" />
            );
        
		return (
            <div className="">{this.props.children}</div>	
		);  
	}
}


export default Loader;
