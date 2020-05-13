## async/await

> ES2017标准引入的async函数，是Generator语法糖。 `async`函数完全可以看作多个异步操作，包装成的一个 Promise 对象，而`await`命令就是内部`then`命令的语法糖。
>
> async 返回值是promise对象

###  async 

>  async 作用是返回promise对象，如果return就是promise，则效果一样。

### await

> await = `async wait`
>
>  `await` 阻塞的只是当前路径，并不阻塞其它路径的代码。 

### 参考

- [理解 JavaScript 的 async/await](https://segmentfault.com/a/1190000007535316) 