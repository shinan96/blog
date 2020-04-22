## CommonJS,AMD,CMD,ES6的概念和区别

### defer与async的区别
```
相同点：
脚本会异步加载，渲染引擎会下载脚本，直接执行后面的代码。

不同点：
defer是等到整个页面在内存中正常渲染渲染结束后，才会执行。async是代码下载完成，中断渲染，执行脚本继续渲染。defer是渲染完执行，async是下载完执行。
多个defer会根据顺序依次执行，async则不一定。
```

### CommonJS
Node.js是commonJS规范的主要实践者，它有四个重要的环境变量为模块化的实现提供支持：module、exports、require、global。

commonJS用同步的方式加载模块。在服务端，模块文件都存在本地磁盘，读取非常快，所以这样做不会有问题。但是在浏览器端，限于网络原因，更合理的方案是使用异步加载。


### AMD和require.js
> AMD规范采用异步方式加载模块，模块的加载不影响它后面语句的运行。

用`require.config()`指定引用路径等，用`define()`定义模块，用`require()`加载模块。

### CMD和sea.js
> require.js在申明依赖的模块时会在第一之间加载并执行模块内的代码：

AMD 推崇依赖前置、提前执行，CMD推崇依赖就近、延迟执行。

### ES6 Module

ES6 在语言标准上实现了模块的功能，实现也相当简单，旨在成为浏览器和服务器通用的模块解决方案。命令主要有export和import. export default为默认导出，对应的import不需要大括号。
```js
export a;  import { a } from 'module'
export default {}   import module from 'module
```
ES6的模块不是对象，import命令会被 JavaScript 引擎静态分析，在编译时就引入模块代码，而不是在代码运行时加载，所以无法实现条件加载


### 区别
1. CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
2. CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。

### 参考
1. [ECMAScript 6 入门](https://es6.ruanyifeng.com/#docs/module-loader)
2. [前端模块化：CommonJS,AMD,CMD,ES6](https://juejin.im/post/5aaa37c8f265da23945f365c)