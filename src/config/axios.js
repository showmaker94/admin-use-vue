import axios from 'axios';
import qs from 'qs';
axios.defaults.baseURL = 'http://192.168.200.200:8080/';
//请求拦截器
axios.interceptors.request.use(config => {

  config.headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }

  let paramsMD5 = MD5(config.data);
  config.data = qs.stringify(config.data);
  // 配置token
  // if(token){
  //   config.token = {'token':token}
  // }
  return config
}, error => {
  return Promise.reject(error)
})

//响应拦截器即异常处理
axios.interceptors.response.use(response => {
  // 根据后端接口code执行操作
  switch (response.data.err) {
    //处理共有的操作
  }
  return response
}, error => {
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        error.message = '错误请求'
        break;
      case 401:
        error.message = '未授权，请重新登录'
        break;
      case 403:
        error.message = '拒绝访问'
        break;
      case 404:
        error.message = '请求错误,未找到该资源'
        break;
      case 405:
        error.message = '请求方法未允许'
        break;
      case 408:
        error.message = '请求超时'
        break;
      case 500:
        error.message = '服务器端出错'
        break;
      case 501:
        error.message = '网络未实现'
        break;
      case 502:
        error.message = '网络错误'
        break;
      case 503:
        error.message = '服务不可用'
        break;
      case 504:
        error.message = '网络超时'
        break;
      case 505:
        error.message = 'http版本不支持该请求'
        break;
      default:
        error.message = `连接错误${error.response.status}`
    }
  } else {
    error.message = "连接到服务器失败"
  }
  return Promise.resolve(error.response)
})

export default {
  // get请求
  get(url, param = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
          params: param
        })
        .then(res => {
          resolve(res)
        }, error => {
          reject(error)
        })
    })
  },
  // post请求
  post(url, param = {}) {
    return new Promise((resolve, reject) => {
      axios.post(

        url,
        param
      ).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  },
  // put请求
  put(url, param = {}) {
    return new Promise((resolve, reject) => {
      axios.put(url, param)
        .then(response => {
          resolve(response)
        }, error => {
          reject(error)
        })
    })
  },
  // delete
  delete(url, param = {}) {
    return new Promise((resolve, reject) => {
      axios.delete(url, param)
        .then(response => {
          resolve(response)
        }, error => {
          reject(error)
        })
    })
  }
}
