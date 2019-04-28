/* eslint-disable no-unused-vars */
/*
3.建立的第三个server页面
创建一个服务器，但是这个页面里只能访问静态的页面
 */
// 创建服务器 本机IP地址：192.168.43.164
let http = require('http')
// 解析请求地址
let url = require('url')

// 通过fs 文件系统访问
let fs = require('fs')
let server = http.createServer((req, res) => {
  /*
  如果想要获取到一个完整的url，那就直接把一整个地址都扔进去例子： res.end(util.inspect(url.parse('http://localhost:3000/demo.html?a=123#tag')))
   */
  // 第一个：字符串
  console.log('url:' + req.url)
  // res.end(util.inspect(url.parse(req.url)))
  // 通过fs文件系统访问
  var pathname = url.parse(req.url).pathname
  console.log('file:' + pathname.substring(1))
  fs.readFile(pathname.substring(1), function (err, data) {
    if (err) {
      res.writeHead(404, {
        'Content-Type': 'text/html'
      })
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      })
      res.write(data.toString())
    }
    res.end() // 需要在文件系统内部结束读取
  })
})
server.listen(3000, 'localhost', () => { // 这里如果写的是本机Ip地址，那么在浏览器里打开的时候也得写本机的ip地址才行，如果写的是localhost，那么在浏览器里写localhost就行了
  console.log('服务器已经运行，请打开浏览器，输入:http://localhost:3000/ 来进行访问.')
})
