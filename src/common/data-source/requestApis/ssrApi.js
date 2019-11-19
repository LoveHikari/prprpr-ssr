import Axios from 'axios';

let ssrApi = {
    getSsr: function (pageIndex, pageSize, groups = "") {
        const promise = new Promise(resolve => {
            Axios.get('https://api.prprpr.ml/api/v1/Ssr',
                {
                    params: {pageIndex, pageSize, groups}
                }).then(req => {
                resolve(req.data);
            }).catch(err => {
                throw err;
            });
        });
        return promise;
    },

};

export default ssrApi;
