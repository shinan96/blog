## js线程问题汇总
js的事件循环就是js的执行机制
js是一门单线程语言，防止多线程操作dom，引起页面不正常；
js多线程只不过是模拟出来的

js可以实现异步操作

所有的js任务分为同步任务和异步任务，主任务进入主执行栈，立即执行，异步任务会通过任务队列（event Queue）的机制来协调；主任务内的任务执行为空后，会去event queue读取对应的任务，进入主程序执行

优先级
  宏任务  >  微任务

(macro)task主要包含：script(整体代码)、setTimeout、setInterval、I/O、UI交互事件、setImmediate(Node.js 环境)

microtask主要包含：Promise、MutaionObserver、process.nextTick(Node.js 环境)


[你不得不知的Event Loop](https://mengera88.github.io/2018/03/12/%E4%BD%A0%E4%B8%8D%E5%BE%97%E4%B8%8D%E7%9F%A5%E7%9A%84Event-Loop/)

