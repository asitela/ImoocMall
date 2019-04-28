/* eslint-disable eol-last,no-unused-vars,no-multi-spaces */
/*
5.建立的第五个server页面
client虽然被称为客户端，但是他我们前端是两回事，因为node.js本身是个服务端的语言。
之所以node.js内部又分为客户端和服务端，是因为我们Node.js本身可以提供一种服务可以被别人调用。
那么被别人调用呢，我们就称之为它为服务端。
但是我们有的时候也会有中需要，我们的底层服务是在别的服务器上搭建的，Node.js需要去调用
其他的服务。因此我们把这种方式就称之为客户端。它只是一种说法，是相对而言的。
这里就模拟一下，调用慕课网的接口：
 */
let http = require('https')
// 定义一个util模块来，可以通过inspect()来进行调试
let util = require('util')
http.get('https://www.imooc.com/index/getstarlist', function (res) {
  let data = ''  // 用来接收返回结果
  res.on('data', function (chunk) { // 这是接收数据变化用的，no('data',function()) 监听数据的接收，只要有数据接收过来，传递过来，function(chunk)里面就可以拿到
    data += chunk // 拿到后把这个变量给++，客户端是通过这中方式来获取数据的，它并不能一次性地接受所有的数据，它需要有个监听的过程，不断地把这个数据进行累加
  })
  res.on('end', function () { // 最后还需要去监听一下end
    try {
      let result = JSON.parse(data) // 用json把data进行转换，因为data是个字符串，我们需要把它转换为个对象来反到我们的客户端，反到我们前端，来给前端进行调用
      // 调试用的
      util.inspect(result)
      // 因为没有前端，所以这里打印一下
      // console.log('result:' + result.msg)
      console.log('result:' + util.inspect(result))
    } catch (e) {
      console.log(e.message)
    }
  }).on('error', (e) => {
    console.log(`错误： ${e.message}`)
  })
})
