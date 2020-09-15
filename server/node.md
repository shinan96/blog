### node



### pm2命令

> pm2 是一个带有负载均衡功能的Node应用的进程管理器。

```
sudo su
cnpm i pm2 -g
pm2 start index.js --name tank							// pm2 pro
pm2 start index.js --name tack --watch 			// pm2 wathc监听，dev
pm2 stop tank
pm2 stop all

pm2 log tank																// 查看log日志
```

[使用 PM2 管理nodejs进程](https://www.cnblogs.com/liusixin/p/7007340.html)



### 跨域cors

```
npm install koa2-cors --save

```

[Koa初体验](https://www.cnblogs.com/chanwahfung/p/11415675.html)



