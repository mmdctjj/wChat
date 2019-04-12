import axios from 'axios'

let cancel, promiseArr = {}
const CancelToken = axios.CancelToken;
//http request 拦截器
axios.interceptors.request.use(
    config => {
        // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
        config.data = JSON.stringify(config.data);
        config.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        // if(token){
        //   config.params = {'token':token}
        // }
        return config;
    },
    error => {
        return Promise.reject(err);
    }
);


//http response 拦截器
axios.interceptors.response.use(
    response => {
        if (response.data.errCode == 2) {
            router.push({
                path: "/login",
                querry: { redirect: router.currentRoute.fullPath }//从哪个页面跳转
            })
        }
        return response;
    },
    error => {
        return Promise.reject(error)
    }
)

axios.defaults.baseURL = '/api/'
//设置默认请求头
axios.defaults.headers = {
    'X-Requested-With': 'XMLHttpRequest'
}
axios.defaults.timeout = 5000

export default {
    //get请求
    get(url, param) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url,
                params: param,
                cancelToken: new CancelToken(c => {
                    cancel = c
                })
            }).then(res => {
                resolve(res)
            })
        })
    },
    //post请求
    post(url, param) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url,
                data: param,
                cancelToken: new CancelToken(c => {
                    cancel = c
                })
            }).then(res => {
                resolve(res)
            })
        })
    }
}