## js缓存问题

在chrome浏览器内，Network中Size通常有三种转态

    1.from memory cache
    2.from disk cache
    3.资源本身的大小(如：1.5k)

Status一般为200与304

在缓存状态下，css一般为from disk cache， 而脚本，字体，图片为from memory cache


### ETag

ETag 令牌

第一次进入页面，请求头里Pragma: no-cache，reponse为带有ETag, 第二次刷新进入请求头里会加上If-None-Match: "5d887f11-45e0", 显示为304请求

### Provisional headers are shown

正常情况下请求头里会有request的参数，当请求走缓存（memory,cache）存在Provisional headers are shown

参考文件

1. [from memory cache与from disk cache详解](https://blog.csdn.net/lianxin19900610/article/details/82417233)
2. [初识HTTP缓存-ETag](https://www.jianshu.com/p/3e2afe089e11)