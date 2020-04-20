## <font color="##3d7e9a">some</font>
> `Array.prototype.some()` 方法测试数组是不是有一个元素通过了被提供的函数测试，返回的是一个boolean值。

```
注：[].some(), 返回值一直为false。 若数组有一个满足条件，返回true

some() 被调用时不会改变数组。
```

```
let arr = [2,4,5,6]

let is = arr.some(ele => ele > 5)  // true
```
### 用途
1. 判断数组元素中是否存在某个值，模拟include
2. 测试数组元素的值


## <font color="##3d7e9a">filter</font>
> `Array.prototype.filter()` 创建一个新数组，其包含所提供的函数实现测试的所有元素。

### 语法
```
var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])

filter 不会改变原数组，它返回过滤后的新数组。
```


## <font color="##3d7e9a">every</font>
> Array.prototype.every() 用户测试一个数组内所有元素是否都能通过某个指定函数的测试，返回一个boolean值。

```
注：[].every() 返回值一直为true. 所有元素都符合条件才返回true.

every 不会改变原数组。
```

### 用途
1. 检测所有数组元素的大小



## <font color="##3d7e9a">reduce</font>
> Array.prototype.reduce() 对数组上的每个元素执行一个自定义的reduce函数值，将结果汇总为单个返回值。

reducer 函数接收4个参数:
1. Accumulator (acc) (累计器)
2. Current Value (cur) (当前值)
3. Current Index (idx) (当前索引) 可选
4. Source Array (src) (源数组)    可选



### 用途
1. 数组里所有值的和
2. 累加对象数组里的值
3. 将二维数组转化为一维
4. 计算数组中每个元素出现的次数
