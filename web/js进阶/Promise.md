## Promise

> Promise为了解决地狱回调，通过 .then 链式调用，解决地狱回调。如果获取上一个 .then的数据，通过return可以传递给下一个 .then。



### Promise的立即执行性

 Promise对象表示未来某个将要发生的事件，但在创建（new）Promise时，作为Promise参数传入的函数是会被立即执行的，只是其中执行的代码可以是异步代码。 

