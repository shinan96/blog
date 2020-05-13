## js缓存问题

>  HTTP 缓存分为 2 种，一种是强缓存，另一种是协商缓存。主要作用是可以加快资源获取速度，提升用户体验，减少网络传输，缓解服务端的压力。 

### 强缓存

在chrome浏览器内，Network中Size通常有三种转态

```javascript
1.from memory cache
2.from disk cache
3.资源本身的大小(如：1.5k)
```

Status一般为200与304

在缓存状态下，css一般为from disk cache， 而脚本，字体，图片为from memory cache

### 协商缓存


#### ETag

第一次进入页面，请求头里Pragma: no-cache，reponse为带有ETag, 第二次刷新进入请求头里会加上If-None-Match: "5d887f11-45e0", 显示为304请求

### Provisional headers are shown

正常情况下请求头里会有request的参数，当请求走缓存（memory,cache）存在Provisional headers are shown



### 参考

1. [from memory cache与from disk cache详解](https://blog.csdn.net/lianxin19900610/article/details/82417233)
2. [初识HTTP缓存-ETag](https://www.jianshu.com/p/3e2afe089e11)
3. [深入理解浏览器的缓存机制](https://mp.weixin.qq.com/s/ePXc5f9YazZy6bKrMoSm7g)
4. [图解 HTTP 缓存](https://juejin.im/post/5eb7f811f265da7bbc7cc5bd)

