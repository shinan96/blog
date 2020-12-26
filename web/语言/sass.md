## sass css预处理器

> sass运行在服务器端， `sass`基于`Ruby`语言开发而成，因此安装`sass`前需要[安装Ruby](http://rubyinstaller.org/downloads)。（注:mac下自带Ruby无需在安装Ruby!） 

### 一、sass与scss的区别

scss是cass的升级版本，兼容sass之前的功能，主要区别在于sass靠缩进表示嵌套关系，scss是花括号

```scss
//sass 太费眼了
.father
    width:100px;
    .son
        width:50px;
//scss 适合我这种眼瘸手残患者
.father{
    width:100px;
    .son{
        width:50px;
    }
} 

```

### 二、安装

```
cnpm i node-sass sass-loader -D
```

安装完成后， style标签加`lang='scss'`即可。

#### 自定义scss配置

```javascript
// vue.config.js
const fs = require('fs')
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: fs.readFileSync('src/variables.scss', 'utf-8')
      }
    }
  }
}
```

#### Dart-sass与Node-sass区别

> sass官方主力推dart-sass,最新的特性都会在上面实现

相同：都是将sass编译成css工具

区别：

- node-sass 是用 node(调用 cpp 编写的 libsass)来编译 sass；
- dart-sass 是用 drat VM 来编译 sass；

- node-sass是自动编译实时的，dart-sass需要保存后才会生效
  推荐 dart-sass 性能更好（也是 sass 官方使用的），而且 node-sass 因为国情问题经常装不上

#### 安装dart-sass

```javascript
cnpm i dart-sass sass-loader -D

// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'), // This line must in sass option
      },
    },
  }
}
```



### 二、规则

1. 变量
2. 嵌套
3. 引入
4. 静默注释
5. 混入





### 参考

- [Sass中文网](https://www.sass.hk/)
- [dart-sass与node-sass介绍](https://blog.csdn.net/qianxing111/article/details/107617538)
- [SASS实现的最佳实践（dart-sass）](https://www.yuque.com/shareman/development/xgk1sq)