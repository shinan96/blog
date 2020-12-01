# nginx

## nginx安装

> 环境：linux CentOS7.2

1. ### url 安装

   * wget http://nginx.org/download/nginx-1.6.2.tar.gz   // wegt 下载url内容

   * tar zxvf nginx-1.6.2.tar.gz  //解压

   * cd nginx-1.6.2 

   * ./configure  / / 编译

   * make && make install  // 安装

2. ### yum 安装

   * yum install nginx

   * nginx 启动

```nginx
server{
    listen 80;
    server_name test.ehoo100.com;
    location / {
        root /www/test;
    }
}
```

> 注：可在/etc/nginx/conf.d配置自定义文件；  



## nginx 的命令行

```nginx
nginx 			   		// 启动
nginx -s stop			// 停止
nginx -s restart		// 重启
```


`
### Mac 安装nginx

```
brew install nginx

/usr/local/etc/nginx      安装路径

```



### 参考

- [Nginx 从入门到实践，万字详解！](https://juejin.im/post/5ea931866fb9a043815146fb)
- [搞懂Nginx，一篇文章就够了](https://mp.weixin.qq.com/s?__biz=Mzg5ODA5NTM1Mw==&mid=2247490908&idx=1&sn=1d456ed00687f8f8b424fa306a7e431c&chksm=c0669ccaf71115dca2e1df29d54ee7249cd2285899e6586060b1fdaaa8e93c4b1333a43083c7&scene=132#wechat_redirect)