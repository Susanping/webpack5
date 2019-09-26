let button = document.createElement('button');
button.innerHTML='点我'
button.addEventListener('click',event=>{
    import('./hello.js').then(result=>{
        alert(result.default)
    })
})
document.body.appendChild(button);
// 1 如果遇到了 import 会把这个import 的模块单独放到一个代码块里，这个代码块会单独生成一个文件
// 2 首次加载的时候只需要加载main.js,当遇到import 语句的时候，会向服务器发送一个jsonp请求，请求被分割出去异步代码，
//然后合并到原来modules,然后去加载新的模块，并且把模块的exports导出对象后传递