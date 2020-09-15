MySQL

## win10安装mysql后，navicat连接不上

问题：
Navicat连接MySQL，出现2059 - authentication plugin 'caching_sha2_password'

认证插件的问题，修改root账号的密码验证插件类型为mysql_native_password这是mysql8之后的问题

    ALTER USER 'root'@'localhost' IDENTIFIED BY 'password' PASSWORD EXPIRE NEVER; #修改加密规则password是自己的密码，root也是登陆账户，下同。
    
    ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'; #更新一下用户的密码 
    
    FLUSH PRIVILEGES; #刷新权限 



1. [mysql安装navicat之后，出现2059，Authentication plugin。](https://blog.csdn.net/weixin_37127253/article/details/83279162)
2. [win10安装mysql](https://www.runoob.com/mysql/mysql-install.html)
3. [navicat 连接不上虚拟机上的mysql容器](https://blog.csdn.net/yubin1285570923/article/details/83352491)



### mac安装mysql

* [Mac 安装MySQL](https://www.jianshu.com/p/4fc53d7d7620)
* 

