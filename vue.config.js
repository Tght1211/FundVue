// 跨域配置
module.exports = {
/*    devServer: {
        //disableHostCheck: true,  //关闭host，用于内网穿透
        //记住，别写错了devServer//设置本地默认端口  选填
   //     port: 8080,          // 访问地址，可以不设置就是默认的8080
        proxy: {                 //设置代理，必须填
            '/api': {              //设置拦截器  拦截器格式   斜杠+拦截器名字，名字可以自己定
                // 修改服务器地址
                target: 'http://127.0.0.1:5050',     //代理的目标地址，后端的地址，要保持一致
                changeOrigin: true,              //是否设置同源，输入是的
                pathRewrite: {                   //路径重写
                    '^/api': ''                     //选择忽略拦截器里面的内容
                }
            }
        }
    }*/
    devServer: {
        port: 80,
        proxy: {
            '/api': {
                target: 'http://www.yjzs.gold:10010',  		//要请求的域名
                pathRewrite:{'^/api':''},			//通过pathRewrite重写地址，将前缀/api转为/
                ws: false,							// 是否启用websockets,加这个，好像不加也可以。
                changeOrigin: true					//开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
            }
        }
    },
}




/*
module.exports = {
    devServer: {
        port: 1211,
        open: true,
        host: '0.0.0.0',  //是否让同一局域网下的其他人访问这个项目
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:5050',
                changeOrigin: true,  //是否开启跨域
                //这种情况下，下面这个也可以省略
                pathRewrite: {
                    "^/api": ""  //查找开头为""的字符替换成空字符串
                }
            }
        },
    },
}
*/
