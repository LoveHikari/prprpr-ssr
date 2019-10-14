import Axios from 'axios';

let ssrApi = {
    getSsr: function (groups) {
        const promise = new Promise(resolve => {
            Axios.get('https://api.yayoo.tk/api/Ssr',
                {
                    params: {groups: groups}
                }).then(req => {
                resolve(req.data.data);
            }).catch(err => {
                throw err;
            });
        });
        return promise;
    }

};

export default ssrApi;
