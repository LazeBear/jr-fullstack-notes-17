OSI model (5,7)

丢包
packet
[1,2,3]
[1,2]
[3,2,1]
TCP - [1,2,3]
UDP - [1,2]

TCP/IP

0.9
1.0
1.1
2 (http s) (secure) (certificate)
3

href = hypertext reference
url = uniform resource locator

<!-- <a href="https://www.google.com"> -->

https -> 443
http -> 80
mongodb -> 27017

query param
query parameters

GET - 请求数据（页面） - read
POST - 添加数据 - create
PUT - 更新 (替换) - update
DELETE - 删除 - delete
PATCH - 更新（局部）

CRUD operation (增删改查)

headers - 头文件 - metadata - 元数据 - 描述数据的数据

GET / HTTP/2
Method path protocol

HTTP/2 200
protocol status code

client
server

序列化与反序列化
serialization & deserialization

public web api -> web services

stateless - stateful

A,B

stateful
A,B != B,A

stateless
A,B = B,A

缓存数据库 redis

Restful api 设计规范

1. versioning (版本)
   example.com/api/v1
   api.example.com/v1
   example.com/v2

2. url 里，尽量使用名词（resource），尽量使用复数形式
   GET /v1/books

3. 保证 GET 不会对资源（数据）进行修改
   GET /v1/addBooks x

4. url 建议使用嵌套结构
   posts {
   comments
   }
   GET /v1/posts/:postId/comments
   GET /v1/posts/{postId}/comments

5. 注意返回数据的大小（对数据进行分页）
   1000 数据 1000 本书
   GET /v1/books -> 默认 10 个数据
   GET /v1/books?page=2&pageSize=100 -> 101-200

6. 使用恰当（正确）的状态码（status code）来表示返回的状态，结果

7. 返回 human-readable 的错误信息
   {"error":10001} x
   {"error": "invalid password"}

sequence diagram
时序图

monolith
