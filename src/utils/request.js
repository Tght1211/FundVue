import axios from 'axios'
import router from "../router/index"

const request = axios.create({
    baseURL: '/api',  // 注意！！ 这里是全局统一加上了 '/api' 前缀，也就是说所有接口都会加上'/api'前缀在，页面里面写接口的时候就不要加 '/api'了，否则会出现2个'/api'，类似 '/api/api/user'这样的报错，切记！！！
    timeout: 5000,
    // withCredentials: true,//是否支持跨域
})

// request 拦截器
// 可以自请求发送前对请求做一些处理
// 比如统一加token，对请求参数统一加密
request.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json;charset=utf-8';

    // 取出sessionStorage里面缓存的用户信息
    if (sessionStorage.getItem("tokenLR") == "yjzs") {
        console.log("登录注册的请求1")
        return config
    }else if (sessionStorage.getItem("access") == null && sessionStorage.getItem("tokenLR") != "yjzs") {
        // 
      //  alert("登录过期,请刷新页面"+sessionStorage.getItem("tokenLR")+sessionStorage.getItem("access"))
        router.push('/login') // 后面再写
        //   this.$router.push('/login')  无用
        console.log("没有access")
        sessionStorage.clear();
        return config
    } else {
        if (sessionStorage.getItem("access") == null) {
            console.log("登录注册的请求2")
            return config
        } else {
            config.headers['token'] = JSON.parse(sessionStorage.getItem("access")).accessToken;  // 设置请求头
            return config
        } 
    }
}, error => {
    return Promise.reject(error)
});

// response 拦截器
// 可以在接口响应后统一处理结果
request.interceptors.response.use(
    response => {
        let res = response.data;
        // 如果是返回的文件
        if (response.config.responseType === 'blob') {
            return res
        }
        // 兼容服务端返回的字符串数据
        if (typeof res === 'string') {
            res = res ? JSON.parse(res) : res
        }
        //验证token
        if (res.code === 401) {
            sessionStorage.clear();//清除缓存，这个起作用
            //this.$router.push('/login')  无用
            console.error("过期了")
            router.push('/login') // 返回登录
            this.$message({
                type: "error",
                message: "登录过期，请重新登录"
            })
        }

        return res;
    },
    error => {

        // 
        if (error.response) {
            if (error.response.status === 401) {
                //登录过期
                console.log('err' + error);
                sessionStorage.clear();//清除缓存，这个起作用
                router.push('/login') // 返回登录
                console.error("请重新登录")
                this.$message({
                    type: "error",
                    message: "登录过期，请重新登录"
                })
            } else {
                this.$message({
                    type: "error",
                    message: "系统发生错误"
                })
            }
        } else {
            return Promise.reject(error)
        } 
    }
)


export default request

