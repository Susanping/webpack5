const path = require('path');
module.exports = {
    mode:'development',
    devtool:'none',
    entry:{
    //    index: './src/index.js',
    //    login:'./src/login.js'
    page1:'./src/page1.js',
    page2:'./src/page2.js',
    page3:'./src/page3.js',
    },
    // entry:'./src/index.js',
    output:{
      path:path.join(__dirname,'dist'),
      filename:'[name].js'
    },
    optimization:{
        splitChunks:{
            cacheGroups:{
                vendors:{
                   chunks:'initial',//指定分割的类型,默认3种选项 all async initial
                   name:'vendors',//给分割出去的代码块起一个名字叫vendors
                   test:/node_modules/,//如果模块ID匹配这个正则的话，就会添加一vendor代码块中
                   priority:-10 //优先级

                } ,
                commons:{
                  chunks:'initial',
                  name:'commons',
                  minSize:0,//如果模块的大小大于多少的话才需要提取
                  minChunks:2,//最少
                  priority:-20
                }
         
            }
        }
    }
}