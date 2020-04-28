## this的指向

> this一般指向直接调用对象。

### new 的this

> new 出来的实例，this指向实例本身

### 箭头函数的this

> 箭头函数没有绑定this，它的this取决于该函数外部非箭头函数的this 值
> 箭头函数的this其实是定义时的作用域，而不是运行时的作用域，而他本身是不绑定this的

```js
const test = name => console.log(name) 
等同于 const test = name => {
  console.log(name)
}

const add = (p1, p2) => p1 + p2
等同于 const add = (p1, p2) => {
  return p1 + p2
}
```

### 对象中的函数调用
```js
const obj = {
    name: 'Jerry',
    greet: function() {
        console.log(this.name)
    }
}
obj.greet()         //第一种调用方法
obj.greet.call(obj) //第二种调用方法
```

例子里第一种调用方法只是第二种调用方法的语法糖，第二种才是完整的调用方法

### 参考
1. [JS中的箭头函数与this](https://juejin.im/post/5aa1eb056fb9a028b77a66fd)