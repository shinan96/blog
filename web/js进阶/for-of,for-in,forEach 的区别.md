## for-of,for-in,forEach 的区别
### forEach
> forEach 的速度不如 for,forEach 不能 break 和 return
### for-in
> 其出发点是遍历对象，也可以遍历数组，不过不建议

``` javascript
var arr = [1,2,4,5]

arr.name = 'Array'
for(var ele in arr) {
  console.log(ele);
}

```
for-in会将数组里的name属性遍历出来


### for-of
> 因为for-in存在的问题，不能直接修改for-in的api，所以推出来for-of,专门用于循环数组。
正确响应 break、continue 和 return 语句


### 参考
1. [js的四种for循环](https://juejin.im/entry/5a1654e951882554b8373622)