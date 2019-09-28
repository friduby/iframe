
class FetchContext {
    getUrl() {
        let ref_code = window.location.pathname.split('/').reverse()[0];
        return `http://localhost:8000/api/iframe_context/${ref_code}`;
    }
	fetch(): Promise {
        const axios = require('axios');
        return axios.post(this.getUrl());
    }
}


export default FetchContext;
