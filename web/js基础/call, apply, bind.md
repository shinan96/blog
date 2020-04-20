## 详解call, apply, bind

### 前言

    js中call(), apply()和bind()是Function.prototype上的方法，<font color='#f00'>用来改变函数运行时上下文</font>，即this的指向，同时，也可以实现继承。


apply 和 call 方法中如果没有传入参数，或者传入的是null，那么调用该方法的函数对象中的 this 就是默认的 window

都是在特定的作用域中调用函数，等于设置函数体内this对象的值，以扩充函数赖以运行的作用域。一般来说，this总是指向调用某个方法的对象，但是使用call()和apply()方法时，就会改变this的指向。

### call
```
call()方法使用一个指定的this值和单独给出的一个或多个参数来调用一个函数
```

### 参考资料

1. [apply 与 call 详细深入理解](https://segmentfault.com/a/1190000019019752)
2. [深入理解JavaScript系列（4）：立即调用的函数表达式](https://www.cnblogs.com/TomXu/archive/2011/12/31/2289423.html)
3. [冴羽的博客](https://github.com/mqyqingfeng/Blog)