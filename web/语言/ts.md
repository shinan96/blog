## TypeScript



1：ts类型声明时，类型名均为小写，Array除外；

```typescript
let isFlag: boolean = false;
let count: number = 10;
let name1: string = 'shinan';

let list: number[] = []
let arr: Array<number> = []
```

### 泛型
> 宽泛的定义一个类型，不必僵硬的使用一个类型去处理；
``` javascript
function identity <T>(value: T) : T {
  return value;
}

console.log(identity<Number>(1)) // 1
```
T就像传递参数一样，我们传递了我们想要用于特定函数调用的类型。

* T（Type）: 表示类型
* K（Key）：表示对象中的键类型；
* V（Value）：表示对象中的值类型；
* E（Element）：表示元素类型。


### 元祖
> 概念：规定了元素的数量和每个元素类型的数组

### 特点
1. 类型注解
2. 接口
3. 类

### 参考
1. [TypeScript中文网](https://www.tslang.cn/)