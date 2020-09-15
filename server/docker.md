

### 关于Docker

* Image: 镜像
* Container: 容器
* Respository: 镜像仓库

### 命令行

```
docker --version			// 查看docker版本号
docker info						// 查看docker基本信息

docker container ls		// 查看正在运行的机器
docker container ls -a			// 查看所有机器

docker stop webserver
docker start webserver

```



### 镜像加速

Preferences  ->  Docker Engine 

输入框添加

"registry-mirrors": [
    "https://reg-mirror.qiniu.com"
  ]

```
网易：https://hub-mirror.c.163.com/
阿里云：https://<你的ID>.mirror.aliyuncs.com
七牛云加速器：https://reg-mirror.qiniu.com
```



### 命令行

```
docker images			// 查看镜像
```



* [写给前端的Docker实战教程](https://zhuanlan.zhihu.com/p/83309276)
* [Get started with Docker Desktop for Mac](https://docs.docker.com/docker-for-mac/)
* [前端docker入门](https://juejin.im/post/6858954064932929544#heading-42)

