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



```
vue-class-component				对vue组件封装，让vue组件语法结合ts语法之后更加扁平化
vue-property-decorator		在上面增强了更多的结合vue特性的装饰器，新增了七个装饰器
Component，Emit, Prop, Watch, Inject, Provide, Model
vuex-class								基于vue-class-component对Vuex提供的装饰器
State, Action, Mutation, namespace
```

Shims-vue.d.ts文件说明

```
.d.ts 类型声明文件
由于TS默认不支持*.vue后缀的文件，所以需要在项目中创建一个.d.ts文件，用来支持*.vue文件。
```



### 参考
1. [TypeScript中文网](https://www.tslang.cn/)
2. [从 JavaScript 到 TypeScript 1 - 什么是 TypeScript](https://tasaid.com/Blog/20171011231943.html?sgs=sf)  入门友好
3. [TypeScript 入门教程](https://ts.xcatliu.com/)

