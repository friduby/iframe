
class FetchContext {
    getUrl() {
        let ref_code = window.location.pathname.split('/').reverse()[0];
        return `http://localhost:8000/api/iframe_context/${ref_code}`;
    }
	fetch(type,  extra_data=null): Promise {
        let data = {type, ...extra_data}
        console.log(data);
        const axios = require('axios');
        return axios.post(this.getUrl(), data);
    }
}


export default FetchContext;
