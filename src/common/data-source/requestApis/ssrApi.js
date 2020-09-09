import Axios from 'axios';

let ssrApi = {
    getSsr: function () {
        const promise = new Promise(resolve => {
            Axios.get('https://api.lncn.ml/api/v1/ssr/list').then(req => {
                resolve(req.data);
            }).catch(err => {
                throw err;
            });
        });
        return promise;
    },

};

export default ssrApi;
