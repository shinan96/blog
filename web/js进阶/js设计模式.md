## js设计模式

### 设计模式的定义
> 设计模式的定义：在面向对象软件设计过程中针对特定问题的简洁而优雅的解决方案。

### 分类
```
设计模式按标准分为3大类，23种。
```
|类型| 模式名称|
|--|--|
|创建型| 工厂 单例 原型|
|组合型（结构性）| 适配器 装饰器 代理 外观 桥接 |
| 行为性| 观察者 命令 中介者 状态 策略 解释器 迭代器 访问者 模板方法|


### 一、工厂模式
#### 特征
1. 将 new 操作单独封装，只对外提供相应接口；
2. 遇到new 时，就要考虑是否应该使用工厂模式；