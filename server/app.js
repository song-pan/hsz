//载入express模块
const express = require('express')
//创建express对象
const server = express()
//加载mysql模块
const mysql = require('mysql')
//加载cors模块
const cors = require('cors')
//使用cors模块
server.use(
  cors({
    origin: ['http://127.0.0.1:8080', 'http://localhost:8080'],
  })
)
//指定监听端口号
server.listen(3000)
