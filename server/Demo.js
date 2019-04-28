/* eslint-disable no-unused-vars,eol-last,comma-spacing */
/*
2.建立的第二个server页面
 */
let user = require('./User')
console.log(`username : ${user.userName}`)

console.log(`I'm ${user.userName},I'say ${user.sayHello()}`)

// 创建服务器 本机IP地址：192.168.43.164
let http = require('http')
// 解析请求地址
let url = require('url')

let util = require('util')

let server = http.createServer((req, res) => {
  res.statuesCode = 200
  res.setHeader('Context-Type', 'text/plain; charset = utf-8')
  // res.end('Hello,Node.js')
  // 解析请求头  req就是require,req.url:就是拿到我们浏览器端访问的url地址
  // url.parse(req.url)
  // res.end(url.parse(req.url,true))
  // inspect():主要是一种调试模式，我们可以通过inspect()可以将一个对象转换成一个字符串进行输出
  /*
  如果想要获取到一个完整的url，那就直接把一整个地址都扔进去例子： res.end(util.inspect(url.parse('http://localhost:3000/demo.html?a=123#tag')))
   */
  // 第一个：字符串
  console.log('url:' + req.url)
  // 第二个：打印出来是[Object]
  console.log('parse:' + url.parse(req.url))
  // 第三个：主要是调试用，开发时很少用，方便开发和调试
  console.log('inspect:' + util.inspect(url.parse(req.url)))
  res.end(util.inspect(url.parse(req.url)))
})
server.listen(4000, 'localhost', () => { // 这里如果写的是本机Ip地址，那么在浏览器里打开的时候也得写本机的ip地址才行，如果写的是localhost，那么在浏览器里写localhost就行了
  console.log('服务器已经运行，请打开浏览器，输入:http://localhost:4000/ 来进行访问.')
})
