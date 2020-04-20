## Object.defineProperty

```
Object.defineProperty 方法可以直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
vue采用ES5提供的Object.defineProperty，监控对数据的操作，从而可以自动触发数据同步。因为是在不用的数据上触发同步，可以精准的将变更发送给绑定的视图，不需要对所有的数据进行修改。
```

### 什么叫双向数据绑定
vue是一个mvvm框架，当数据发生变化时，视图也会跟着变化，相应的视图发生更新后，数据也会跟着变化。

### 双向数据绑定方式
```
1. 发布者-订阅者模式（backbone.js）
2. 脏值检查（angular.js）
3. 数据劫持（vue.js）
```

### 数据劫持

vue.js通过数据劫持，结合订阅者-发布者模式来实现的，数据劫持使用ES5的Object.defineProperty来劫持各个属性的setter和getter, 监控数据变化，在数据发生变化时，发布消息给订阅者，从而出发相应的回调来更新视图


1. [MDN Object.defineProperty()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
2. [Vue双向绑定的实现原理系列](https://segmentfault.com/a/1190000013035407)
3. [剖析Vue原理&实现双向绑定MVVM](https://segmentfault.com/a/1190000006599500)