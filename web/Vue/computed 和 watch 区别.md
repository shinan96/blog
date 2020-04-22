## computed 和 watch 区别

### computed 计算属性

> 在模板里写太多逻辑会让模板过重，切维护困难。

1. 计算属性的结果会被`缓存`
2. 声明的变量不在data里存在.
3. computed中的函数必须要用return返回

``` js
data () {
  return {
    firstName: '',
    lastName: ''
  }
},
computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
}
```

### watch 侦听器

> 一个对象，键是需要观察的表达式，值是对应回调函数。
1. 监听data里的某个变量,接受2个参数`（newValue, oldValue）`
2. `deep`: 深度监听变化,函数名为 `handler`
3. `immediate:true` 页面首次加载的时候做一次监听。
```js
watch:{
  secondChange:{
    handler(oldVal,newVal){
      console.log(oldVal)
      console.log(newVal)
    },
    deep:true,
    immediate:true
  }
}
```

### 区别
```
computed: 一个值受多个数据影响。
watch：   一个数据影响多个值，用于监听一个数据对其他数据的影响。
```

### 参考
1. [vue中computed和watch的区别，以及适用场景](https://www.debugger.wiki/article/html/1563989045170569)