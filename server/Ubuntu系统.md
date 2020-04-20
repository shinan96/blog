## Ubuntu系统


### 乌班图安装
1. 进入程序和功能，打开适用于Linux的Window子系统
2. Microsoft Store 安装Ubuntu 18.04 LTS
3. 任一命令行，输入bash进入linux系统

### 远程桌面连接
    sudo apt-get install xorg
    sudo apt-get install xfce4
    sudo apt-get install xrdp
    sudo sed -i 's/port=3389/port=3390/g' /etc/xrdp/xrdp.ini
    sudo echo xfce4-session >~/.xsession


    sudo service xrdp restart 

注：本机不能用


### 命令行

    sudo su 获取管理员权限, #
    sudo 用户名 退出管理员权限




### 问题
#### 安装包报错
Unable to fetch some archives, maybe run apt-get update or try with --fix-mi
安装包都会报这个问题，经排查为source本身的问题
      执行apt-get update 修复
若继续报错，则使用
      apt-get update　--fix-missing



### 参考文档
1. [手把手教你启用Win10的Linux子系统（超详细）](https://blog.csdn.net/zhangdongren/article/details/82663977)
2. [如何在Windows10上直接运行Linux？](https://baijiahao.baidu.com/s?id=1607159570058814753&wfr=spider&for=pc)