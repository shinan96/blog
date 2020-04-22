## 普通题目

### instanceof 的原理

> 可以判断引用类型的具体类型

```js
let arr = []
console.log(arr instanceof Array);   // true
```

> 通过构造函数的原型和实例的__proto__做全等比较判断。
```js
function _instanceof(A, B) {
  var O = B.prototype;// 取B的显示原型
  A = A.__proto__;// 取A的隐式原型
  while (true) {
      //Object.prototype.__proto__ === null
      if (A === null)
          return false;
      if (O === A)// 这里重点：当 O 严格等于 A 时，返回 true
          return true;
      A = A.__proto__;
  }
}
```

1. instanceof不适合检测一个对象本身的类型。

