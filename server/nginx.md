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

