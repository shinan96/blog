## webpack 基础
> 跟着webpack官网指南学习，version: v1.13.0

### webpack装过，为什么还要装webpack-cli

在webpack 3+,webpack和webpack-cli本身在一个包里，4+之后，将两者拆分，更好的管理他们。
webpack-cli用于在命令行中运行webpack.


### 项目里为什么可以同时使用es6 和commonJs 模块导入导出

webpack里支持使用es6里的import,export；node 原生支持commonJs模块(`module.exports和require`)的导入导出；`import和export`在多数浏览器都不支持，所以webpack不会更改`import和export`已外的其他代码，所以项目中需要babel转译器。

### path.resolve(__dirname, 'dist')

```js
__dirname             // 当前路径
path.resolve(__dirname, 'dist')       // 当前路径+dist
```

### loader作用
处理除js以外，其余类型的文件。

### webpack --watch 使用观察者模式

修改文件后，dist上的index.html没了，没找到原因。


### webpack-dev-server和webpack-dev-middleware区别
webpack-dev-middleware 是内存型文件系统，重建速度很快。作为一个容易，在项目中梳理文件映射系统。
webpack-dev-server = express + webpack-dev-middleware; 二次封装插件

### HMR和热加载的区别
HMR（Hot Module Replacement）实现浏览器的无刷新更新（hot reload）；热加载是刷新整个页面。

### 包用途
|包名称|用途|
|--|--|
| style-loader| 分析各css关系，将多个css合并成一个 |
| css-loader | 将css挂载到页面header部分 |
| file-loader | 将图片资源导入到项目中 |
| url-loader |  处理字体资源 |
| csv-loader| csv格式资源处理|
| xml-loader | xml格式资源处理 |
| html-webpack-plugin | 打包出html文件，自动引入js,css |
| clean-webpack-plugin | 清理打包后文件夹内容 |
| webpack-dev-server |起服务|
| babel-core babel-loader babel-preset-env |es6转es5|
| terser-webpack-plugin |压缩js代码|
| compression-webpack-plugin |开启gzip|


注：
loader执行顺序是“`从右向左，从下向上`” 


### 参考资料
- [深度解锁Webpack系列(基础篇)](https://juejin.im/post/5e5c65fc6fb9a07cd00d8838)
- [webpack中文网 指南](https://www.webpackjs.com/guides/)
