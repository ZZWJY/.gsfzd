const express=require('express');
//引入路由器

//创建web服务器
var server=express();
server.listen(3000);
//使用路由器
//使用(挂载)的url: /user
// /user/login
server.use(express.static('public'))