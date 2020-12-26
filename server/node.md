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

pm2 delete tank															//	删除某个进程
pm2	delete all

pm2 log tank																// 查看log日志
pm2 logs																		// 	查看pm2的日志

pm2 monit																		//	查看进程/应用消耗情况
pm2	list																		// 列出所有进程

pm2	restart tank														//	重启某个进程
pm2	restart	all															//	重启所有进程

```

[使用 PM2 管理nodejs进程](https://www.cnblogs.com/liusixin/p/7007340.html)



### 跨域cors

```javascript
npm install koa2-cors --save

```









[Koa初体验](https://www.cnblogs.com/chanwahfung/p/11415675.html)



